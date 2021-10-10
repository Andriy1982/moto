import axios, {AxiosInstance, AxiosResponse} from 'axios';
import ENV from '@app/configs';
const axiosInstance: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Token ${ENV.DA_DATA_KEY}`,
  },
  timeout: 120000,
  baseURL: `${ENV.DA_DATA_URL}`,
});

export type ItemAddress = {
  data: {
    city: string;
    region: string;
    geo_lat: string;
    geo_lon: string;
  };
  value: string;
};

export type ItemAddress2 = {
  value: string;
  data: {
    region: string;
    city: string;
  };
};

class DaData {
  fetchCoordinates(query: string): PromiseLike<ItemAddress[]> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response: AxiosResponse<{
          suggestions: ItemAddress[];
        }> = await axiosInstance({
          method: 'post',
          url: '/suggestions/api/4_1/rs/suggest/address',
          data: JSON.stringify({query, count: 5}),
        });
        if (response.data && response.data.suggestions) {
          resolve(response.data.suggestions);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
  fetchAddress(params: {lat: string; lon: string; radius_meters: number}): PromiseLike<any> {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
      try {
        const response: AxiosResponse<{
          suggestions: ItemAddress2[];
        }> = await axiosInstance({
          method: 'get',
          url: '/suggestions/api/4_1/rs/geolocate/address',
          params,
        });

        if (response.data && response.data.suggestions) {
          resolve(response.data.suggestions);
        } else {
          resolve([]);
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const DaDataService = new DaData();
