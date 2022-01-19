<script setup>
import { reactive } from 'vue';
import DataDetails from '@/components/layout/DataDetails';
import Steps from '@/components/steps/Steps';
const state = reactive({
  stepList: [
    {
      title: '提交订单',
      description: new Date(),
    },
    {
      title: '担保审核',
      description: new Date(),
    },
    {
      title: '订单支付',
      description: new Date(),
    },
    {
      title: '订单支付',
      description: new Date(),
    },
  ],
});


</script>

<template>
  <DataDetails>
    <template #title>
      订单详情（xxxxxxxxx）
    </template>
    <template #operation>
      <el-button type="primary">
        返回列表
      </el-button>
    </template>
    <template #section>
      <Steps
        :step-list="state.stepList"
        :space="400"
      />
    </template>
  </DataDetails>
</template>

<style scoped lang='less'>
</style>
