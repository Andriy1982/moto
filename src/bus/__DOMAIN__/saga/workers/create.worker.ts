import {call, put} from 'redux-saga/effects';
import {message} from 'antd';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local
// import { ERRORS_MAIN } from '@app/constants'
import {uiActions} from '@app/bus/ui';
import {domainActions} from '@app/bus/__DOMAIN__';
import type {Domain} from '@app/bus/__DOMAIN__';
// Local Dir
import {apiDomain} from '../../api';
import type {CreateAsync} from '../../types';

export function* createItem(action: CreateAsync): SagaIterator {
  try {
    yield put(domainActions.toggleLoading(true));

    const response: AxiosResponse<Domain.Item> = yield call(apiDomain.create, action.payload);

    if (response.data) {
      yield put(domainActions.createItem(response.data));
      yield put(domainActions.toggleLoading(false));

      yield call(message.success, `Cтворенний 🎉`);
    }
  } catch (error) {
    // yield put(uiActions.emitError(error.response, 'Domain createItem worker'))
    // yield call(message.error, ERRORS_MAIN)
    yield put(domainActions.toggleLoading(false));
  }
}
