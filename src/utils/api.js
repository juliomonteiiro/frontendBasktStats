const API_URL = 'http://localhost:5000/api';

export async function postRequest(endpoint, data) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function getRequest(endpoint, token) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  return response.json();
}
