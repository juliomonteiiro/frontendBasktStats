import { postRequest } from './api';

export async function loginUser(username, password) {
  const data = await postRequest('/auth/login', { username, password });
  if (data.token) {
    return data.token;
  }
  return null;
}

export async function registerUser(name, username, email, password, confirmPassword) {
  try {
    const data = await postRequest('/auth/register', 
      { name, username, email, password, confirm_password: confirmPassword }, 
      false
    );

    if (data.message === 'Usuário registrado com sucesso') {
      return { success: true };
    } else {
      return { success: false, message: data.message || 'Erro no registro' };
    }
  } catch (error) {
    return { success: false, message: error.message || 'Erro desconhecido' };
  }
}


export async function logoutUser() {
  const data = await postRequest('/auth/logout');
  if (data.message === 'Logout realizado com sucesso') {
    localStorage.removeItem('token');
    return true;
  }
  return false;
}
