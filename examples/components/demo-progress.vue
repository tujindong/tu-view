<template>
  <div class="demo-wrapper">
    <h2>Progress</h2>
    <br />
    <p>基本配置</p>
    <div class="progress-block">
      <tu-progress :percentage="percentage" :color="customColor"></tu-progress>

      <tu-progress
        :percentage="percentage"
        :color="customColorMethod"
      ></tu-progress>

      <tu-progress :percentage="percentage" :color="customColors"></tu-progress>
    </div>

    <div>
      <tu-button-group size="mini">
        <tu-button icon="tu-icon-minus" @click="decrease"></tu-button>
        <tu-button icon="tu-icon-plus" @click="increase"></tu-button>
      </tu-button-group>
    </div>

    <br />
    <p>环形</p>
    <!-- <tu-progress type="circle" :percentage="25"></tu-progress> -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <tu-progress type="circle" :percentage="5" :stroke-width="20"></tu-progress>

    <tu-progress
      type="circle"
      :percentage="50"
      status="exception"
      :stroke-width="20"
    ></tu-progress>
    <tu-progress
      type="circle"
      :percentage="50"
      :stroke-width="20"
      status="warning"
    ></tu-progress>

    <br />
    <p>仪表盘</p>
    <tu-progress
      type="dashboard"
      :percentage="percentage"
      :color="customColors"
    ></tu-progress>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      percentage: 20,
      customColor: "#409eff",
      customColors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>