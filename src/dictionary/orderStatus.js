/**
 * 全局订单状态
 */

const orderStatus = {
  100010001000: '未申请',
  100011001000: '待审核',
  100013001000: '投保审核失败',
  100014001000: '取消保函',
  100012001000: '审核通过',
  100012001110: '待入账',
  100012001120: '支付成功',
  100012101120: '密文保函开立',
  100012151120: '退保审核中',
  100012171120: '退保失败',
  100012161120: '退保审核通过，待退款',
  100012161121: '退保审核通过，退款中',
  100012161122: '退保审核通过，退款成功',
  110012101120: '已开标，待批改',
  110012201120: '明文保函开立',
  111012101120: '项目流标',
  111012251120: '保函注销，待审核',
  111012271120: '保函注销，审核失败',
  111012261120: '保函注销，审核通过，待退款',
  111012261121: '保函注销，审核通过，退款中',
  111012261122: '保函注销，审核通过，退款成功',
};

export default orderStatus;
