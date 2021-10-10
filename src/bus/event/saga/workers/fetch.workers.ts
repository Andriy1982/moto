import {call, put} from 'redux-saga/effects';

import type {SagaIterator} from 'redux-saga';
import type {AxiosResponse} from 'axios';
// Local
import {eventActions} from '@app/bus/event';
import {uiActions} from '@app/bus/ui';

import type {Event} from '@app/bus/event';
// Local Dir
import {apiEvent} from '../../api';
import {DeletedItemsAsync, FetchDetailAsync, FetchItemsAsync} from '../../types';

// import {getUniqueId} from 'react-native-device-info';

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    const headers = {};

    // const deviceid = getUniqueId();
    // if (deviceid) {
    //   headers = {deviceid};
    // }

    const response: AxiosResponse<Event.ResFetchItems> = yield call(
      apiEvent.fetchItems,
      action.payload,
      headers,
    );

    if (response.data) {
      yield put(eventActions.saveItems(response.data));
      if (action.payload.id && response.data.list.length === 0) {
        yield put(
          uiActions.toggleLoader({
            name: 'show_current',
            loading: true,
          }),
        );
      }
    }
  } catch (error) {
    console.log('Fetch items event worker error', error);
  }
  //  finally {
  // }
}

export function* fetchDeleted(action: DeletedItemsAsync): SagaIterator {
  try {
    const headers = {};

    // const deviceid = getUniqueId();
    // if (deviceid) {
    //   headers = {deviceid};
    // }

    const response: AxiosResponse<Event.ResFetchItems> = yield call(
      apiEvent.fetchItems,
      action.payload,
      headers,
    );

    if (response.data && response.data.list) {
      yield put(
        eventActions.deleteItems(
          response.data.list.filter((item) => item.isDeleted).map((item) => item.id),
        ),
      );
      yield put(
        eventActions.saveItems({
          ...response.data,
          list: response.data.list.filter((item) => !item.isDeleted),
        }),
      );
    }
  } catch (error) {
    console.log('Fetch items event worker error', error);
  }
  // finally {
  // }
}

export function* fetchDetail(action: FetchDetailAsync): SagaIterator {
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'fetch_detail_event',
        loading: true,
      }),
    );
    // Api call or some async actions
    const response: AxiosResponse<Event.Item> = yield call(apiEvent.fetchDetail, action.payload);

    if (response.data) {
      yield put(eventActions.saveDetail(response.data));
    }
  } catch (error) {
    console.log('Fetch detail event error forker', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'fetch_detail_event',
        loading: false,
      }),
    );
  }
}
