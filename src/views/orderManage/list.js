
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
  property: 'areaCode',
}, {
  name: '投保人',
  type: 'input',
  property: 'insCode',
}, {
  name: '投保日期',
  type: 'daterange',
  property: 'dates',
}, {
  name: '投保人手机号',
  type: 'input',
  property: 'insName',
}, {
  name: '订单状态',
  type: 'select',
  property: 'secuNo',
  options: [
    {
      label: '全部',
    },
    {
      value: '1',
      label: '待支付',
    },
    {
      value: '2',
      label: '已完成',
    },
  ],
}];

export default {
  columnList,
  queryList,
};
