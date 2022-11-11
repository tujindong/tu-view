<template>
  <div class="demo-radio-wrapper">
    <tu-radio class="demo-radio" v-model="radio" :label="1" disabled
      >备选项1</tu-radio
    >
    <tu-radio class="demo-radio" v-model="radio" :label="2" size="large"
      >备选项2</tu-radio
    >
    <tu-radio class="demo-radio" v-model="radio" :label="3" disabled
      >禁用3</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="4" border
      >按钮备选4</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="5" border disabled
      >按钮禁用5</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="8" border size="mini"
      >超小按钮</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="6" border size="small"
      >小按钮</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="7" border size="large"
      >大按钮</tu-radio
    >
  </div>
</template>

<script>
export default {
  name: "deme-radio",

  data() {
    return {
      radio: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-radio-wrapper {
  padding-top: 20px;
  .demo-radio {
    margin-left: 30px;
    margin-bottom: 10px;
  }
}
</style>