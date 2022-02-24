const getters = {
  token: state => state.user.token, // 用户状态
  details: state => state.order.details, // 订单详情
};
export default getters;

