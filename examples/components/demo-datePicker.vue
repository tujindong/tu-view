<template>
  <div class="demo-wrapper">
    <h2>datePicker</h2>
    <br />
    <p>默认</p>
    <tu-date-picker v-model="value1" type="date" placeholder="选择日期">
    </tu-date-picker>

    <br />
    <p>带快捷键</p>
    <tu-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions"
    >
    </tu-date-picker>

    <br />
    <p>周</p>
    <tu-date-picker
      v-model="value3"
      type="week"
      format="yyyy 第 WW 周"
      placeholder="选择周"
    >
    </tu-date-picker>

    <br />
    <p>月</p>
    <tu-date-picker v-model="value4" type="month" placeholder="选择月">
    </tu-date-picker>

    <br />
    <p>年</p>
    <tu-date-picker v-model="value5" type="year" placeholder="选择年">
    </tu-date-picker>

    <br />
    <p>多个日期</p>
    <tu-date-picker
      type="dates"
      v-model="value6"
      placeholder="选择一个或多个日期"
    >
    </tu-date-picker>

    <br />
    <p>多个月</p>
    <tu-date-picker
      type="months"
      v-model="value7"
      placeholder="选择一个或多个月"
    >
    </tu-date-picker>

    <br />
    <p>多个年</p>
    <tu-date-picker
      type="years"
      v-model="value8"
      placeholder="选择一个或多个年"
    >
    </tu-date-picker>

    <br />
    <p>日期范围默认</p>
    <tu-date-picker
      v-model="value9"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
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
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      value7: "",
      value8: "",
      value9: "",
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>