import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local
import {Ui, uiActions} from '@app/bus/ui';
import {sosActions} from '@app/bus/sos';
import type {Sos} from '@app/bus/sos';
// Local Dir
import {apiSos} from '../../api';
import type {CreateAsync} from '../../types';
import {AuthService} from '@app/services/auth';

export function* createItem(action: CreateAsync & Ui.Callback): SagaIterator {
  const {toast, ...payload} = action.payload;

  try {
    yield put(
      uiActions.toggleLoader({
        name: 'sos_create',
        loading: true,
      }),
    );

    const deviceId: string = yield call(AuthService.fetchDeviceId);

    const response: AxiosResponse<Sos.ResCreate> = yield call(apiSos.create, {
      data: payload,
      headers: {
        deviceid: deviceId,
      },
    });

    if (response.data) {
      yield put(sosActions.saveCurrent(response.data));
      if (toast) {
        toast('SOS вызов успешно создан', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    }
  } catch (error) {
    console.log('error create sos worker', error);
    if (toast) {
      toast('Не удалось создать SOS вызов', {
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
