const tableData = [
  {
    orderNo: '432542345235235',
    orderName: '张强',
    orderPhone: '13732451480',
    orderDate: '2021-10-10',
    orderStatus: '已支付',
  },
  {
    orderNo: '432542345235235',
    orderName: '张强',
    orderPhone: '13732451480',
    orderDate: '2021-10-10',
    orderStatus: '已支付',
  },
  {
    orderNo: '432542345235235',
    orderName: '张强',
    orderPhone: '13732451480',
    orderDate: '2021-10-10',
    orderStatus: '已支付',
  },
  {
    orderNo: '432542345235235',
    orderName: '张强',
    orderPhone: '13732451480',
    orderDate: '2021-10-10',
    orderStatus: '已支付',
  },
];


const columnData = [
  {
    label: '业务流水号',
    prop: 'orderNo',
    width: 300,
  },
  {
    label: '投保人',
    prop: 'orderName',
    width: 300,
  },
  {
    label: '手机号',
    prop: 'orderPhone',
    width: 400,
  },
  {
    label: '日期',
    prop: 'orderDate',
    width: 300,
  },
  {
    label: '订单状态',
    prop: 'orderStatus',
    width: 300,
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
  tableData,
  columnData,
  queryList,
};
