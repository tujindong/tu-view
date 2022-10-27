<template>
  <div class="all-wraper">
    <app-header title="dialog演示"></app-header>
    <div class="demo-wraper">
      <p class="title">Dialog演示</p>
      <div class="box"><ck-button type="primary" @click="triggerDialogAlert">Alert</ck-button></div>
      <div class="box"><ck-button type="primary" @click="triggerDialogConfirm">Confirm</ck-button></div>
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
    triggerDialogAlert() {
      this.$dialog.alert({
        content: '此条信息已经删除'
      }).then(() => {
        console.log('已确定');
      });
    },
    triggerDialogConfirm() {
      this.$dialog.confirm({
        content: '确定删除改账号嘛？'
      }).then(() => {
        console.log('已确定');
      }).catch(() => {
        console.log('已取消');
      });
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