<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        v-for="item in columnListData"
        :key="item.id"
        :prop="item.prop"
        :formatter="item.formatter"
        :label="item.label"
        :width="item.width? item.width : 180"
      />
      <el-table-column
        label="操作"
        width="120"
        v-if="operation"
      >
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            {{ state.operationName }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div
      class="pagination"
      v-if="pagination"
    >
      <el-pagination
        v-model:currentPage="state.currentPage"
        :page-size="state.pageSize"
        :page-sizes="state.pageSizes"
        layout="sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {

  props: {
    pagination: {
      type: Boolean,
      default: () => true,
    },
    operation: {
      type: String,
      default: () => {
        return '';
      },
    },
    columnList: {
      type: Array,
      default: () => {
        return [];
      },
    },
    tableData: {
      type: Array,
      default: () => {
        return [];
      },
    },
    total: {
      type: Number,
      default: 1,
    },
  },

  setup(props, { emit }) {


    const state = reactive({
      operationName: props.operation,
      currentPage: 1,
      pageSize: 10,
      pageSizes: [ 10, 15, 20, 30 ],
    });

    const columnListData = computed(() => {
      const list = [];
      props.columnList.forEach(e => {
        if (e.label) {
          list.push(e);
        }
      });
      return list;
    }
    );

    const handleEdit = (va, val) => {
      console.log(va, val);
    };

    const handleSizeChange = val => {
      state.pageSize = val;
      state.currentPage = 1;
      emit('query', state.pageSize, state.currentPage);
    };
    const handleCurrentChange = val => {
      state.currentPage = val;
      emit('query', state.pageSize, state.currentPage);
    };

    return {
      state,
      columnListData,
      handleEdit,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less" scoped>

  .pagination {
    display: flex;
    justify-content: flex-end;
  }

</style>
