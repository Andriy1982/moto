import {take, put, all} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';

//app
import {appActions} from '@app/bus/app';
import {types as authTypes} from '@app/bus/auth/types';
import {types as userTypes} from '@app/bus/user/types';
//local
import {types} from '../../types';
import {authActions} from '@app/bus/auth';
import {userActions} from '@app/bus/user';

export function* bootstrap(): SagaIterator {
  try {
    yield put(authActions.autoLoginAsync());
    yield take(authTypes.END_AUTO_LOGIN),
      yield all([
        put(appActions.fetchIntroAsync()),
        put(userActions.fetchCurrentUserLocalAsync()),
        put(appActions.fetchCategoriesAsync()),
      ]);
    yield all([
      take(types.END_FETCH_INTRO),
      take(userTypes.END_FETCH_CURRENT_USER_LOCAL),
      take(types.END_FETCH_CATEGORIES),
    ]);
  } catch (error) {
    console.log('Bootstrap worker error:', error);
  } finally {
    yield put(appActions.saveInitialize(true));
  }
}
