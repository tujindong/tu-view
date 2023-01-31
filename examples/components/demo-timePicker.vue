<template>
  <div class="demo-wrapper">
    <h2>TimePicker</h2>
    <br />
    <p>基本配置</p>
    <tu-time-select
      v-model="value"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </tu-time-select>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>