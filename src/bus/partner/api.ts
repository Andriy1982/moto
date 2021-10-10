import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';
import type {Partner} from './namespace';

export const apiPartner = new (class Api {
  fetchItems(params: Partner.ReqFetchItems): AxiosPromise<Partner.ResFetchItems> {
    return axios({
      url: '/partner',
      method: 'get',
      params,
    });
  }
})();
