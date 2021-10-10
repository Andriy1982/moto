import type {AxiosPromise} from 'axios';

import axios from '@app/services/axios';

import type {User} from './namespace';

export const apiUser = new (class Api {
  fetchDetail(
    id: string,
    headers: {
      deviceid?: string;
    } = {},
  ): AxiosPromise<User.User> {
    return axios({
      url: `/user/${id}`,
      method: 'get',
      headers,
    });
  }

  fetchUserLocal(): PromiseLike<User.User | User.Partner | null> {
    return new Promise((resolve, reject) => {
      try {
        const data = localStorage.getItem('user');
        if (data) {
          const user: User.User | User.Partner = JSON.parse(data);
          resolve(user);
        }
        resolve(null);
      } catch (error) {
        reject(error);
      }
    });
  }

  saveUserLocal(data: User.User | User.Partner | null): PromiseLike<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem('user', JSON.stringify(data));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  deletePhoto({
    headers,
    params: {id, uri},
  }: {
    headers: User.ReqDeletePhotoHeaders;
    params: User.ReqDeletePhotoParams;
  }): AxiosPromise<User.User | User.Partner> {
    const photoSrc = uri.split('/');
    const last = photoSrc[photoSrc.length - 1];

    return axios({
      url: `/partner/${id}/photo/${last}`,
      method: 'delete',
      headers: {
        'Content-Type': 'multipart/form-data',
        ...headers,
      },
    });
  }

  changeGeo({
    data: {id, ...otherData},
    headers,
  }: {
    data: User.ReqUpdateGeo;
    headers: User.ReqChangeUserHeaders;
  }): AxiosPromise<User.User | User.Partner> {
    console.log(JSON.stringify([otherData]));

    return axios({
      url: `/user/${id}/geo`,
      method: 'post',
      headers,
      data: JSON.stringify([otherData]),
    });
  }

  registerFCM({
    data: {token},
    headers,
  }: {
    data: User.ReqRegisterFCM;
    headers: User.ReqChangeUserHeaders;
  }): AxiosPromise<User.User | User.Partner> {
    return axios({
      url: `user/firebase/register`,
      method: 'patch',
      headers,
      data: {
        firebase: token,
      },
    });
  }

  change({
    data,
    params: {id},
    headers,
  }: {
    data: User.ReqChangeUserData | User.ReqChangePartnerData;
    params: User.ReqChangeUserParams;
    headers: User.ReqChangeUserHeaders;
  }): AxiosPromise<User.User | User.Partner> {
    const form = new FormData();

    type TKey = keyof User.ReqChangeUserData | keyof User.ReqChangePartnerData;

    for (const k in data) {
      const key = k as TKey;
      if (key === 'avatar') {
        //@ts-ignore
        if (data.avatar) form.append('avatar', data.avatar.file);
      } else if (key === 'photos') {
        //@ts-ignore
        if (data['photos']?.length) {
          //@ts-ignore
          data['photos'].forEach((element) => {
            form.append('photos', element);
          });
        }
      } else if (key === 'contacts' || key === 'garage') {
        //@ts-ignore
        if (data[key]?.length) {
          //@ts-ignore
          data[key].forEach((element) => {
            form.append(`${key}[]`, JSON.stringify(element));
          });
        } else {
          form.append(`${key}`, '{!empty}');
        }
      } else if (key === 'categories' || key === 'storeCoordinates') {
        //@ts-ignore
        if (data[key]?.length) {
          //@ts-ignore
          data[key].forEach((element) => {
            form.append(`${key}[]`, element);
          });
        } else if (key !== 'storeCoordinates') {
          form.append(`${key}`, '{!empty}');
        }
      } else {
        //@ts-ignore
        form.append(key, data[key]);
      }
    }

    return axios({
      url: `/user/${id}`,
      method: 'patch',
      headers: {
        'Content-Type': 'multipart/form-data',
        ...headers,
      },
      data: form,
    });
  }
})();
