
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
  pageTotal: 0,
});

getOrderList().then(res => {
  state.tableData = res.data.records;
  state.pageTotal = res.data.total;
});


const queryData = () => {

};
const resetQuery = () => {

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
        operation="查看"
      />
    </template>
  </DataListLayout>
</template>

<style >
</style>
