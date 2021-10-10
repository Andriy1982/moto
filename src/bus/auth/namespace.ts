import {User} from '../user';

export namespace Auth {
  export type System = 'web';

  export type Service = 'vk' | 'facebook' | 'instagram';

  export type ReqRegister = {
    data: {
      name: string;
      email: string;
      phone: string;
      password: string;
      role: System;
    };
    newHistory?: any;
  };

  export type ReqRegisterConfirm = {
    id: string;
    code: string;
    system: System;
    deviceId?: string;
  };

  export type ReqLogin = {
    login: string;
    password: string;
  };

  export type ReqLoginHeaders = {
    deviceid?: string;
    system?: System;
  };

  export type ReqStartResetPassword = {
    login: string;
  };

  export type ReqEndResetPassword = {
    login: string;
    code: string;
    password: string;
    system: System;
    deviceId?: string;
  };

  export type ReqLogoutHeaders = {
    deviceId?: string;
  };

  export type ReqSendCode = {
    login: string;
  };

  export type ReqValidateCode = {
    login: string;
    code: string;
  };

  export type HeadersValidateCode = {
    system: System;
  };

  export type HeadersRegister = {
    system: System;
  };

  export type ReqServiceConfirm = {
    service: Service;
    state: string;
    code: string;
  };

  //payloads
  export type PayloadValidateCode = {
    login: string;
    code: string;
    id?: string;
  };

  export type PayloadSaveAuthData = {
    token: string | null;
    deviceId: string | null;
  };

  //response

  export type ResLogin = {
    authdata?: string;
    deviceId?: string;
    user: User.User | User.Partner;
  };

  export type ResConfirmLoginService = {
    authdata: string;
    deviceId: string;
    userId: string;
  };

  export type ResRegister = User.User | User.Partner;
  export type ResRegisterConfirm = {
    authdata: string;
    deviceId: string;
    user: User.User | User.Partner;
  };
}
