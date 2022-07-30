import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const baseURL = 'https://shrouded-shelf-01513.herokuapp.com';

import {postRefreshtoken} from '../services/service';

async function getToken() {
  const token = await AsyncStorage.getItem('token');
  return token;
}

const api = axios.create({
  baseURL: `${baseURL}/`,
});

api.interceptors.request.use(async cfg => {
  cfg.headers['Accept-Language'] = 'pt';
  const token = await getToken();
  if (token) {
    cfg.headers.Authorization = `Bearer ${token}`;
  }
  return cfg;
});

api.interceptors.response.use(
  response => response,
  error => {
    // parseError(error);
    if (error.config && error.response && error.response.status === 401) {
      postRefreshtoken();
    }
    return Promise.reject(error);
  },
);

export default api;
