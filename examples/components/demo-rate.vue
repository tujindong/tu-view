<template>
  <div class="demo-wrapper">
    <h2>Rate</h2>
    <br />
    <p>基本配置</p>
    <tu-rate v-model="value1"></tu-rate>
  </div>
</template>

<script>
export default {
  name: "deme-rate",

  data() {
    return {
      value1: null,
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>