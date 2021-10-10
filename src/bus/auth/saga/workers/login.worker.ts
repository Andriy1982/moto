import {all, call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';
// App
import {uiActions} from '@app/bus/ui';
import {authActions} from '@app/bus/auth';
import type {Auth} from '@app/bus/auth';
import {User, userActions} from '@app/bus/user';
// Local
import {apiAuth} from '../../api';
import type {LoginAsync, LoginByServiceAsync, LoginByServiceConfirmAsync} from '../../types';
import {types} from '../../types';
import {AuthService} from '@app/services/auth';
import {apiUser} from '@app/bus/user/api';
export function* login(action: LoginAsync): SagaIterator {
  try {
    const {navigate, ...payload} = action.payload;

    yield put(uiActions.toggleLoader({name: 'sign_in', loading: true}));
    yield put(uiActions.clearError('sign_in'));

    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
    }

    const response: AxiosResponse<Auth.ResLogin> = yield call(apiAuth.login, {
      data: {login: payload.login, password: payload.password},
      headers,
    });

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
      if (navigate) navigate();
    }
  } catch (error: any) {
    const message =
      !error?.response?.status || error?.response?.status === 500
        ? 'unknow'
        : `login_${error.response.status}`;

    yield put(
      uiActions.setError({
        name: 'sign_in',
        message,
      }),
    );
  } finally {
    yield put(uiActions.toggleLoader({name: 'sign_in', loading: false}));
  }
}

export function* autoLogin(): SagaIterator {
  try {
    const token: string | null = yield call(AuthService.fetchToken);
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (token && deviceId) {
      yield put(authActions.saveAuthData({token, deviceId}));
    }
  } catch (error) {
    console.log('auto login worker error', error);
  } finally {
    yield put({
      type: types.END_AUTO_LOGIN,
    });
  }
}

export function* loginByService(action: LoginByServiceAsync): SagaIterator {
  try {
    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };

    const response: AxiosResponse<{link: string}> = yield call(
      apiAuth.loginByService,
      action.payload,
      headers,
    );

    if (response.data && response.data.link) {
      window.location.href = response.data.link;
    }
  } catch (error) {
    console.log('login by service worker error', error);
  }
}

export function* loginByServiceConfirm(action: LoginByServiceConfirmAsync): SagaIterator {
  try {
    if (
      action.payload &&
      action.payload.authdata &&
      action.payload.deviceId &&
      action.payload.userId
    ) {
      const response: AxiosResponse<User.User | User.Partner> = yield call(
        apiUser.fetchDetail,
        action.payload.userId,
        {deviceid: action.payload.deviceId},
      );

      if (response && response.data) {
        yield all([
          call(AuthService.saveToken, action.payload.authdata),
          call(AuthService.saveDeviceId, action.payload.deviceId),
        ]);
        yield put(userActions.createCurrentUserLocalAsync(response.data));
        yield put(
          authActions.saveAuthData({
            token: action.payload.authdata,
            deviceId: action.payload.deviceId,
          }),
        );
      }
    }
  } catch (error) {
    console.log('auto login by service confirm worker error', error);
  }
}
