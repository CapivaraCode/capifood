import axios from "axios";

const api = axios.create({
  baseURL:
    "http://localhost:8000/api"
});

api.interceptors.request.use(async config => {
  const token = JSON.parse(localStorage.getItem('userLogon')).token
  console.log(token);

  if (token) {
    config.headers.Authorization = 'Token ' + token;
  }

  return config;
});

export default api;