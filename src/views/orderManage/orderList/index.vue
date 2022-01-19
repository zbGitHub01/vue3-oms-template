<script setup>
import DataListLayout from '@/components/layout/DataList';
import DataListForm from '@/components/formClass/DataListForm';
import TableList from '@/components/tableClass/TableList';
import { getOrderList } from '@/api/orderManage';
import { getCurrentInstance } from 'vue';
import list from './list';

const { proxy } = getCurrentInstance();
// const tableData = proxy.$ref(list);

const state = proxy.$reactive({
  tableData: [],
  pageTotal: 1,
  queryNewData: {},
});

const getOrderListAgain = (pageSize, pageNum) => {
  const pageInfo = {
    ...state.queryNewData,
    pageNum,
    pageSize,
  };
  getOrderList(pageInfo).then(res => {
    state.tableData = res.data.records;
    state.pageTotal = res.data.total;
  });
};

getOrderListAgain();

const queryData = queryData => {
  state.queryNewData = Object.keys(queryData).includes('dateArray') ? {
    ...queryData,
    submitStartDate: queryData.dateArray[0],
    submitEndDate: queryData.dateArray[1],
  } : queryData;

  delete state.queryNewData.dateArray;
  getOrderListAgain();

};
const resetQuery = val => {
  state.queryNewData = val;
  getOrderListAgain();
};

</script>

<template>
  <DataListLayout>
    <template #title>
      投保订单
    </template>
    <template #query>
      <DataListForm
        :fields="list.queryList"
        @submit="queryData"
        @reset="resetQuery"
      />
    </template>
    <template #content>
      <TableList
        :table-data="state.tableData"
        :column-list="list.columnList"
        :total="state.pageTotal"
        @query="getOrderListAgain"
        operation="查看"
      />
    </template>
  </DataListLayout>
</template>

<style >
</style>
