import {call, delay, put} from 'redux-saga/effects';
import {message} from 'antd';
import type {SagaIterator} from 'redux-saga';
import type {AxiosResponse} from 'axios';
// Local
import {domainActions} from '@app/bus/__DOMAIN__';
import {uiActions} from '@app/bus/ui';
// import { ERRORS_MAIN } from '@app/constants'
import type {Domain} from '@app/bus/__DOMAIN__';
// Local Dir
import {apiDomain} from '../../api';
import {FetchDetailAsync, FetchItemsAsync} from '../../types';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    if (action.payload.searchString) {
      yield delay(600);
    }

    yield put(domainActions.toggleLoading(true));

    // Api call or some async actions
    const response: AxiosResponse<Domain.ResFetchItems> = yield call(
      apiDomain.fetchItems,
      action.payload,
    );

    if (response.data) {
      yield put(
        domainActions.saveItems({
          items: response.data.items,
          count: response.data.count,
        }),
      );
    }
  } catch (error) {
    // yield put(uiActions.emitError(error, 'Domain fetchItems workers'))
    // yield call(message.error, ERRORS_MAIN)
  } finally {
    yield put(domainActions.toggleLoading(false));
  }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(domainActions.toggleLoading(true));

    // Api call or some async actions
    const response: AxiosResponse<Domain.Detail> = yield call(
      apiDomain.fetchDetail,
      action.payload,
    );

    if (response.data) {
      yield put(domainActions.saveDetail(response.data));
    }
  } catch (error) {
    // yield put(
    //   uiActions.emitError(error.response.data, 'Domain fetchDetail workers')
    // )
    // yield call(message.error, ERRORS_MAIN)
  } finally {
    yield put(domainActions.toggleLoading(false));
  }
}
