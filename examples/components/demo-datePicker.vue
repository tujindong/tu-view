<template>
  <div class="demo-wrapper">
    <h2>datePicker</h2>
    <br />
    <p>默认</p>
    <tu-date-picker v-model="value1" type="date" placeholder="选择日期">
    </tu-date-picker>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>