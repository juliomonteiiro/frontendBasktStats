import { postRequest } from './api';

export async function loginUser(username, password) {
  const data = await postRequest('/auth/login', { username, password });
  if (data.token) {
    return data.token;
  }
  return null;
}

export async function registerUser(name, username, email, password) {
  const data = await postRequest('/auth/register', { name, username, email, password });
  return data.success;
}

export async function logoutUser() {
  const data = await postRequest('/auth/logout');
  if (data.message === 'Logout realizado com sucesso') {
    localStorage.removeItem('token');
    return true;
  }
  return false;
}
