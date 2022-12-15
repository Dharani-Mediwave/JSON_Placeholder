import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { baseURL } from '../environments/base';

const requestInterceptor = (request: AxiosRequestConfig) => {
  return request;
};

const responseInterceptor = (response: AxiosResponse) => {
  const { data } = response;
  return data;
};

const errorResponseInterceptor = (error: any) => {
  if (error.response) {
    const { status } = error.response;
    switch (status) {
      case 401:
        break;
    }
    if (error.response.data && error.response.data.message) {
      return Promise.reject({
        message: error.response.data.message,
        status,
      });
    }
    return Promise.reject({
      message: 'Unknown error.',
      status,
    });
  } else if (error.request) {
    return Promise.reject({
      message: 'No response was received.',
    });
  }

  console.log(error.toString());
  return Promise.reject({ message: 'Something went wrong.' });
};

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(responseInterceptor, errorResponseInterceptor);

export default api;
