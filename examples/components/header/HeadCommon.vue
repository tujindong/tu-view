<template>
  <div class="head-wraper">
    <div class="header-box">
      <img @click="goBack" class="back-button" src="../../assets/images/back_arrow.png" alt="图标">
      <p class="title-name">{{ titleName }}</p>
      <p class="place-holder"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headcommon',
  props: {
    title: String
  },
  data() {
    return {
      titleName: this.title
    }
  },
  methods: {
    goBack() {
      history.length > 1 ? this.$router.go(-1) : this.$router.replace('/');
    }
  }
}
</script>

<style lang="scss">
  .head-wraper {
    height: 45px;
    .header-box {
      position: fixed;
      left: 0;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 45px;
      z-index: 10;
      background-color: #FFDC45;
      padding: 0 16px;
      box-sizing: border-box;
      .back-button {
        width: 10px;
      }
      .title-name {
        font-size: 18px;
        font-weight: 600;
        color: rgba(51,51,51,1);
        line-height: 25px;
      }
      .place-holder {
        flex: 0 0 auto;
        width: 10px;
        height: 50px;
      }
    }
  }
</style>