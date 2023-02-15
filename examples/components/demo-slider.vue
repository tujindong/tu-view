<template>
  <div class="demo-wrapper">
    <h2>slider</h2>
    <br />
    <p>基本配置</p>
    <tu-slider v-model="value1"></tu-slider>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      value1: 0,
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>