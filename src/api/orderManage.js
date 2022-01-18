
/**
 * 订单详情
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
