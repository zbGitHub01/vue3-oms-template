<script setup>
import { reactive } from 'vue';
import DataDetails from '@/components/layout/DataDetails';
import Steps from '@/components/steps/Steps';
const state = reactive({
  stepList: [
    {
      title: '提交订单',
      description: '32323232',
    },
    {
      title: '担保审核',
      description: '32323232',
    },
    {
      title: '订单支付',
      description: '32323232',
    },
    {
      title: '订单支付',
      description: '32323232',
    },
  ],
  descriptionList: [
    {
      label: '业务流水号',
      value: 'adada',
    },
    {
      label: '业务流水号',
      value: 'adada',
    },
    {
      label: '业务流水号',
      value: 'adada',
    },
    {
      label: '业务流水号',
      value: 'adada',
    },
    {
      label: '业务流水号',
      value: 'adada',
    },
    {
      label: '业务流水号',
      value: 'adada',
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
      <div class="step">
        <Steps
          :step-list="state.stepList"
          :space="300"
        />
      </div>
    </template>
    <template #content>
      <div class="content">
        <div>
          <el-descriptions
            title="基本信息"
            :column="2"
            border
          >
            <el-descriptions-item
              v-for="(item,index) in state.descriptionList"
              :key="index"
              :label="item.label"
              label-align="center"
              label-class-name="my-label"
              class-name="my-content"
              align="left"
              width="1px"
            >
              {{ item.value }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div>
          <el-descriptions
            title="投保信息"
            :column="2"
            border
          >
            <el-descriptions-item
              v-for="(item,index) in state.descriptionList"
              :key="index"
              :label="item.label"
              label-align="center"
              label-class-name="my-label"
              class-name="my-content"
              align="left"
              width="1px"
            >
              {{ item.value }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div>
          <el-descriptions
            title="基本户信息"
            :column="3"
            border
          >
            <el-descriptions-item
              v-for="(item,index) in state.descriptionList"
              :key="index"
              :label="item.label"
              label-align="center"
              label-class-name="my-label"
              class-name="my-content"
              align="left"
              width="1px"
            >
              {{ item.value }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <div>
          <el-descriptions
            title="操作信息"
            direction="vertical"
            :column="3"
            border
          >
            <el-descriptions-item
              v-for="(item,index) in state.descriptionList"
              :key="index"
              :label="item.label"
              label-class-name="my-label"
              class-name="my-content"
              align="center"
              width="1px"
            >
              {{ item.value }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>
    </template>
  </DataDetails>
</template>

<style scoped lang='less'>

.step {
  width: 75%;
  margin: 0 auto;
}
.content {
  width: 80%;
  div {
    margin-top: 10px;
    & + div {
      margin-top: 30px;
    }
  }
}
</style>
