import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';
import type {Domain} from './namespace';

export const apiDomain = new (class Api {
  fetchItems(params: Domain.ReqFetchItems): AxiosPromise<Domain.ReqFetchItems> {
    return axios({
      url: '/domain',
      method: 'get',
      params,
    });
  }

  fetchDetail(id: number): AxiosPromise<Domain.ReqFetchItems> {
    return axios({
      url: `/domain/${id}`,
      method: 'get',
    });
  }

  create(data: Domain.ReqCreate): AxiosPromise<Domain.Detail> {
    return axios({
      url: '/domain',
      method: 'post',
      data,
    });
  }

  change({id, data}: Domain.ReqChange): AxiosPromise<Domain.Detail> {
    return axios({
      url: `/domain/${id}`,
      method: 'patch',
      data,
    });
  }

  delete(id: Domain.ReqDelete): AxiosPromise {
    return axios({
      url: `/domain/${id}`,
      method: 'delete',
    });
  }
})();
