//Core
import {all, call, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {fetchItems, fetchMapItems, fetchDetail} from './workers';

function* watchFetchItems(): SagaIterator {
  yield takeLatest(types.FETCH_ITEMS, fetchItems);
}

function* watchFetchMapItems(): SagaIterator {
  yield takeLatest(types.FETCH_ITEMS_MAP, fetchMapItems);
}

function* watchFetchDetail(): SagaIterator {
  yield takeLatest(types.FETCH_DETAIL, fetchDetail);
}

export function* watchPartner(): SagaIterator {
  yield all([call(watchFetchItems), call(watchFetchMapItems), call(watchFetchDetail)]);
}
