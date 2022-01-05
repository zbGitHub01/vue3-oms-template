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
      <span v-if="item.type === 'label'">{{ flatEntity[item.property] }}</span>
      <el-input
        v-if="item.type === 'input'"
        v-model="flatEntity[item.property]"
        :placeholder="item.placeholder"
      />
      <el-select
        v-if="item.type === 'select'"
        v-model="flatEntity[item.property]"
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
        v-model="flatEntity[item.property]"
        :placeholder="item.placeholder"
      />
      <el-date-picker
        v-if="item.type === 'date'"
        v-model="flatEntity[item.property]"
        type="date"
        value-format="timestamp"
        :placeholder="item.placeholder"
      />
      <el-date-picker
        v-if="item.type === 'daterange'"
        v-model="flatEntity[item.property]"
        type="daterange"
        value-format="timestamp"
        :placeholder="item.placeholder"
      />
      <el-input
        v-if="item.type === 'textarea'"
        type="textarea"
        :rows="item.rows"
        :placeholder="item.placeholder"
        v-model="flatEntity[item.property]"
      />
      <el-input-number
        v-if="item.type === 'numberic'"
        :min="item.min"
        :max="item.max"
        v-model="flatEntity[item.property]"
      />
      <el-input
        v-if="item.type === 'input-secret'"
        show-password
        v-model="flatEntity[item.property]"
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
const flatten = require('flat');
const unflatten = require('flat').unflatten;

export default {

  props: {
    // fields: Array,
    fields: {
      type: Array,
      default: () => {
        return [];
      },
    },
    defaultValues: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },

  computed: {
    formFields() {
      const fields = [];
      this.fields.forEach(e => {
        if (e.type) {
          fields.push(e);
        }
      });
      return fields;
    },
  },

  data() {
    return {
      regionOptions: regionData,
      flatEntity: flatten(this.defaultValues),
    };
  },

  methods: {
    getEntity() {
      return unflatten(this.flatEntity);
    },
    handleSubmit() {
      this.$emit('submit', this.getEntity());
    },
    handleReset() {
      this.flatEntity = {};
      this.$emit('reset', this.getEntity());
    },
  },

};
</script>

<style>

</style>
