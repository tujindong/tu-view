<template>
  <div class="demo-inputNumber-wrapper">
    <h2>数字输入框</h2>
    <br />
    <p>基本输入 min1 max 10</p>
    <tu-input-number
      v-model="num"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
      placeholder="请输入"
    ></tu-input-number>

    <br />
    <p>禁用</p>
    <tu-input-number
      placeholder="请输入"
      v-model="num"
      :disabled="true"
    ></tu-input-number>

    <br />
    <p>步数</p>
    <tu-input-number v-model="num2" :step="2"></tu-input-number>

    <br />
    <p>严格步数</p>
    <tu-input-number v-model="num3" :step="2" step-strictly></tu-input-number>

    <br />
    <p>精度</p>
    <tu-input-number
      v-model="num4"
      :precision="2"
      :step="0.1"
      :max="10"
    ></tu-input-number>

    <br />
    <p>超小</p>
    <tu-input-number
      placeholder="请输入"
      v-model="num3"
      size="mini"
    ></tu-input-number>

    <br />
    <p>较小</p>
    <tu-input-number
      placeholder="请输入"
      v-model="num3"
      size="small"
    ></tu-input-number>

    <br />
    <p>大</p>
    <tu-input-number
      placeholder="请输入"
      v-model="num3"
      size="large"
    ></tu-input-number>

    <br />
    <p>不使用控制按钮</p>
    <tu-input-number
      v-model="num"
      :controls="false"
      @change="handleChange"
      :min="1"
      :max="10"
    ></tu-input-number>

    <br />
    <p>按钮位置</p>
    <tu-input-number
      v-model="num"
      controls-position="right"
      @change="handleChange"
      :min="1"
      :max="10"
    ></tu-input-number>
  </div>
</template>

<script>
export default {
  name: "deme-icon",

  data() {
    return {
      num: 1,
      num2: 1,
      num3: 1,
      num4: 1,
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-inputNumber-wrapper {
}
</style>