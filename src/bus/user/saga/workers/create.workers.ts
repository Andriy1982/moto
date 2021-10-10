import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from 'redux-saga';

// Local
import {userActions} from '@app/bus/user';

// Local Dir
import {apiUser} from '../../api';
import {CreateCurrentLocalAsync, types} from '../../types';
import {themesActions} from '@app/bus/themes';

export function* createCurrentLocal(action: CreateCurrentLocalAsync): SagaIterator {
  try {
    if (action.payload && action.payload.settings && action.payload.settings.theme) {
      console.log('update theme ', action.payload.settings.theme);
      //@ts-ignore
      yield put(themesActions.changeTypeAsync(action.payload.settings.theme));
    }
    yield call(apiUser.saveUserLocal, action.payload);
    yield put(userActions.saveCurrent(action.payload));
  } catch (error) {
    console.log('create current local user worker error:', error);
  } finally {
    yield put({
      type: types.END_CREATE_CURRENT_USER_LOCAL,
    });
  }
}
