import {call, put} from 'redux-saga/effects';
import {message} from 'antd';
import type {SagaIterator} from 'redux-saga';
// Local
// import { ERRORS_MAIN } from '@app/constants'
import {domainActions} from '@app/bus/__DOMAIN__';
import {uiActions} from '@app/bus/ui';
// Local Dir
import {apiDomain} from '../../api';
import type {DeleteAsync} from '../../types';

export function* deleteItem(action: DeleteAsync): SagaIterator {
  try {
    yield put(domainActions.toggleLoading(true));

    // Api call or some async actions
    yield call(apiDomain.delete, action.payload);
    yield put(domainActions.toggleLoading(false));
    yield call(message.success, `Видалено 🗑`);
  } catch (error) {
    // yield put(uiActions.emitError(error, 'Domain deleteItem workers'))
    // yield call(message.error, ERRORS_MAIN)
    yield put(domainActions.toggleLoading(false));
  }
}
