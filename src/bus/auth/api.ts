import type {AxiosPromise} from 'axios';
// import AsyncStorage from '@react-native-community/async-storage';
import axios from '@app/services/axios';
import type {Auth} from './namespace';

const path = '/auth';

export const apiAuth = new (class Api {
  login({
    data,
    headers: {system, ...otherHeaders},
  }: {
    data: Auth.ReqLogin;
    headers: Auth.ReqLoginHeaders;
  }): AxiosPromise<any> {
    return axios({
      url: `${path}/login`,
      method: 'post',
      headers: {
        'device-system': system,
        ...otherHeaders,
      },
      data,
    });
  }

  register(data: Auth.ReqRegister, headers: Auth.HeadersRegister): AxiosPromise<Auth.ResRegister> {
    return axios({
      url: `${path}/register`,
      method: 'put',
      data,
      headers: {
        'device-system': headers.system,
      },
    });
  }

  registerConfirm(
    data: Auth.ReqRegisterConfirm,
    headers: Auth.ReqLoginHeaders,
  ): AxiosPromise<Auth.ResRegisterConfirm> {
    const {system, ...otherHeaders} = headers;
    return axios({
      url: `${path}/register/confirm`,
      method: 'post',
      headers: {
        'device-system': system,
        ...otherHeaders,
      },
      data,
    });
  }

  resetPasswordStart({
    data,
    headers: {system, ...otherHeaders},
  }: {
    data: Auth.ReqStartResetPassword;
    headers: Auth.ReqLoginHeaders;
  }): AxiosPromise<any> {
    return axios({
      url: `${path}/reset`,
      method: 'post',
      headers: {
        'device-system': system,
        ...otherHeaders,
      },
      data,
    });
  }

  resetPasswordEnd(data: Auth.ReqEndResetPassword): AxiosPromise<any> {
    return axios({
      url: `${path}/reset/confirm`,
      method: 'patch',
      data,
    });
  }

  logout({deviceId}: Auth.ReqLogoutHeaders): AxiosPromise<any> {
    return axios({
      url: `${path}/logout`,
      method: 'post',
      headers: {
        deviceid: deviceId,
      },
    });
  }

  codeSend(data: Auth.ReqSendCode): AxiosPromise<any> {
    return axios({
      url: `${path}/code/send`,
      method: 'patch',
      data,
    });
  }
  codeValidate(data: Auth.ReqValidateCode, headers: Auth.HeadersValidateCode): AxiosPromise<any> {
    return axios({
      url: `${path}/code/validate`,
      method: 'post',
      headers: {
        'device-system': headers.system,
      },
      data,
    });
  }
  loginByService(
    service: Auth.Service,
    headers: Auth.ReqLoginHeaders,
  ): AxiosPromise<{link: string}> {
    return axios({
      url: `${path}/by/${service}`,
      method: 'get',
      headers: {
        'device-system': headers.system,
      },
    });
  }

  loginByServiceConfirm({
    params: {service, ...otherParams},
  }: {
    params: Auth.ReqServiceConfirm;
  }): AxiosPromise<Auth.ResRegisterConfirm> {
    return axios({
      url: `${path}/by/${service}/code`,
      method: 'get',
      params: otherParams,
    });
  }
})();
