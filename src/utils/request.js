import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';

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
      //   if (error.response.status === 460) {
      //     setToken('Admin-Token', error.response.headers.authorization);
      //     return error.response.data;
      //   }
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