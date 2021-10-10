//Core
import {all, call, takeEvery} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {createItem} from './workers';

function* watchCreate(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

export function* watchSupport(): SagaIterator {
  yield all([call(watchCreate)]);
}
