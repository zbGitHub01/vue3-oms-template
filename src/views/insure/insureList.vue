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
        max-height="250"
      >
        <el-table-column
          fixed
          prop="date"
          label="Date"
          width="150"
        />
        <el-table-column
          prop="name"
          label="Name"
          width="120"
        />
        <el-table-column
          prop="state"
          label="State"
          width="120"
        />
        <el-table-column
          prop="city"
          label="City"
          width="120"
        />
        <el-table-column
          prop="address"
          label="Address"
          width="600"
        />
        <el-table-column
          prop="zip"
          label="Zip"
          width="120"
        />
        <el-table-column
          fixed="right"
          label="Operations"
          width="120"
        >
          <!-- <template #default="scope">
            <el-button
              type="text"
              size="small"
              @click.prevent="deleteRow(scope.$index)"
            >
              Remove
            </el-button>
          </template> -->
        </el-table-column>
      </el-table>
    </template>
  </DataListLayout>
</template>

<script>
import DataListLayout from '@/components/layout/DataList';
import DataListForm from '@/components/formClass/DataListForm';
import { getCurrentInstance } from 'vue';
import list from './list.js';

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

    const deleteRow = index => {
      tableData.value.splice(index, 1);
    };

    return {
      state,
      tableData,
      queryData,
      resetQuery,
      deleteRow,
    };
  },

};
</script>
<style >
</style>
