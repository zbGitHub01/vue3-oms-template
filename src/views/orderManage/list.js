
import * as Format from '@/utils/format';
import orderStatusObj from '@/dictionary/orderStatus';

const columnList = [
  {
    label: '业务流水号',
    prop: 'orderNo',
  },
  {
    label: '投保人',
    prop: 'bidderName',
  },
  {
    label: '投保手机号',
    prop: 'bidderContactPhone',
  },
  {
    label: '被担保人',
    prop: 'tendereeName',
    formatter({ tendereeName }) {
      return tendereeName === undefined ? '-- --' : tendereeName;
    },
  },
  {
    label: '项目标段名称',
    prop: 'bidSectionName',
    formatter({ bidSectionName }) {
      return bidSectionName === undefined ? '-- --' : bidSectionName;
    },
  },
  {
    label: '担保公司名称',
    prop: 'targetName',
    formatter({ targetName }) {
      return targetName === undefined ? '-- --' : targetName;
    },
    width: 250,
  },
  {
    label: '订单状态',
    prop: 'orderStatus',
    formatter({ orderStatus }) {
      return orderStatus === undefined ? '-- --' : orderStatusObj[orderStatus];
    },
  },
  {
    label: '担保金额（元）',
    prop: 'amount',
    formatter({ amount }) {
      return Format.AmountFormat(amount);
    },
  },
  {
    label: '担保保费（元）',
    prop: 'premium',
    formatter({ premium }) {
      return Format.AmountFormat(premium);
    },
  },
  {
    label: '提交时间',
    prop: 'createTime',
    formatter({ createTime }) {
      return Format.DateFormat(createTime);
    },
  },
];

const queryList = [{
  name: '业务流水号',
  type: 'input',
  property: 'orderNo',
}, {
  name: '投保人',
  type: 'input',
  property: 'bidderName',
}, {
  name: '提交时间',
  type: 'daterange',
  property: 'dates',
}, {
}, {
  name: '投保人手机号',
  type: 'input',
  property: 'bidderContactPhone',
}, {
  name: '订单状态',
  type: 'select',
  property: 'orderStatus',
  placeholder: '请选择订单状态',
  options: [
    {
      value: '1100010001000',
      label: '未申请',
    },
    {
      value: '2100011001000',
      label: '待审核',
    },
    {
      value: '100013001000',
      label: '投保审核失败',
    },
    {
      value: '100014001000',
      label: '取消保函',
    },
    {
      value: '100012001000',
      label: '审核通过',
    },
    {
      value: '3100012001110',
      label: '待入账',
    },
    {
      value: '100012001120',
      label: '支付成功',
    },
    {
      value: '100012101120',
      label: '密文保函开立',
    },
    {
      value: '100012101120',
      label: '已开标，待批改',
    },
    {
      value: '110012201120',
      label: '明文保函开立',
    },
    {
      value: '111012101120',
      label: '项目流标',
    },
  ],
}, {
  name: '被担保人',
  type: 'input',
  property: 'insCode',
}, {
  name: '项目标段名称',
  type: 'input',
  property: 'bidSectionName',
}];

export default {
  columnList,
  queryList,
};
