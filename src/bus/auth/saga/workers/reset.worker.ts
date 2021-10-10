import {call, put, all} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

//app
import {uiActions} from '@app/bus/ui';
import {authActions} from '@app/bus/auth';
import type {Auth} from '@app/bus/auth';

//local
import {apiAuth} from '../../api';
import type {ResetPasswordStartAsync, ResetPasswordEndAsync} from '../../types';
import {User, userActions} from '@app/bus/user';
import {AuthService} from '@app/services/auth';
import {Routes} from '@app/routes';

export function* resetStart(action: ResetPasswordStartAsync): SagaIterator {
  try {
    const {navigate, login} = action.payload;
    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
    }

    yield put(uiActions.toggleLoader({name: 'reset_password_start', loading: true}));

    const response: AxiosResponse<User.User> = yield call(apiAuth.resetPasswordStart, {
      data: {login},
      headers,
    });

    if (response?.data) {
      console.log(response?.data);
      navigate && navigate({login});
    }
  } catch (error) {
    const message =
      !error?.response?.status || error?.response?.status === 500
        ? 'unknow'
        : `login_${error.response.status}`;

    yield put(
      uiActions.setError({
        name: 'reset_password_start',
        message,
      }),
    );
  } finally {
    yield put(uiActions.toggleLoader({name: 'reset_password_start', loading: false}));
  }
}

export function* resetEnd(action: ResetPasswordEndAsync): SagaIterator {
  const {toast, navigate, ...payload} = action.payload;
  try {
    yield put(uiActions.toggleLoader({name: 'reset_password_end', loading: true}));

    const response: AxiosResponse<Auth.ResRegisterConfirm> = yield call(
      apiAuth.resetPasswordEnd,
      payload,
    );

    if (response.data.authdata) {
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
      if (toast && navigate) {
        navigate(Routes.PROFILE);
        toast('Пароль изменен', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    }
  } catch (error) {
    if (toast) {
      toast('Не удалось изменить данные', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  } finally {
    yield put(uiActions.toggleLoader({name: 'reset_password_end', loading: false}));
  }
}
