
import { createRouter, createWebHistory } from 'vue-router';

export const asyncRoutes = [
  {
    path: '/guarantee',
    children: [
      {
        path: '/homePage',
        component: () => import('@/views/homePage'),
        name: 'homePage',
        meta: {
          title: '首页',
          icon: 'icon-sy',
        },
      },
    ],
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
        component: () => import('@/views/orderManage/orderList'),
        meta: {
          title: '投保订单',
          icon: 'icon-kzhgl',
          // roles: [ 'sys:article:list' ],
        },
      },
      {
        path: '/orderList/orderDetails',
        component: () => import('@/views/orderManage/orderList/orderDetails'),
      },
      {
        path: '/returnList',
        component: () => import('@/views/orderManage/returnList'),
        meta: {
          title: '退保订单',
          icon: 'icon-kzhgl',
          // roles: [ 'sys:customer:list' ],
        },
      },
    ],
  },
  {
    path: '/guarantee',
    children: [
      {
        path: '/policyList',
        component: () => import('@/views/policyManage'),
        name: 'policyList',
        meta: {
          title: '保函管理',
          icon: 'icon-qygl',
        },
      },
    ],
  },
  {
    path: '/guarantee',
    children: [
      {
        path: '/billList',
        component: () => import('@/views/financeManage'),
        name: 'billList',
        meta: {
          title: '财务管理',
          icon: 'icon-shgl',
        },
      },
    ],
  },
  {
    path: '/guarantee',
    children: [
      {
        path: '/compensateList',
        component: () => import('@/views/compensateManage'),
        name: 'compensateList',
        meta: {
          title: '理赔管理',
          icon: 'icon-xtzd',
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
