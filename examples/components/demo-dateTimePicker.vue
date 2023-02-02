<template>
  <div class="demo-wrapper">
    <h2>Table</h2>
    <br />
    <p>基本配置</p>
    <tu-date-picker v-model="value1" type="datetime" placeholder="选择日期时间">
    </tu-date-picker>

    <br />
    <p>带快捷键</p>
    <tu-date-picker
      v-model="value2"
      type="datetime"
      placeholder="选择日期时间"
      align="right"
      :picker-options="pickerOptions"
    >
    </tu-date-picker>

    <br />
    <p>日期和时间范围</p>
    <tu-date-picker
      v-model="value3"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    >
    </tu-date-picker>

    <br />
    <p>日期和时间范围 快捷项</p>
    <tu-date-picker
      v-model="value4"
      type="datetimerange"
      :picker-options="pickerOptions2"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right"
    >
    </tu-date-picker>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      pickerOptions: {
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
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value4: "",
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>