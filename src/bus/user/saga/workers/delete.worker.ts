import {call, select, put} from 'redux-saga/effects';
import type {AxiosResponse} from 'axios';
import type {SagaIterator} from '@redux-saga/core';

//app
import {User, userSelectors} from '@app/bus/user';
import {userActions} from '@app/bus/user';
import type {Auth} from '@app/bus/auth';
import {AuthService} from '@app/services/auth';
//local
import {apiUser} from '../../api';
import type {DeletePhotoAsync} from '../../types';

export function* deletePhoto(action: DeletePhotoAsync): SagaIterator {
  try {
    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
    }
    const user: User.Partner = yield select(userSelectors.getCurrent);
    const response: AxiosResponse<User.User | User.Partner> = yield call(apiUser.deletePhoto, {
      params: {
        id: user.id,
        uri: action.payload,
      },
      headers,
    });

    if (response.data) {
      yield put(userActions.createCurrentUserLocalAsync(response.data));
    }
  } catch (error) {
    console.log('error delete photo partner worker', JSON.stringify(error));
  }
}
