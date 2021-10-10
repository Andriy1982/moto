import {call, put} from 'redux-saga/effects';
import type {AxiosResponse} from 'axios';
import type {SagaIterator} from '@redux-saga/core';

//app
import {User} from '@app/bus/user';
import {userActions} from '@app/bus/user';
import type {Auth} from '@app/bus/auth';
//local
import {apiUser} from '../../api';
import type {ChangeAsync, RegisterFCMAsync} from '../../types';
import {AuthService} from '@app/services/auth';
// import {authSelectors} from '@app/bus/auth';
// import {showToast} from '@app/services/toast';

export function* change(action: ChangeAsync): SagaIterator {
  try {
    const id = action.payload.id;
    const data = action.payload;
    //@ts-ignore
    delete data.id;

    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
    }
    const response: AxiosResponse<User.User | User.Partner> = yield call(apiUser.change, {
      data,
      params: {
        id,
      },
      headers,
    });

    if (response.data) {
      yield put(userActions.createCurrentUserLocalAsync(response.data));
      /*showToast({
        type: 'success',
        text1: 'Сохранено',
      });
      */
    }
  } catch (error) {
    console.log('error change user worker', JSON.stringify(error));
    // showToast({
    //   type: 'error',
    //   text1: 'Ошибка',
    //   text2: 'Не удалось изменить данные',
    // });
  }
}

export function* registerFCM(action: RegisterFCMAsync): SagaIterator {
  try {
    // const deviceid = getUniqueId();

    yield call(apiUser.registerFCM, {
      data: {
        token: action.payload,
      },
      headers: {
        // deviceid,
      },
    });
  } catch (error) {
    console.log('error register fcm:', error);
  }
}
