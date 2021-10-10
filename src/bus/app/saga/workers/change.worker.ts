import {call} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';

//app
// import {appActions} from '@app/bus/app';

import {apiApp} from '../../api';
//local
import type {ChangeIntroAsync} from '../../types';

export function* changeIntro(action: ChangeIntroAsync): SagaIterator {
  try {
    yield call(apiApp.changeIntro, action.payload);
  } catch (error) {
    console.log('Change worker error:', error);
  }
}
