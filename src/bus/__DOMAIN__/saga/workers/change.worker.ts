import {call, put} from 'redux-saga/effects';
import type {AxiosResponse} from 'axios';
import type {SagaIterator} from '@redux-saga/core';

// Local

import {domainActions} from '@app/bus/__DOMAIN__';
import {uiActions} from '@app/bus/ui';
import {apiDomain} from '../../api';
// Local Dir
import type {Domain} from '@app/bus/__DOMAIN__';
import type {ChangeAsync} from '../../types';

export function* changeItem(action: ChangeAsync): SagaIterator {
  try {
    yield put(domainActions.toggleLoading(true));
    // Api call or some async actions
    const response: AxiosResponse<Domain.Detail> = yield call(apiDomain.change, action.payload);
    if (response.data) {
      yield put(domainActions.changeItem(response.data));
      yield put(domainActions.toggleLoading(false));
    }
  } catch (error) {
    // yield put(uiActions.emitError(error, 'Domain changeItem workers'))
    yield put(domainActions.toggleLoading(false));
  }
}
