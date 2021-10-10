import {call, put} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
import type {AxiosResponse} from 'axios';

// Local

import {uiActions} from '@app/bus/ui';
import {eventActions} from '@app/bus/event';
import type {Event} from '@app/bus/event';
// Local Dir
import {apiEvent} from '../../api';
import type {ChangeStateAsync} from '../../types';
import {AuthService} from '@app/services/auth';

export function* changeSate(action: ChangeStateAsync): SagaIterator {
  try {
    yield put(
      uiActions.toggleLoader({
        name: 'change_event',
        loading: true,
      }),
    );

    const deviceid: string | null = yield call(AuthService.fetchDeviceId);

    if (deviceid) {
      const response: AxiosResponse<Event.Item> = yield call(apiEvent.changeState, {
        data: action.payload,
        headers: {
          deviceid,
        },
      });

      if (response.data) {
        yield put(eventActions.changeSate(response.data.participantIds));
        const responseFetch: AxiosResponse<Event.Item> = yield call(
          apiEvent.fetchDetail,
          action.payload.id,
        );

        if (responseFetch.data) {
          yield put(eventActions.saveDetail(responseFetch.data));
        }
      }
    } else {
      throw new Error('Unknow device id, please refresh your login');
    }
  } catch (error) {
    console.log('Event change  state worker error', error);
  } finally {
    yield put(
      uiActions.toggleLoader({
        name: 'change_event',
        loading: false,
      }),
    );
  }
}
