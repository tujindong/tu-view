<template>
  <div class="demo-wrapper">
    <h2>输入框</h2>
    <br />
    <p>基本输入</p>
    <tu-input v-model="input" placeholder="请输入内容"></tu-input>

    <br />
    <p>基本输入 超小</p>
    <tu-input v-model="input" placeholder="请输入内容" size="mini"></tu-input>

    <br />
    <p>基本输入 小</p>
    <tu-input v-model="input" placeholder="请输入内容" size="small"></tu-input>

    <br />
    <p>基本输入 大</p>
    <tu-input v-model="input" placeholder="请输入内容" size="large"></tu-input>

    <br />
    <p>可清空</p>
    <tu-input v-model="input1" placeholder="请输入内容" clearable></tu-input>
  </div>
</template>

<script>
export default {
  name: "deme-input",

  data() {
    return {
      input: "",
      input1: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
}
</style>