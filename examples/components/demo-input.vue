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
    <p>禁用</p>
    <tu-input
      v-model="inputDisabled1"
      disabled
      placeholder="请输入内容"
    ></tu-input>
    <br />

    <p>禁用带输入值</p>
    <tu-input
      v-model="inputDisabled2"
      disabled
      placeholder="请输入内容"
    ></tu-input>

    <br />
    <p>可清空</p>
    <tu-input v-model="input1" placeholder="请输入内容" clearable></tu-input>

    <br />
    <p>带密码</p>
    <tu-input
      v-model="input1"
      placeholder="请输入密码"
      clearable
      show-password
    ></tu-input>

    <br />
    <p>前置内容 带 icon 的输入框</p>
    <tu-input
      placeholder="请选择日期"
      prefix-icon="tu-icon-calendar"
      v-model="input1"
    >
    </tu-input>

    <br />
    <p>前置内容 带 icon 的输入框 slot</p>
    <tu-input placeholder="请输入内容" v-model="input1">
      <i slot="prefix" class="tu-icon-search"></i>
    </tu-input>

    <br />
    <p>后置内容 带 icon 的输入框</p>
    <tu-input
      placeholder="请选择日期"
      suffix-icon="tu-icon-calendar"
      v-model="input1"
      clearable
    >
    </tu-input>

    <br />
    <p>后置内容 带 icon 的输入框 slot</p>
    <tu-input placeholder="请选择日期" v-model="input1" clearable>
      <i slot="suffix" class="tu-icon-calendar" style="font-size: 20px"></i>
    </tu-input>

    <br />
    <p>最大字数限制</p>
    <tu-input
      placeholder="请输入字数"
      v-model="input2"
      maxlength="10"
      show-word-limit
    >
    </tu-input>
  </div>
</template>

<script>
export default {
  name: "deme-input",

  data() {
    return {
      input: "",
      inputDisabled1: "",
      inputDisabled2: "禁用带输入值",
      input1: "",
      input2: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
}
</style>