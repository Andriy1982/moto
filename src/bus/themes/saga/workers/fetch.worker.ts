import {call, put} from 'redux-saga/effects';

import type {SagaIterator} from '@redux-saga/core';

// Local
import {themesActions} from '@app/bus/themes';

// Local Dir
import {apiThemes} from '../../api';

export function* fetchTheme(): SagaIterator {
  try {
    const response = yield call(apiThemes.fetch);
    if (response) {
      yield put(themesActions.changeTheme(response));
    }
  } catch (error) {
    console.log(error, 'Themes fetch workers');
  }
}

export function* fetchType(): SagaIterator {
  try {
    const response = yield call(apiThemes.fetchType);
    if (response) {
      yield put(themesActions.changeType(response));
    }
  } catch (error) {
    console.log(error, 'Themes type fetch workers');
  }
}
