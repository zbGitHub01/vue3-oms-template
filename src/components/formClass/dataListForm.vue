<template>
  <el-form
    :inline="true"
    :model="defaultValues"
  >
    <el-form-item
      v-for="item in formFields"
      :key="item.property"
      :label="item.name"
      :prop="item.property"
    >
      <span v-if="item.type === 'label'">{{ state.flatEntity[item.property] }}</span>
      <el-input
        v-if="item.type === 'input'"
        v-model="state.flatEntity[item.property]"
        :placeholder="item.placeholder"
      />
      <el-select
        v-if="item.type === 'select'"
        v-model="state.flatEntity[item.property]"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="opts in item.options"
          :key="opts.value"
          :label="opts.label"
          :value="opts.value"
        />
      </el-select>
      <el-cascader
        v-if="item.type === 'area-select'"
        size="large"
        :options="regionOptions"
        v-model="state.flatEntity[item.property]"
        :placeholder="item.placeholder"
      />
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="state.flatEntity[item.property]"
        type="date"
        value-format="x"
        :placeholder="item.placeholder"
      />
      <el-date-picker
        v-if="item.type === 'daterange'"
        v-model="state.flatEntity[item.property]"
        type="daterange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="x"
      />
      <el-input
        v-if="item.type === 'textarea'"
        type="textarea"
        :rows="item.rows"
        :placeholder="item.placeholder"
        v-model="state.flatEntity[item.property]"
      />
      <el-input-number
        v-if="item.type === 'numberic'"
        :min="item.min"
        :max="item.max"
        v-model="state.flatEntity[item.property]"
      />
      <el-input
        v-if="item.type === 'input-secret'"
        show-password
        v-model="state.flatEntity[item.property]"
        :placeholder="item.placeholder"
      />
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleSubmit"
      >
        查询
      </el-button>
      <el-button @click="handleReset">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { regionData } from 'element-china-area-data';
import { computed, reactive } from 'vue';
const flatten = require('flat');
const unflatten = require('flat').unflatten;

export default {

  props: {
    fields: {
      type: Array,
      default: () => [],
    },
    defaultValues: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  setup(props, { emit }) {

    const state = reactive({
      regionOptions: regionData,
      flatEntity: flatten(props.defaultValues), // 扁平
    });

    const formFields = computed(() => {
      const fields = [];
      props.fields.forEach(e => {
        if (e.type) {
          fields.push(e);
        }
      });
      return fields;
    }
    );

    const getEntity = () => {
      return unflatten(state.flatEntity);
    };

    const handleSubmit = () => {
      console.log(getEntity());
      emit('submit', getEntity());
    };

    const handleReset = () => {
      state.flatEntity = {};
      emit('reset', getEntity());
    };

    return {
      state,
      formFields,
      handleSubmit,
      handleReset,
    };
  },
};
</script>

<style lang="less" scoped>


</style>
