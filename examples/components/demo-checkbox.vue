<template>
  <div class="demo-icon-wrapper">
    <tu-checkbox v-model="checked">多选1</tu-checkbox>
    <tu-checkbox v-model="checked">多选2</tu-checkbox>
  </div>
</template>

<script>
export default {
  name: "deme-icon",

  data() {
    return {
      checked: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-icon-wrapper {
  margin-top: 20px;
}
</style>