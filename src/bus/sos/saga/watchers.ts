//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {
  changeItem,
  changeSate,
  createItem,
  deleteItem,
  fetchCurrent,
  fetchDetail,
  fetchItems,
  fetchDeleted,
} from './workers';

function* watchChange(): SagaIterator {
  yield takeEvery(types.CHANGE_ITEM, changeItem);
}

function* watchCreate(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

function* watchDeleteItem(): SagaIterator {
  yield takeEvery(types.DELETE_ITEM, deleteItem);
}

function* watchFetchCurrent(): SagaIterator {
  yield takeLatest(types.FETCH_ITEM, fetchCurrent);
}

function* watchFetchItems(): SagaIterator {
  yield takeEvery(types.FETCH_ITEMS, fetchItems);
}

function* watchDeleteItems(): SagaIterator {
  yield takeLatest(types.DELETED_ITEMS, fetchDeleted);
}

function* watchFetchDetail(): SagaIterator {
  yield takeLatest(types.FETCH_DETAIL, fetchDetail);
}

function* watchChangeState(): SagaIterator {
  yield takeEvery(types.CHANGE_STATE, changeSate);
}

export function* watchSos(): SagaIterator {
  yield all([
    call(watchChange),
    call(watchCreate),
    call(watchDeleteItem),
    call(watchFetchCurrent),
    call(watchFetchItems),
    call(watchFetchDetail),
    call(watchChangeState),
    call(watchDeleteItems),
  ]);
}
