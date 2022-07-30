import api from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function Login(email, password) {
  try {
    const response = await api.post('/oauth/token', {
      grant_type: 'password',
      email: email,
      password: password,
      client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
      client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
    });
    await AsyncStorage.setItem('token', response.data.access_token);
    return response;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function postLogout(token) {
  try {
    const response = await api.post('/oauth/revoke', token);
    return response;
  } catch (error) {
    console.warn(error);
    return error.response.data;
  }
}

export async function postRefreshtoken() {
  try {
    const token = await AsyncStorage.getItem('token');
    const response = await api.post('/oauth/token', {
      grant_type: 'refresh_token',
      refresh_token: token,
      client_id: '3mGWGtxIEKyhq_HGG4cq6hsTOd_zn1SuTD3_cafjUPc',
      client_secret: '389JLi1Nd6DQ_soCI85C57ueTlMZ_JR7pRq6SJ0GaB0',
    });
    return response;
  } catch (error) {
    console.warn(error);
    return error.response.data;
  }
}

export async function getPerfil() {
  try {
    const response = await api.get('/user');
    return response;
  } catch (error) {
    console.warn(error);
    return error.response.data;
  }
}

export async function putUser(user) {
  try {
    const response = await api.put('/user', {
      user,
    });
    return response;
  } catch (error) {
    console.warn(error);
    return error.response;
  }
}

export async function getEntriesDailys() {
  try {
    const response = await api.get('daily_entries');
    return response;
  } catch (error) {
    console.warn(error);
    return error.response.data;
  }
}

export async function getDaily(id) {
  try {
    const data = await api.get(`daily_entries/${id}`);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export async function getActivities() {
  try {
    const response = await api.get('activities');
    return response.data;
  } catch (error) {
    console.warn(error);
  }
}

export async function addNewDaily(data) {
  try {
    const response = await api.post('/daily_entries', data);
    console.log('certo');
    return response.data;
  } catch (error) {
    console.log('Erro ao adicionar Card', error.response.data);
  }
}

export async function updateDaily(daily, id) {
  try {
    const data = await api.put(`daily_entries/${id}`, daily);
    return data;
  } catch (error) {
    console.warn(error);
  }
}

export function deleteDaily(...id) {
  if (id.length > 1) {
    id.map(itemId =>
      api
        .delete(`daily_entries/${itemId}`)
        .then()
        .catch(error => console.warn(error)),
    );
  } else {
    api
      .delete(`daily_entries/${id}`)
      .then()
      .catch(error => console.warn(error));
  }
}
