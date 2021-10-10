import {call, put} from 'redux-saga/effects';

import type {SagaIterator} from '@redux-saga/core';

// Local
import {themesActions} from '@app/bus/themes';

import {apiThemes} from '../../api';
// Local Dir
import type {ChangeAsync, ChangeTypeAsync} from '../../types';

export function* changeTheme(action: ChangeAsync): SagaIterator {
  try {
    yield call(apiThemes.change, action.payload);
    yield put(themesActions.changeTheme(action.payload));
  } catch (error) {
    console.log(error, 'Themes change workers');
  }
}

export function* changeType(action: ChangeTypeAsync): SagaIterator {
  try {
    yield call(apiThemes.changeType, action.payload);
    yield put(themesActions.changeType(action.payload));
  } catch (error) {
    console.log(error, 'Themes type change workers');
  }
}
