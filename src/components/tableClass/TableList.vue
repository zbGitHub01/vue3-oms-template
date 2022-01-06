<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column
      v-for="item in columnList"
      :key="item.id"
      :prop="item.prop"
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
</template>

<script>
import { computed, reactive } from 'vue';
const flatten = require('flat');
const unflatten = require('flat').unflatten;

export default {

  props: {
    operation: {
      type: String,
      default: () => {
        return '';
      },
    },
    columnData: {
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
  },

  setup(props, { emit }) {

    const state = reactive({
      flatEntity: flatten(props.tableData),
      operationName: props.operation,
    });

    const columnList = computed(() => {
      const list = [];
      props.columnData.forEach(e => {
        if (e.label) {
          list.push(e);
        }
      });
      return list;
    }
    );

    const getEntity = () => {
      return unflatten(state.flatEntity);
    };

    const handleSubmit = () => {
      emit('submit', getEntity());
    };

    const handleReset = () => {
      state.flatEntity = {};
      emit('reset', getEntity());
    };

    const handleEdit = (va, val) => {
      console.log(va, val);
    };

    return {
      state,
      columnList,
      handleSubmit,
      handleReset,
      handleEdit,
    };
  },
};
</script>

<style lang="less" scoped>


</style>
