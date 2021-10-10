import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';
import type {Event} from './namespace';

export const apiEvent = new (class Api {
  fetchItems(
    params: Event.ReqFetchItems,
    headers: {
      deviceid?: string;
    },
  ): AxiosPromise<Event.ReqFetchItems> {
    return axios({
      url: '/event',
      method: 'get',
      headers,
      params: params,
    });
  }

  fetchDetail(id: string): AxiosPromise<Event.Item> {
    return axios({
      url: `/event/${id}`,
      method: 'get',
      params: {
        withCreatorData: true,
        withParticipantsData: true,
        skip: 0,
        limit: 4,
      },
    });
  }

  create({
    data,
    headers,
  }: {
    data: Event.ReqCreateData;
    headers: Event.ReqCreateHeaders;
  }): AxiosPromise<Event.Item> {
    const form = new FormData();
    for (const key in data) {
      if (key === 'location') {
        form.append('location[0]', data['location'][0].toString());
        form.append('location[1]', data['location'][1].toString());
      } else if (key === 'substrate') {
        //@ts-ignore
        if (data.substrate) form.append('substrate', data.substrate.file);
      } else {
        if (data[key as keyof Event.ReqCreateData])
          form.append(key, data[key as keyof Event.ReqCreateData] as string);
      }
    }
    return axios({
      url: '/event',
      method: 'put',
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
      data: form,
    });
  }

  changeState({
    data: {id, state},
    headers,
  }: {
    data: Event.ReqChangeStateData;
    headers: Event.ReqChangeSateHeaders;
  }): AxiosPromise<Event.Item> {
    return axios({
      url: `/event/${id}/${state}`,
      method: 'patch',
      headers,
    });
  }

  deleteItem({
    data: {id},
    headers,
  }: {
    data: Event.ReqDeleteData;
    headers: Event.ReqDeleteHeaders;
  }): AxiosPromise<Event.Item> {
    return axios({
      url: `/event/${id}`,
      method: 'delete',
      headers,
    });
  }
})();
