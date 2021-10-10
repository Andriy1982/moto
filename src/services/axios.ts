import axios, {AxiosInstance} from 'axios';
import ENV from '@app/configs';
import {AuthService} from './auth';
const axiosInstance: AxiosInstance = axios.create({
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  baseURL: `${ENV.BASE_URL}/api`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AuthService.fetchToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosInstance;
