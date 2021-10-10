import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';
import type {Sos} from './namespace';

export const apiSos = new (class Api {
  fetchDetail({
    params: {id, ...otherParams},
    headers,
  }: {
    params: Sos.ReqFetchDetailParams;
    headers: Sos.ReqFetchDetailHeaders;
  }) {
    return axios({
      url: `/signal/${id}`,
      method: 'get',
      headers,
      params: otherParams,
    });
  }

  create({
    data,
    headers,
  }: {
    data: Sos.ReqCreateData;
    headers: Sos.ReqCreateHeaders;
  }): AxiosPromise<Sos.ResCreate> {
    return axios({
      url: '/signal',
      method: 'put',
      data,
      headers,
    });
  }

  change({
    data: {id, ...otherData},
    headers,
  }: {
    data: Sos.ReqChangeData;
    headers: Sos.ReqChangeHeaders;
  }): AxiosPromise<Sos.ReqChangeData> {
    return axios({
      url: `/signal/${id}`,
      method: 'patch',
      headers,
      data: otherData,
    });
  }

  delete({
    data: {id},
    headers,
  }: {
    data: Sos.ReqDeleteParams;
    headers: Sos.ReqDeleteHeaders;
  }): AxiosPromise {
    return axios({
      url: `/signal/${id}`,
      method: 'delete',
      headers,
    });
  }

  fetchItems(
    params: Sos.ReqFetchItems,
    headers: {
      deviceid?: string;
    },
  ): AxiosPromise<Sos.ResFetchItems> {
    return axios({
      url: '/signal',
      method: 'get',
      headers,
      params: params,
    });
  }

  changeState({
    data: {id, state},
    headers,
  }: {
    data: Sos.ReqChangeStateData;
    headers: Sos.ReqChangeStateHeaders;
  }): AxiosPromise<Sos.Signal> {
    return axios({
      url: `/signal/${id}/${state}`,
      method: 'patch',
      headers,
    });
  }
})();
