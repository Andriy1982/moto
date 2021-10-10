import {all, call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local
import {uiActions} from '@app/bus/ui';
import {authActions} from '@app/bus/auth';
import type {Auth} from '@app/bus/auth';
// Local Dir
import {apiAuth} from '../../api';
import {RegisterAsync, RegisterConfirmAsync, types} from '../../types';
import {AuthService} from '@app/services/auth';
import {userActions} from '@app/bus/user';
import {Routes} from '@app/routes';

export function* register(action: RegisterAsync): SagaIterator {
  try {
    const headers: Auth.HeadersRegister = {
      system: 'web',
    };
    const {navigate, ...payload} = action.payload;

    yield put(uiActions.toggleLoader({name: 'sign_up', loading: true}));
    yield put(uiActions.clearError('sign_up'));

    const response: AxiosResponse<Auth.ResRegister> = yield call(
      apiAuth.register,
      payload,
      headers,
    );
    if (response && response.data) {
      navigate &&
        navigate({
          id: response.data.id,
          login: response.data.phone,
        });
    }
  } catch (error: any) {
    const message =
      !error?.response?.status || error?.response?.status === 500
        ? 'unknow'
        : `register_${error.response.status}`;

    yield put(
      uiActions.setError({
        name: 'sign_up',
        message,
      }),
    );
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_up', loading: false}));
  }
}

export function* registerConfirm(action: RegisterConfirmAsync): SagaIterator {
  try {
    const {navigate, ...payload} = action.payload;

    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
    }

    const response: AxiosResponse<Auth.ResRegisterConfirm> = yield call(
      apiAuth.registerConfirm,
      payload,
      headers,
    );

    if (response.data.authdata && response.data.deviceId) {
      yield all([
        call(AuthService.saveToken, response.data.authdata),
        call(AuthService.saveDeviceId, response.data.deviceId),
      ]);
      yield put(userActions.createCurrentUserLocalAsync(response.data.user));
      yield put(
        authActions.saveAuthData({
          token: response.data.authdata,
          deviceId: response.data.deviceId,
        }),
      );
      if (navigate) {
        navigate(Routes.PROFILE);
      }
    }
  } catch (error) {
    console.log('Error register confirm worker');
  } finally {
    yield put({
      type: types.END_REGISTER_CONFIRM,
    });
  }
}
