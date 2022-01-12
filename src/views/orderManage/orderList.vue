
<script setup>
import DataListLayout from '@/components/layout/DataList';
import DataListForm from '@/components/formClass/DataListForm';
import TableList from '@/components/tableClass/TableList';
// import { getCurrentInstance } from 'vue';
import list from './list';

// const { proxy } = getCurrentInstance();
// const tableData = proxy.$ref(list);

// const state = proxy.$reactive({
// });

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
        :table-data="list.tableData"
        :column-data="list.columnData"
        operation="查看"
      />
    </template>
  </DataListLayout>
</template>

<style >
</style>
