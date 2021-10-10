import {call, put, take} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
//app
import {Ui, uiActions} from '@app/bus/ui';
import {authActions} from '@app/bus/auth';

//local
import {apiAuth} from '../../api';
import type {CodeSendAsync, CodeValidateAsync} from '../../types';
import {types} from '../../types';
import {AuthService} from '@app/services/auth';
import {Routes} from '@app/routes';

export function* validate(action: CodeValidateAsync & Ui.Callback): SagaIterator {
  try {
    const {navigate, ...payload} = action.payload;
    yield put(uiActions.toggleLoader({name: 'code_validate', loading: true}));

    const headers: any = {
      system: 'web',
    };
    const deviceId: string | null = yield call(AuthService.fetchDeviceId);
    if (deviceId) {
      headers.deviceId = deviceId;
    }

    yield call(apiAuth.codeValidate, payload, headers);
    if (payload.id) {
      yield put(
        authActions.registerConfirmAsync({
          id: payload.id,
          code: payload.code,
          ...headers,
          navigate: navigate ?? undefined,
        }),
      );
      yield take(types.END_REGISTER_CONFIRM);
    } else {
      if (navigate) {
        navigate(Routes.CONFIRM_RESET_PASSWORD, {
          login: payload.login,
          code: payload.code,
        });
      }
    }
  } catch (error) {
    yield put(
      uiActions.setError({
        name: 'code_validate',
        message: 'invalid_confirm_code',
      }),
    );
  } finally {
    yield put(uiActions.toggleLoader({name: 'code_validate', loading: false}));
  }
}

export function* send(action: CodeSendAsync): SagaIterator {
  try {
    yield call(apiAuth.codeSend, action.payload);
  } catch (error) {
    console.log('Error send code worker', error);
  }
}
