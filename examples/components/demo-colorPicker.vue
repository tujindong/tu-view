<template>
  <div class="demo-wrapper">
    <h2>Color Picker</h2>
    <br />
    <p>基本配置</p>
    <tu-color-picker v-model="color1"></tu-color-picker>
    <p>无默认值</p>
    <tu-color-picker v-model="color2"></tu-color-picker>
    <p>透明度</p>
    <tu-color-picker
      v-model="color"
      show-alpha
      :predefine="predefineColors"
    ></tu-color-picker>
    <p>不同尺寸</p>
    <tu-color-picker v-model="color" size="large" show-alpha></tu-color-picker>
    <tu-color-picker v-model="color" size="medium" show-alpha></tu-color-picker>
    <tu-color-picker v-model="color" size="small" show-alpha></tu-color-picker>
    <tu-color-picker v-model="color" size="mini" show-alpha></tu-color-picker>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      color1: "#409EFF",
      color2: null,
      color: "rgba(19, 206, 102, 0.8)",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>