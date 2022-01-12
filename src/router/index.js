
import { createRouter, createWebHistory } from 'vue-router';

export const asyncRoutes = [
  {
    path: '/guarantee/homePage',
    component: () => import('@/views/homePage'),
    name: 'homePage',
    meta: {
      title: '首页',
      icon: 'icon-shgl',
    },
  },
  {
    path: '/guarantee',
    meta: {
      title: '订单管理',
      icon: 'icon-ddgl',
      // roles: [ 'sys:operation:manage' ],
    },
    children: [
      {
        path: '/orderList',
        component: () => import('@/views/orderInfo/orderList'),
        meta: {
          title: '投保订单',
          // roles: [ 'sys:article:list' ],
        },
      },
      {
        path: '/returnList',
        component: () => import('@/views/orderInfo/returnList'),
        meta: {
          title: '退保订单',
          // roles: [ 'sys:customer:list' ],
        },
      },
    ],
  },
  {
    path: '/guarantee',
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

// 递归路由表将公共路由去掉注册到router中;
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
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/guarantee/' : '/app/zbsz-guarantee/'),
    routes: constantRoutes,
  });
const routes = newRouter();

export default routes;
