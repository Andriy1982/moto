//Core
import {all, call, takeEvery} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {changeTheme, changeType, fetchTheme, fetchType} from './workers';

function* watchChange(): SagaIterator {
  yield takeEvery(types.CHANGE_THEME, changeTheme);
}

function* watchFetch(): SagaIterator {
  yield takeEvery(types.FETCH_THEME, fetchTheme);
}

function* watchChangeType(): SagaIterator {
  yield takeEvery(types.CHANGE_TYPE_THEME, changeType);
}

function* watchFetchType(): SagaIterator {
  yield takeEvery(types.FETCH_TYPE_THEME, fetchType);
}

export function* watchThemes(): SagaIterator {
  yield all([call(watchChange), call(watchFetch), call(watchFetchType), call(watchChangeType)]);
}
