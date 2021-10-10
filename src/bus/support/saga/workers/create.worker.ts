import {put, call} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';

//app
import {Ui, uiActions} from '@app/bus/ui';
import {AuthService} from '@app/services/auth';
import type {Auth} from '@app/bus/auth';

//local
import {apiSupport} from '../../api';
import type {CreateAsync} from '../../types';

export function* createItem(action: CreateAsync & Ui.Callback): SagaIterator {
  const {toast, ...payload} = action.payload;

  try {
    yield put(uiActions.toggleLoader({name: 'create_support', loading: true}));
    const headers: Auth.ReqLoginHeaders = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceid = deviceId;
      yield call(apiSupport.create, {
        data: payload,
        headers,
      });
      if (toast) {
        toast('Ваше обращение отправлено', {
          appearance: 'success',
          autoDismiss: true,
        });
      }
    } else {
      throw 'Undefined deviceId in state';
    }
  } catch (error) {
    console.log('create support error', error);
    if (toast) {
      toast('Не удалось отправить обращение. Проверьте соединение с интернетом', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  } finally {
    yield put(uiActions.toggleLoader({name: 'create_support', loading: false}));
  }
}
