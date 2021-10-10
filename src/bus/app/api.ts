// import AsyncStorage from '@react-native-community/async-storage';
import {AxiosPromise} from 'axios';
import axios from '@app/services/axios';

export const apiApp = new (class Api {
  fetchIntro(): PromiseLike<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        let intro = localStorage.getItem('INTRO');
        if (intro) {
          intro = JSON.parse(intro);
        }
        resolve(!!intro);
      } catch (error) {
        reject(error);
      }
    });
  }

  changeIntro(data: boolean): PromiseLike<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        localStorage.setItem('INTRO', JSON.stringify(data));
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  fetchCategories(): AxiosPromise<string[]> {
    return axios({
      url: '/category',
      method: 'get',
    });
  }

  fetchCities(): AxiosPromise<string[]> {
    return axios({
      url: '/city',
      method: 'get',
    });
  }
})();
