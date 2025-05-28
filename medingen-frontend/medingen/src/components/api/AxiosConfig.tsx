// api/axiosConfig.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/',
});

apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-access-token'] = token;
  }
  return config;
});

export default apiClient;