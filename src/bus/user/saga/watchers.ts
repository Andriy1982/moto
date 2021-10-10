//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {
  createCurrentLocal,
  fetchCurrentLocal,
  change,
  deletePhoto,
  fetchDetail,
  registerFCM,
} from './workers';

function* watchChange(): SagaIterator {
  yield takeLatest(types.CHANGE_USER, change);
}

function* watchCreateCurrentLocal(): SagaIterator {
  yield takeEvery(types.CREATE_CURRENT_USER_LOCAL, createCurrentLocal);
}

function* watchFetchCurrentLocal(): SagaIterator {
  yield takeEvery(types.FETCH_CURRENT_USER_LOCAL, fetchCurrentLocal);
}

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchDeletePhoto(): SagaIterator {
  yield takeEvery(types.DELETE_PHOTO, deletePhoto);
}

function* watchRegisterFCM(): SagaIterator {
  yield takeEvery(types.REGISTER_FCM, registerFCM);
}

export function* watchUser(): SagaIterator {
  yield all([
    call(watchFetchCurrentLocal),
    call(watchCreateCurrentLocal),
    call(watchChange),
    call(watchDeletePhoto),
    call(watchFetchDetail),
    call(watchRegisterFCM),
  ]);
}
