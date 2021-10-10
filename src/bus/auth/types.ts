import type {Auth} from './namespace';
import {Ui} from '../ui';

export enum types {
  //Async
  LOGIN = 'AUTH/LOGIN',
  REGISTER = 'AUTH/REGISTER',
  REGISTER_CONFIRM = 'AUTH/REGISTER_CONFIRM',
  END_REGISTER_CONFIRM = 'AUTH/END_REGISTER_CONFIRM',
  CODE_SEND = 'AUTH/CODE_SEND',
  CODE_VALIDATE = 'AUTH/CODE_VALIDATE',
  RESET_PASSWORD_START = 'AUTH/RESET_PASSWORD_START',
  RESET_PASSWORD_END = 'AUTH/RESET_PASSWORD_END',
  AUTO_LOGIN = 'AUTH/AUTO_LOGIN',
  END_AUTO_LOGIN = 'AUTH/END_AUTO_LOGIN',
  LOGOUT = 'AUTH/LOGOUT',
  LOGIN_BY_SERVICE = 'AUTH/LOGIN_BY_SERVICE',
  LOGIN_BY_SERVICE_CONFIRM = 'AUTH/LOGIN_BY_SERVICE_CONFIRM',
}

// STATE

export type AuthState = {
  token: string | null;
  deviceId: string | null;
};

// ASYNC

export type LoginAsync = {
  type: typeof types.LOGIN;
  payload: Auth.ReqLogin & Ui.Callback;
};

export type RegisterAsync = {
  type: typeof types.REGISTER;
  payload: Auth.ReqRegister & Ui.Callback;
};

export type RegisterConfirmAsync = {
  type: typeof types.REGISTER_CONFIRM;
  payload: Auth.ReqRegisterConfirm & Ui.Callback;
};

export type CodeSendAsync = {
  type: typeof types.CODE_SEND;
  payload: Auth.ReqSendCode;
};

export type CodeValidateAsync = {
  type: typeof types.CODE_VALIDATE;
  payload: Auth.PayloadValidateCode & Ui.Callback;
};

export type ResetPasswordStartAsync = {
  type: typeof types.RESET_PASSWORD_START;
  payload: Auth.ReqStartResetPassword & Ui.Callback;
};

export type ResetPasswordEndAsync = {
  type: typeof types.RESET_PASSWORD_END;
  payload: Auth.ReqEndResetPassword & Ui.Callback;
};

export type AutoLoginAsync = {
  type: typeof types.AUTO_LOGIN;
};

export type LogoutAsync = {
  type: typeof types.LOGOUT;
};

export type LoginByServiceAsync = {
  type: typeof types.LOGIN_BY_SERVICE;
  payload: Auth.Service;
};

export type LoginByServiceConfirmAsync = {
  type: typeof types.LOGIN_BY_SERVICE_CONFIRM;
  payload: Auth.ResConfirmLoginService;
};

export type AuthActionTypes =
  | LoginAsync
  | RegisterAsync
  | RegisterConfirmAsync
  | CodeSendAsync
  | CodeValidateAsync
  | ResetPasswordStartAsync
  | ResetPasswordEndAsync
  | AutoLoginAsync
  | LogoutAsync
  | LoginByServiceAsync
  | LoginByServiceConfirmAsync;
