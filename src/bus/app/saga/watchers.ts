//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {bootstrap, changeIntro, fetchIntro, fetchCategories, fetchCities} from './workers';

function* watchBootstrap(): SagaIterator {
  yield takeEvery(types.BOOTSTRAP, bootstrap);
}

function* watchChangeIntro(): SagaIterator {
  yield takeLatest(types.CHANGE_INTRO, changeIntro);
}

function* watchFetchIntro(): SagaIterator {
  yield takeLatest(types.FETCH_INTRO, fetchIntro);
}

function* watchFetchCategories(): SagaIterator {
  yield takeEvery(types.FETCH_CATEGORIES, fetchCategories);
}

function* watchFetchCities(): SagaIterator {
  yield takeEvery(types.FETCH_CITIES, fetchCities);
}

export function* watchApp(): SagaIterator {
  yield all([
    call(watchBootstrap),
    call(watchChangeIntro),
    call(watchFetchIntro),
    call(watchFetchCities),
    call(watchFetchCategories),
  ]);
}
