<template>
  <div class="demo-wrapper">
    <h2>Select</h2>
    <br />
    <p>基本配置</p>
    <tu-select v-model="value" placeholder="请选择" clearable>
      <tu-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tu-option>
    </tu-select>

    <br />
    <p>禁用</p>
    <tu-select v-model="value" disabled placeholder="请选择" clearable>
      <tu-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </tu-option>
    </tu-select>

    <br />
    <p>设置宽度 - {{ value }}</p>
    <tu-select
      style="width: 300px"
      v-model="value1"
      placeholder="请选择"
      @change="handleChage"
    >
      <tu-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
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
          value: "v1",
          label: "北京",
        },
        {
          value: "v2",
          label: "上海",
        },
      ],
      value: "",

      options1: [
        {
          value: "val1",
          label: "北京",
        },
        {
          value: "val2",
          label: "上海",
          disabled: true,
        },
        {
          value: "val3",
          label: "广州",
        },
        {
          value: "val4",
          label: "深圳",
        },
        {
          value: "val5",
          label: "武汉",
        },
        {
          value: "val6",
          label: "西安",
        },
        {
          value: "val7",
          label: "合肥",
        },
        {
          value: "val8",
          label: "杭州",
        },
        {
          value: "val9",
          label: "南京",
        },
      ],
      value1: "",
    };
  },

  methods: {
    handleChage(e) {
      console.log("e", e);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>