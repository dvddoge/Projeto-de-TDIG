import axios from 'axios';

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwtToken');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axios;
