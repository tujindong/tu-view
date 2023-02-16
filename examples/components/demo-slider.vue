<template>
  <div class="demo-wrapper">
    <h2>slider</h2>
    <br />
    <p>基本配置</p>
    <tu-slider v-model="value1"></tu-slider>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <tu-slider v-model="value2"></tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <tu-slider v-model="value3" :show-tooltip="false"></tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <tu-slider v-model="value4" :format-tooltip="formatTooltip"></tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <tu-slider v-model="value5" disabled></tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <tu-slider v-model="value1" :step="10"> </tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <tu-slider v-model="value2" :step="10" show-stops> </tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">带有输入框 </span>
      <tu-slider v-model="value" show-input> </tu-slider>
    </div>
    <div class="block">
      <span class="demonstration">范围选择 </span>
      <tu-slider vertical v-model="value" :max="10" height="200px"> </tu-slider>
    </div>
    <div class="block">
      <tu-slider v-model="value6" range :marks="marks"> </tu-slider>
    </div>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      value: 0,
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: [30, 60],
      marks: {
        0: "0°C",
        8: "8°C",
        37: "37°C",
        50: {
          style: {
            color: "#1989FA",
          },
          label: this.$createElement("strong", "50%"),
        },
      },
    };
  },

  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>