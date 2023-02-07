<template>
  <div class="demo-wrapper">
    <h2>Select</h2>
    <br />
    <tu-row :gutter="20">
      <tu-col :span="8">
        <tu-select multiple size="large" v-model="value1" placeholder="请选择">
          <tu-option
            v-for="item in options"
            :key="item.value"
            :value="item.value"
            :label="item.label"
          >
          </tu-option>
        </tu-select>
      </tu-col>
      <tu-col :span="8">
        <tu-select
          multiple
          size="medium"
          v-model="value2"
          placeholder="请选择"
          clearable
        >
          <tu-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </tu-option>
        </tu-select>
      </tu-col>
      <tu-col :span="8">
        <tu-select
          multiple
          filterable
          size="small"
          v-model="value3"
          placeholder="请选择"
        >
          <tu-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </tu-option>
        </tu-select>
      </tu-col>
    </tu-row>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      options: [
        {
          value: "balance",
          label: "香蕉",
        },
        {
          value: "apple",
          label: "苹果",
        },
        {
          value: "orange",
          label: "橙子",
        },
        {
          value: "watermelon",
          label: "西瓜",
        },
        {
          value: "durian",
          label: "榴莲",
        },
        {
          value: "strawberry",
          label: "草莓",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped lang="scss">
/deep/.tu-select-dropdown__item {
  color: red;
}
.demo-wrapper {
}
</style>