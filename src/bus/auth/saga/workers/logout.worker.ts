import {call, select, put, take} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// import AsyncStorage from '@react-native-community/async-storage';
// App
import {authActions} from '@app/bus/auth';
import {userActions} from '@app/bus/user';
// Local
import {apiAuth} from '../../api';
import {AuthService} from '@app/services/auth';
import {sosActions, sosSelectors} from '@app/bus/sos';
import {types as sosTypes} from '@app/bus/sos/types';
import {Auth} from '@app/bus/auth';

export function* logout(): SagaIterator {
  try {
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    const headers: Auth.ReqLogoutHeaders = {};
    if (deviceId) {
      headers.deviceId = deviceId;
    }
    const sos = yield select(sosSelectors.getCurrent);
    if (sos && sos.id) {
      yield put(
        sosActions.deleteAsync({
          id: sos.id,
        }),
      );
      yield take(sosTypes.END_DELETE_ITEM);
      localStorage.removeItem('sos');
    }
    yield call(apiAuth.logout, headers);
    yield call(AuthService.deleteToken);
  } catch (error) {
    console.log('logout error worker', error);
  } finally {
    yield put(userActions.createCurrentUserLocalAsync(null));
    yield put(authActions.saveAuthData({token: null, deviceId: null}));
  }
}
