<template>
  <div class="demo-radio-wrapper">
    <h2>单选按钮</h2>
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
      >按钮单选4</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="5" border disabled
      >按钮禁用5</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="8" border size="mini"
      >超小单选</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="6" border size="small"
      >小按钮单选</tu-radio
    >

    <tu-radio class="demo-radio" v-model="radio" :label="7" border size="large"
      >大按钮单选</tu-radio
    >

    <br />
    <p>按钮组</p>
    <tu-radio-group v-model="radioGroup1">
      <tu-radio :label="3">备选项</tu-radio>
      <tu-radio :label="6">备选项</tu-radio>
      <tu-radio :label="9">备选项</tu-radio>
    </tu-radio-group>

    <br />
    <p>按钮组 内部边框</p>

    <tu-radio-group v-model="radioGroup2">
      <tu-radio :label="3" border>备选项</tu-radio>
      <tu-radio :label="6" border>备选项</tu-radio>
      <tu-radio :label="9" border>备选项</tu-radio>
    </tu-radio-group>

    <br />
    <p>按钮组 边框 小</p>

    <tu-radio-group v-model="radioGroup3" border size="small">
      <tu-radio :label="3">小备选项</tu-radio>
      <tu-radio :label="6">小备选项</tu-radio>
      <tu-radio :label="9">小备选项</tu-radio>
    </tu-radio-group>

    <br />
    <p>按钮组 边框 超小 禁用</p>

    <tu-radio-group v-model="radioGroup4" border size="mini" disabled>
      <tu-radio :label="3">小备选项</tu-radio>
      <tu-radio :label="6">小备选项</tu-radio>
      <tu-radio :label="9">小备选项</tu-radio>
    </tu-radio-group>

    <br />
    <p>单选框组 value change操作</p>

    <tu-radio-group v-model="radioGroup5" @change="handleChangeGroup">
      <tu-radio :label="1">小备选项</tu-radio>
      <tu-radio :label="2">小备选项</tu-radio>
      <tu-radio :label="3">小备选项</tu-radio>
    </tu-radio-group>
  </div>
</template>

<script>
export default {
  name: "deme-radio",

  data() {
    return {
      radio: 1,
      radioGroup1: 3,
      radioGroup2: 3,
      radioGroup3: 3,
      radioGroup4: 3,
      radioGroup5: 3,
    };
  },

  methods: {
    handleChangeGroup(e) {
      console.log("框组", e);
      this.radioGroup5 = e;
    },
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