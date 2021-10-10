//Core
import {all, call, takeEvery, takeLatest} from 'redux-saga/effects';
import type {SagaIterator} from '@redux-saga/core';
// Types
import {types} from '../types';
// Workers
import {
  login,
  logout,
  register,
  validate,
  registerConfirm,
  autoLogin,
  resetEnd,
  resetStart,
  loginByService,
  loginByServiceConfirm,
  send,
} from './workers';

function* watchRegister(): SagaIterator {
  yield takeEvery(types.REGISTER, register);
}

function* watchRegisterConfirm(): SagaIterator {
  yield takeEvery(types.REGISTER_CONFIRM, registerConfirm);
}

function* watchValidateCode(): SagaIterator {
  yield takeEvery(types.CODE_VALIDATE, validate);
}

function* watchSendCode(): SagaIterator {
  yield takeLatest(types.CODE_SEND, send);
}

function* watchLogin(): SagaIterator {
  yield takeEvery(types.LOGIN, login);
}

function* watchAutoLogin(): SagaIterator {
  yield takeEvery(types.AUTO_LOGIN, autoLogin);
}

function* watchLogout(): SagaIterator {
  yield takeEvery(types.LOGOUT, logout);
}

function* watchResetPasswordStart(): SagaIterator {
  yield takeEvery(types.RESET_PASSWORD_START, resetStart);
}

function* watchResetPasswordEnd(): SagaIterator {
  yield takeEvery(types.RESET_PASSWORD_END, resetEnd);
}

function* watchLoginByService(): SagaIterator {
  yield takeLatest(types.LOGIN_BY_SERVICE, loginByService);
}

function* watchLoginByServiceConfirm(): SagaIterator {
  yield takeLatest(types.LOGIN_BY_SERVICE_CONFIRM, loginByServiceConfirm);
}

export function* watchAuth(): SagaIterator {
  yield all([
    call(watchRegister),
    call(watchValidateCode),
    call(watchLogin),
    call(watchRegisterConfirm),
    call(watchAutoLogin),
    call(watchLogout),
    call(watchResetPasswordStart),
    call(watchResetPasswordEnd),
    call(watchLoginByService),
    call(watchLoginByServiceConfirm),
    call(watchSendCode),
  ]);
}
