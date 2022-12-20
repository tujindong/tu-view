<template>
  <div class="demo-wrapper">
    <h2>Select</h2>
    <br />
    <tu-row>
      <tu-col :span="12">
        <tu-select v-model="value1" filterable multiple placeholder="请选择">
          <tu-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </tu-option>
        </tu-select>
      </tu-col>
      <tu-col :span="12">
        <tu-select
          v-model="value2"
          multiple
          collapse-tags
          style="margin-left: 20px"
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
      ],
      value1: [],
      value2: [],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.demo-wrapper {
}
</style>