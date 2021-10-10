import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from 'redux-saga';

// Local
import {userActions} from '@app/bus/user';
import {uiActions} from '@app/bus/ui';

import type {User} from '@app/bus/user';
// Local Dir
import {apiUser} from '../../api';
import {FetchDetailAsync, types} from '../../types';
import {AxiosResponse} from 'axios';

// import {getUniqueId} from 'react-native-device-info';

export function* fetchCurrentLocal(): SagaIterator {
  try {
    let user: User.User | User.Partner | null = yield call(apiUser.fetchUserLocal);
    try {
      // const deviceid = getUniqueId();
      if (
        user &&
        user.id
        //  && deviceid
      ) {
        const response: AxiosResponse<User.User | User.Partner> = yield call(
          apiUser.fetchDetail,
          user.id,
          //  {deviceid}
        );
        if (response.data) {
          user = response.data;
          yield call(apiUser.saveUserLocal, user);
        }
      }
    } catch (error) {
      console.log('Don`t update data user authenticated from server');
    }
    yield put(userActions.saveCurrent(user));
  } catch (error) {
    console.log('fetch current local user worker error:', error);
  } finally {
    yield put({
      type: types.END_FETCH_CURRENT_USER_LOCAL,
    });
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'fetch_detail_user',
        loading: true,
      }),
    );
    const response: AxiosResponse<User.User> = yield call(apiUser.fetchDetail, action.payload);

    if (response.data) yield put(userActions.saveDetail(response.data));
  } catch (error) {
    console.log('fetch Detail user worker error:', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'fetch_detail_user',
        loading: false,
      }),
    );
  }
}
