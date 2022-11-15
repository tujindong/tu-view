<template>
  <div class="demo-icon-wrapper">
    <tu-checkbox v-model="checked1">多选1</tu-checkbox>
    <tu-checkbox v-model="checked2">多选2</tu-checkbox>
    <tu-checkbox disabled v-model="checked3">多选3</tu-checkbox>

    <tu-checkbox v-model="checked4" border>按钮多选4</tu-checkbox>

    <tu-checkbox v-model="checked4" border size="mini"
      >超小按钮多选4</tu-checkbox
    >
    <tu-checkbox v-model="checked4" border size="small"
      >小按钮多选4</tu-checkbox
    >
    <tu-checkbox v-model="checked4" border size="large"
      >大按钮多选4</tu-checkbox
    >

    <br />

    <tu-checkbox-group v-model="checkList">
      <tu-checkbox label="复选框A"></tu-checkbox>
      <tu-checkbox label="复选框B"></tu-checkbox>
    </tu-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "deme-icon",

  data() {
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checkList: ["复选框A"],
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-icon-wrapper {
  margin-top: 20px;
}
</style>