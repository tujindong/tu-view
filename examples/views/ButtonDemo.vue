<template>
  <div class="all-wraper">
    <app-header title="按钮演示"></app-header>
    <div class="demo-wraper">
      <p class="title">按钮类型</p>
      <div class="box"><ck-button type="primary" @click="testClick">基本按钮</ck-button></div>
      <div class="box"><ck-button type="danger">危险按钮</ck-button></div>
      <div class="box"><ck-button type="warning">警告按钮</ck-button></div>
      <div class="box"><ck-button type="info">信息按钮</ck-button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-demo',
  data() {
    return {

    }
  },
  methods: {
    testClick() {
      console.log('点了按钮');
    }
  }
}
</script>

<style lang="scss" scoped>
  .demo-wraper {
    padding: 16px;
    box-sizing: border-box;
    .title {
      font-size: 14px;
      color: rgba(69, 90, 100, 1);
      margin-bottom: 8px;
    }
    .box {
      margin-bottom: 8px;
    }
  }
</style>