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
    <div class="pagination">
      <el-pagination
        v-model:currentPage="currentPage3"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {

  props: {
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
      default: 5,
    },
  },

  setup(props) {


    const currentPage3 = ref(5);

    const state = reactive({
      operationName: props.operation,
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
      console.log(props);
    };

    return {

      currentPage3,
      state,
      columnListData,
      handleEdit,
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
