import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { getToken, setToken } from '@/utils/auth';
import store from '@/store';

const router = useRouter();


const service = axios.create({
  baseURL: '/api/oms',
  timeout: 15000,
  headers: {
    // 'Access-Control-Expose-Headers': 'authorization',
    'Content-Type': 'application/json',
  },
});

service.interceptors.request.use(
  config => {
    // 给每个请求带上 Token
    if (store.getters.token) {
      // config.headers.authorization = getToken('Admin-Token');
    }
    // 子应用调试的token
    config.headers.authorization = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ6YnN6LWF1dGgiLCJhdWQiOiJ6YnN6IiwiY29tcGFueUlkIjoxLCJpc3MiOiJ6YnN6IiwiZXhwIjoxNjQyNTc4MTM1LCJ1c2VySWQiOjEsImlhdCI6MTY0MjQ5MTczNSwianRpIjoiZWZlYzQyMGVlMWQzNDYyYjg1ODUyMGI5ODkwOTdiNGIiLCJ1c2VybmFtZSI6ImFkbWluIn0.Rt4GpfettHSywnQRNtLCeEuW-a07wXHjWv89U2OVoGQ';
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);


// 响应拦截头
service.interceptors.response.use(
  response => {
    // const res = response.data;
    // if (res.code !== 200) {
    //   message.error(res.message);
    //   return Promise.reject(new Error(res.message || 'Error'));
    // }
    return response.data;

  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '请求错误(400)';
          break;
        case 401:
          error.message = '登录已过期，请重新登录(401)';
          break;
        case 403:
          error.message = '没有权限';
          break;
        case 404:
          error.message = '请求出错(404)';
          break;
        case 500:
          error.message = '服务器错误(500)';
          break;
        default:
          error.message = '连接出错！';
      }
      // 返回状态是460则表示token即将过期，要更换token
      if (error.response.status === 460) {
        setToken('Admin-Token', error.response.headers.authorization);
        return error.response.data;
      }
      if (error.response.status === 403) {
        // 返回状态码包含403则表示没有权限，重定向到403页面
        router.push('/403');
      }
      ElMessage.error(error.message);
      return Promise.reject(error);
    }
  }
);

export default service;
