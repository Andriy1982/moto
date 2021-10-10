import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from 'redux-saga';
// Local
import {appActions} from '@app/bus/app';

// Local Dir
import {apiApp} from '../../api';
import {types} from '../../types';
import {AxiosResponse} from 'axios';
import {sortCategories} from '@app/helpers/sortCategories';

export function* fetchIntro(): SagaIterator {
  try {
    const response: boolean = yield call(apiApp.fetchIntro);

    if (response) {
      yield put(appActions.saveIntro(response));
    }
  } catch (error) {
    console.log('Error fetch intro', error);
  } finally {
    yield put({
      type: types.END_FETCH_INTRO,
    });
  }
}

export function* fetchCategories(): SagaIterator {
  try {
    const response: AxiosResponse<string[]> = yield call(apiApp.fetchCategories);

    if (response.data) {
      yield put(appActions.saveCategories(response.data.sort(sortCategories)));
    }
  } catch (error) {
    console.log('Error fetch categories', error);
  } finally {
    yield put({
      type: types.END_FETCH_CATEGORIES,
    });
  }
}

export function* fetchCities(): SagaIterator {
  try {
    const response: AxiosResponse<string[]> = yield call(apiApp.fetchCities);

    if (response.data) {
      yield put(appActions.saveCities(response.data));
    }
  } catch (error) {
    console.log('Error fetch cities', error);
  } finally {
    yield put({
      type: types.END_FETCH_CITIES,
    });
  }
}
