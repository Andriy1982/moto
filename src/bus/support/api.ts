import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';
import type {Support} from './namespace';

export const apiSupport = new (class Api {
  create({
    data,
    headers,
  }: {
    data: Support.ReqDataCreate;
    headers: Support.ReqHeadersCreate;
  }): AxiosPromise<{}> {
    return axios({
      url: '/support',
      method: 'put',
      data,
      headers,
    });
  }
})();
