<template>
  <div class="main">
    <el-steps
      :active="props.active"
      align-center
      :space="props.space"
    >
      <el-step
        v-for="item in props.stepList"
        :key="item.value"
        :title="item.title"
        :description="item.description"
      />
    </el-steps>
  </div>
</template>

<script setup>

// eslint-disable-next-line no-undef
const props = defineProps({
  space: {
    type: Number || String,
    default: '',
  },
  active: {
    type: String,
    default: '3',
  },
  stepList: {
    type: Array,
    default: () => [],
  },
});

// const emit = defineEmits([ 'change', 'delete' ]);

</script>
<style lang="less" scoped>
.main {
  display: flex;
  justify-content: center;
}
</style>
