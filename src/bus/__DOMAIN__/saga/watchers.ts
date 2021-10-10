//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {changeItem, createItem, deleteItem, fetchDetail, fetchItems} from './workers';

function* watchChange(): SagaIterator {
  yield takeEvery(types.CHANGE_ITEM, changeItem);
}

function* watchCreate(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

function* watchDeleteItem(): SagaIterator {
  yield takeEvery(types.DELETE_ITEM, deleteItem);
}

function* watchFetchItems(): SagaIterator {
  yield takeLatest(types.FETCH_ITEMS, fetchItems);
}

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

export function* watchDomain(): SagaIterator {
  yield all([
    call(watchChange),
    call(watchCreate),
    call(watchDeleteItem),
    call(watchFetchItems),
    call(watchFetchDetail),
  ]);
}
