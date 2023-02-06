<template>
  <div class="demo-wrapper">
    <h2>Message</h2>
    <br />
    <p>基本配置</p>
    <tu-button @click="open">打开消息提示</tu-button>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },

  methods: {
    open() {
      this.$message("这是一条消息提示");
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>