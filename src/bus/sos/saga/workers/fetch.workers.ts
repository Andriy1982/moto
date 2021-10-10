import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local
import {uiActions} from '@app/bus/ui';
import {sosActions} from '@app/bus/sos';
import type {Sos} from '@app/bus/sos';
// Local Dir
import {apiSos} from '../../api';
import type {
  DeletedItemsAsync,
  FetchCurrentAsync,
  FetchDetailAsync,
  FetchItemsAsync,
} from '../../types';
// import {authSelectors} from '@app/bus/auth';
// import {getUniqueId} from 'react-native-device-info';

export function* fetchCurrent(action: FetchCurrentAsync): SagaIterator {
  try {
    // const deviceid = getUniqueId();
    const headers: Sos.ReqFetchDetailHeaders = {};

    // if (deviceid) {
    //   headers['deviceid'] = deviceid;
    // }

    const response: AxiosResponse<Sos.ResCreate> = yield call(apiSos.fetchDetail, {
      params: action.payload,
      headers,
    });

    if (response.data) {
      yield put(sosActions.saveCurrent(response.data));
    }
  } catch (error) {
    console.log('error fetch current sos worker', error);
  }
}

export function* fetchItems(action: FetchItemsAsync): SagaIterator {
  try {
    const headers = {};

    // const deviceid = getUniqueId();
    // if (deviceid) {
    //   headers = {deviceid};
    // }

    const response: AxiosResponse<Sos.ResFetchItems> = yield call(
      apiSos.fetchItems,
      action.payload,
      headers,
    );

    if (response.data) {
      yield put(sosActions.saveItems(response.data));
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

    const response: AxiosResponse<Sos.ResFetchItems> = yield call(
      apiSos.fetchItems,
      action.payload,
      headers,
    );

    if (response.data && response.data.list) {
      yield put(
        sosActions.deleteItems(
          response.data.list.filter((item) => item.isDeleted).map((item) => item.id),
        ),
      );
      yield put(
        sosActions.saveItems({
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
        name: 'fetch_detail_sos',
        loading: true,
      }),
    );
    // const deviceid = getUniqueId();
    const headers: Sos.ReqFetchDetailHeaders = {};

    // if (deviceid) {
    //   headers['deviceid'] = deviceid;
    // }

    const response: AxiosResponse<Sos.Signal> = yield call(apiSos.fetchDetail, {
      params: {
        id: action.payload,
        withCreatorData: true,
        withRespondersData: true,
      },
      headers,
    });

    if (response.data) {
      yield put(sosActions.saveDetail(response.data));
    }
  } catch (error) {
    console.log('error fetch detail sos worker', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'fetch_detail_sos',
        loading: false,
      }),
    );
  }
}
