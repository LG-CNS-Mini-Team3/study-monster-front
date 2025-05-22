export const BASE_URL = "http://localhost:8080/auth";

async function fetchWithAuth(endpoint, options = {}) {
  const token = localStorage.getItem('accessToken');
  const tokenType = localStorage.getItem('tokentype');

  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  const headers = {
    ...defaultHeaders,
    ...options.headers,
  };

  if (token && tokenType) {
    headers['Authorization'] = `${tokenType} ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  if (config.body && typeof config.body === 'object' && headers['Content-Type'] === 'application/json') {
    config.body = JSON.stringify(config.body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    let errorData;
    try {
      errorData = await response.json();
    } catch (e) {
      errorData = { message: response.statusText };
    }
    const error = new Error(errorData.message || `HTTP 오류! 상태: ${response.status}`);
    error.response = response;
    error.data = errorData;  
    throw error;
  }
  const contentType = response.headers.get("content-type");
  if (response.status === 204 || !contentType) {
    return null; 
  }

  if (contentType && contentType.includes("application/json")) {
    return response.json(); 
  } else {
    return response.text();
  }
}
export default fetchWithAuth;