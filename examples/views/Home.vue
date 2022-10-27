<template>
  <div class="all-wraper">
    <div class="head-icon-wraper">
      <img class="icon" src="../assets/images/bg_test.png" alt="图标">
    </div>
    <div class="demo-wraper">
      <ck-button type="primary" @click="jumpToButton">按钮演示</ck-button>
    </div>
    <div class="demo-wraper">
      <ck-button type="primary" @click="jumpToToast">Toast演示</ck-button>
    </div>
    <div class="demo-wraper">
      <ck-button type="primary" @click="jumpToDialog">Dialog演示</ck-button>
    </div>
  </div>
</template>

<script>
import HeadCommon from '../components/header/HeadCommon.vue';

export default {
  name: 'home',
  data() {
    return {

    }
  },
  components: {
    HeadCommon
  },
  mounted() {

  },
  methods: {
    jumpToButton() {
      this.$router.push('/button');
    },
    jumpToToast() {
      this.$router.push('/toast');
    },
    jumpToDialog() {
      this.$router.push('/dialog');
    }
  }
}
</script>

<style lang="scss" scoped>
  .head-icon-wraper {
    text-align: center;
    padding: 24px 0;
    .icon {
      width: 164px;
    }
  }
  .demo-wraper {
    padding: 16px 24px;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
  }
</style>