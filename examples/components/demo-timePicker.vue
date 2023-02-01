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

    <br />
    <p>可以选择任意时间</p>
    <tu-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange: '18:30:00-20:30:00',
      }"
      placeholder="任意时间点"
    >
    </tu-time-picker>

    <br />
    <p>任意时间 携带箭头</p>
    <tu-time-picker
      arrow-control
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="任意时间点"
    >
    </tu-time-picker>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value2: new Date(2016, 9, 10, 18, 40),
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>