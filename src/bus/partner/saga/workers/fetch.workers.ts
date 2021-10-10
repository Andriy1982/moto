import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from 'redux-saga';
import type {AxiosResponse} from 'axios';
// Local
import {partnerActions} from '@app/bus/partner';
import {uiActions} from '@app/bus/ui';

import type {Partner} from '@app/bus/partner';
// Local Dir
import {apiPartner} from '../../api';
import {FetchItemsAsync, FetchItemsMapAsync} from '../../types';
import {FetchDetailAsync} from '@app/bus/user/types';
import {User} from '@app/bus/user';
import {apiUser} from '@app/bus/user/api';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'partner_list',
        loading: true,
      }),
    );

    const response: AxiosResponse<Partner.ResFetchItems> = yield call(
      apiPartner.fetchItems,
      action.payload,
    );

    if (response?.data) {
      yield put(partnerActions.saveItems(response.data));
    }
  } catch (error) {
    console.log('error fetch partner worker', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'partner_list',
        loading: false,
      }),
    );
    yield put(partnerActions.toggleInit(true));
  }
}

export function* fetchMapItems(action: FetchItemsMapAsync): SagaIterator {
  try {
    const response: AxiosResponse<Partner.ResFetchItems> = yield call(
      apiPartner.fetchItems,
      action.payload,
    );

    if (response?.data?.list) {
      yield put(partnerActions.saveMapItems(response.data.list));
    }
  } catch (error) {
    console.log('error fetch map partner worker', error);
  }
  // finally {
  // }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    const response: AxiosResponse<User.Partner> = yield call(
      apiUser.fetchDetail,
      action.payload.id,
    );

    if (response?.data) {
      yield put(partnerActions.saveDetail(response.data));
    }
  } catch (error) {
    console.log('error fetch detail partner worker', error);
  }
  // finally {
  // }
}
