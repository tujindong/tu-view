<template>
  <div class="all-wraper">
    <app-header title="toast演示"></app-header>
    <div class="demo-wraper">
      <p class="title">Toast演示</p>
      <div class="box"><ck-button type="primary" @click="triggerToast">打开Toast</ck-button></div>
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
    triggerToast() {
      this.$toast({message: 'Hello,Toast演示', duration: 1500});
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