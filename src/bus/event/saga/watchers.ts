//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {changeSate, createItem, fetchDetail, fetchItems, deleteItem, fetchDeleted} from './workers';

function* watchCreate(): SagaIterator {
  yield takeEvery(types.CREATE_ITEM, createItem);
}

function* watchFetchItems(): SagaIterator {
  yield takeLatest(types.FETCH_ITEMS, fetchItems);
}

function* watchDeleteItems(): SagaIterator {
  yield takeLatest(types.DELETED_ITEMS, fetchDeleted);
}

function* watchFetchDetail(): SagaIterator {
  yield takeEvery(types.FETCH_DETAIL, fetchDetail);
}

function* watchChangeState(): SagaIterator {
  yield takeEvery(types.CHANGE_STATE, changeSate);
}

function* watchDeleteState(): SagaIterator {
  yield takeEvery(types.DELETE_ITEM, deleteItem);
}

export function* watchEvent(): SagaIterator {
  yield all([
    call(watchCreate),
    call(watchFetchItems),
    call(watchFetchDetail),
    call(watchChangeState),
    call(watchDeleteState),
    call(watchDeleteItems),
  ]);
}
