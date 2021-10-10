import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';

// Local
import {Ui, uiActions} from '@app/bus/ui';
import {sosActions} from '@app/bus/sos';
// Local Dir
import {apiSos} from '../../api';
import {DeleteAsync, types} from '../../types';
import {AuthService} from '@app/services/auth';

export function* deleteItem(action: DeleteAsync & Ui.Callback): SagaIterator {
  const {toast, ...payload} = action.payload;
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'sos_create',
        loading: true,
      }),
    );

    const deviceid: string = yield call(AuthService.fetchDeviceId);

    yield call(apiSos.delete, {
      data: payload,
      headers: {
        deviceid,
      },
    });

    yield put(sosActions.saveCurrent(null));
    if (toast) {
      toast('SOS вызов отменен', {
        appearance: 'success',
        autoDismiss: true,
      });
    }
  } catch (error) {
    console.log('error delete sos worker', error);
    if (toast) {
      toast('Не удалось отменить SOS вызов', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  } finally {
    yield put({type: types.END_DELETE_ITEM});
    yield put(
      uiActions.toggleLoader({
        name: 'sos_create',
        loading: false,
      }),
    );
  }
}
