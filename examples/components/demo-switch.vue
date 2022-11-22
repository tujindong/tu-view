<template>
  <div class="demo-wrapper">
    <h2>切换按钮</h2>
    <br />
    <p>基本切换</p>
    <tu-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
    </tu-switch>
  </div>
</template>

<script>
export default {
  name: "deme-icon",

  data() {
    return {
      value: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
}
</style>