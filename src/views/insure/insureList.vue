<template>
  <DataListLayout>
    <template #title>
      投保订单
    </template>
    <template #query>
      <DataListForm
        :fields="dataListFormFields"
        @submit="queryData"
        @reset="resetQuery"
      />
    </template>
    <template #content>
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column
          prop="date"
          label="Date"
          width="180"
        />
        <el-table-column
          prop="name"
          label="Name"
          width="180"
        />
        <el-table-column
          prop="address"
          label="Address"
        />
      </el-table>
    </template>
  </DataListLayout>
</template>

<script>
import DataListLayout from '@/components/layout/DataList';
import DataListForm from '@/components/formClass/DataListForm';
import { getCurrentInstance } from 'vue';
import list from './list';

export default {
  components: {
    DataListLayout,
    DataListForm,
  },

  setup() {
    const { proxy } = getCurrentInstance();
    const tableData = proxy.$ref(list);

    const state = proxy.$reactive({

    });

    const queryData = () => {

    };
    const resetQuery = () => {

    };

    return {
      state,
      tableData,
      queryData,
      resetQuery,
    };
  },

};
</script>
<style >
</style>
