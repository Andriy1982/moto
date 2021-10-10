import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// import type {AxiosResponse} from 'axios';

// Local

import {Ui, uiActions} from '@app/bus/ui';
import {eventActions} from '@app/bus/event';
// import type {Event} from '@app/bus/event';
// Local Dir
import {apiEvent} from '../../api';
import type {DeleteAsync} from '../../types';
import {AuthService} from '@app/services/auth';
import {Routes} from '@app/routes';

export function* deleteItem(action: DeleteAsync & Ui.Callback): SagaIterator {
  const {toast, navigate, ...payload} = action.payload;
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'change_event',
        loading: true,
      }),
    );

    const deviceid: string | null = yield call(AuthService.fetchDeviceId);

    if (deviceid) {
      yield call(apiEvent.deleteItem, {
        data: payload,
        headers: {
          deviceid,
        },
      });

      yield put(eventActions.clearDetail());
      if (navigate) navigate(Routes.HOME);
    } else {
      throw new Error('Unknow device id, please refresh your login');
    }
  } catch (error) {
    console.log('Event delete worker error', error);
    if (toast) {
      toast('Не удалось удалить ивент', {
        appearance: 'error',
        autoDismiss: true,
      });
    }
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'change_event',
        loading: false,
      }),
    );
  }
}
