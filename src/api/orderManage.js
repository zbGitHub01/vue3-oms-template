
/**
 * 订单信息
 */

import request from '@/utils/request';


// 获取订单列表
export function getOrderList(params) {
  return request({
    url: 'orderInfo/page',
    methods: 'get',
    params,
  });
}


// 获取订单详情
export function getOrderInfo(params) {
  return request({
    url: 'orderInfo/get',
    methods: 'get',
    params,
  });
}
