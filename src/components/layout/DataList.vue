
<template>
  <div class="dataListLayout">
    <div class="title">
      <slot name="title" />
    </div>
    <div
      class="query"
      v-if="$slots.query"
    >
      <slot name="query" />
    </div>
    <div class="content">
      <div
        class="operation"
        v-if="$slots.operation"
      >
        <slot name="operation" />
      </div>
      <div class="main">
        <slot name="content" />
      </div>
    </div>
    <slot name="dialog" />
  </div>
</template>
<script>
export default {
  created() {
  },
  methods: {

  },
};
</script>

<style lang="less" scoped>
.dataListLayout {
  background-color:#f7f8fa;
  padding-bottom: 20px;
  .title {
    width: 100%;
    font-size: 20px;
    line-height: 32px;
    font-weight: 600;
    padding: 16px 20px;
    background-color: #fff;
    border-bottom: 1px solid #e8e8e8;
    box-sizing: border-box;
  }
  .query,.content {
    margin: 10px 0 0;
    padding: 16px 24px 0;
    box-sizing: border-box;
    background-color: #fff;
  }
  .content{
    padding-bottom: 16px;
  }
  .operation + .main{
    margin-top: 20px;
  }
  :deep(.el-pagination){
    margin-top: 20px;
  }
  :deep(.main>.el-table>.el-table__header-wrapper>table>thead>tr>th){
    color: rgba(0,0,0,.85);
    font-weight: 500;
    text-align: left;
    background: #fafafa;
    border-bottom: 1px solid #e8e8e8;
    transition: background .3s ease;
    padding: 16px 0;
    overflow-wrap: break-word;
  }
}
</style>
