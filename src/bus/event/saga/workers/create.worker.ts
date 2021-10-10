import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local

import {uiActions} from '@app/bus/ui';
import {eventActions} from '@app/bus/event';
import type {Event} from '@app/bus/event';
// Local Dir
import {apiEvent} from '../../api';
import type {CreateAsync} from '../../types';
import {Routes} from '@app/routes';
import {generatePath} from 'react-router-dom';
import {AuthService} from '@app/services/auth';

export function* createItem(action: CreateAsync & Event.CreateCallbacks): SagaIterator {
  const {success: successCallback, error: errorCallback, ...payload} = action.payload;

  try {
    yield put(
      uiActions.toggleLoader({
        name: 'create_event',
        loading: true,
      }),
    );

    const deviceId: string | null = yield call(AuthService.fetchDeviceId);

    if (deviceId) {
      const response: AxiosResponse<Event.Item> = yield call(apiEvent.create, {
        data: payload,
        headers: {
          deviceid: deviceId,
        },
      });

      if (response.data) {
        yield put(eventActions.saveDetail(response.data));
        successCallback(
          generatePath(Routes.EVENT_DETAIL, {
            id: response.data.id,
          }),
          {
            create: true,
          },
        );
      }
    } else {
      throw 'Not found device id';
    }
  } catch (error) {
    console.log('Event create worker error', error);
    errorCallback('Не удалось создать ивент', {
      appearance: 'error',
      autoDismiss: true,
    });
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'create_event',
        loading: false,
      }),
    );
  }
}
