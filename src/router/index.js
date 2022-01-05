
import { createRouter, createWebHistory } from 'vue-router';

export const asyncRoutes = [
  {
    path: '/super',
    children: [
      {
        path: '/homePage',
        component: () => import('@/views/homePage'),
        name: 'homePage',
        meta: {
          title: '首页',
          icon: 'icon-shgl',
        },
      },
    ],
  },
  {
    path: '/super',
    children: [
      {
        path: '/dict',
        component: () => import('@/views/dict'),
        name: 'dict',
        meta: {
          title: '系统字典',
          icon: 'icon-xtzd',
          roles: [ 'sys:dict:manage' ],
        },
      },
    ],
  },
  {
    path: '/super',
    children: [
      {
        path: '/log',
        component: () => import('@/views/log'),
        name: 'log',
        meta: {
          title: '系统日志',
          icon: 'icon-xtrz',
          roles: [ 'sys:log:manage' ],
        },
      },
    ],
  },
  {
    path: '/super',
    hidden: true,
    children: [
      {
        path: '/403',
        component: () => import('@/views/403'),
        meta: {
          title: '没有权限',
        },
      },
    ],
  },
];

// 递归路由表将公共路由去掉注册到router中
const constantRoutes = [{ path: '/', redirect: '/homePage', hidden: true }];
function filtersRouters(asyncRoutes) {
  asyncRoutes.forEach(router => {
    if (router.children) {
      filtersRouters(router.children);
    } else {
      constantRoutes.push(router);
    }
  });
}
filtersRouters(asyncRoutes);

const newRouter = () =>
  createRouter({
    // base: window.__POWERED_BY_QIANKUN__ ? '/super/' : '/app/zbsz-super/',
    history: createWebHistory(process.env.VUE_APP_BASE_URL),
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  });
const routes = newRouter();

export default routes;
