import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

//app
import {Ui} from '@app/bus/ui';
// Local
import {types} from './types';
import type {AuthActionTypes, AuthState} from './types';
import type {Auth} from './namespace';
// import {ActionPattern} from 'redux-saga/effects';

const initialState: AuthState = {
  token: null,
  deviceId: null,
};

const slice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    saveAuthData: (state: AuthState, action: PayloadAction<Auth.PayloadSaveAuthData>) => {
      state.token = action.payload.token;
      state.deviceId = action.payload.deviceId;
    },
  },
});

export default slice.reducer;

// Action Creators Async
export const authActions = {
  // Save
  ...slice.actions,
  // Async
  loginAsync: (payload: Auth.ReqLogin & Ui.Callback): AuthActionTypes => ({
    type: types.LOGIN,
    payload,
  }),
  registerAsync: (payload: Auth.ReqRegister & Ui.Callback): AuthActionTypes => ({
    type: types.REGISTER,
    payload,
  }),
  registerConfirmAsync: (payload: Auth.ReqRegisterConfirm): AuthActionTypes => ({
    type: types.REGISTER_CONFIRM,
    payload,
  }),
  codeSendAsync: (payload: Auth.ReqSendCode): AuthActionTypes => ({
    type: types.CODE_SEND,
    payload,
  }),
  codeValidateAsync: (payload: Auth.PayloadValidateCode & Ui.Callback): AuthActionTypes => ({
    type: types.CODE_VALIDATE,
    payload,
  }),
  resetPasswordStartAsync: (
    payload: Auth.ReqStartResetPassword & Ui.Callback,
  ): AuthActionTypes => ({
    type: types.RESET_PASSWORD_START,
    payload,
  }),
  resetPasswordEndAsync: (payload: Auth.ReqEndResetPassword & Ui.Callback): AuthActionTypes => ({
    type: types.RESET_PASSWORD_END,
    payload,
  }),
  autoLoginAsync: (): AuthActionTypes => ({
    type: types.AUTO_LOGIN,
  }),
  logoutAsync: (): AuthActionTypes => ({
    type: types.LOGOUT,
  }),
  loginByServiceAsync: (payload: Auth.Service): AuthActionTypes => ({
    type: types.LOGIN_BY_SERVICE,
    payload,
  }),
  loginByServiceConfirmAsync: (payload: Auth.ResConfirmLoginService): AuthActionTypes => ({
    type: types.LOGIN_BY_SERVICE_CONFIRM,
    payload,
  }),
};
