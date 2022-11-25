<template>
  <div class="demo-wrapper">
    <h2>Select</h2>
    <br />
    <p>基本配置</p>
    <tu-select v-model="value" placeholder="请选择">
      <tu-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tu-option>
    </tu-select>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value: "",
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>