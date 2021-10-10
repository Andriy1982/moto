import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local
import {Ui, uiActions} from '@app/bus/ui';
import {sosActions} from '@app/bus/sos';
import type {Sos} from '@app/bus/sos';
// Local Dir
import {apiSos} from '../../api';
import type {ChangeAsync, ChangeStateAsync} from '../../types';
import {AuthService} from '@app/services/auth';

export function* changeItem(action: ChangeAsync & Ui.Callback): SagaIterator {
  const {toast, ...payload} = action.payload;
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'sos_create',
        loading: true,
      }),
    );

    const deviceId: string = yield call(AuthService.fetchDeviceId);

    const response: AxiosResponse<Sos.ResCreate> = yield call(apiSos.change, {
      data: payload,
      headers: {
        deviceid: deviceId,
      },
    });

    if (response.data) {
      yield put(sosActions.saveCurrent(response.data));
      if (toast) {
        toast('SOS вызов успешно изменен', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    }
  } catch (error) {
    console.log('error change sos worker', error);
    if (toast) {
      toast('Не удалось изменить SOS вызов', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'sos_create',
        loading: false,
      }),
    );
  }
}

export function* changeSate(action: ChangeStateAsync): SagaIterator {
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'change_state_sos',
        loading: true,
      }),
    );

    const deviceid: string = yield call(AuthService.fetchDeviceId);

    const response: AxiosResponse<Sos.Signal> = yield call(apiSos.changeState, {
      data: action.payload,
      headers: {
        deviceid,
      },
    });

    if (response.data) {
      const responseFetch: AxiosResponse<Sos.Signal> = yield call(apiSos.fetchDetail, {
        params: {
          id: action.payload.id,
          withCreatorData: true,
          withRespondersData: true,
        },
        headers: {
          deviceid,
        },
      });

      if (responseFetch.data) {
        yield put(sosActions.saveDetail(responseFetch.data));
      }
      yield put(sosActions.changeSate(response.data.responderIds));
    }
  } catch (error) {
    console.log('Event change  state worker error', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'change_state_sos',
        loading: false,
      }),
    );
  }
}
