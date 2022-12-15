<template>
  <div class="demo-wrapper">
    <h2>Select</h2>
    <br />
    <!-- <p>基本配置</p>
    <tu-select v-model="value" size="mini" placeholder="请选择" clearable>
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
    <p>小</p>
    <tu-select v-model="value" size="small" placeholder="请选择" clearable>
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
    <p>中等</p>
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
    <p>大</p>
    <tu-select v-model="value" size="large" placeholder="请选择" clearable>
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
    </tu-select> -->

    <br />
    <p>设置宽度 - {{ value }}</p>
    <tu-select
      style="width: 300px"
      v-model="value1"
      placeholder="请选择"
      filterable
      clearable
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

    <!-- <br />
    <p>分组</p>
    <tu-select filterable v-model="value3" size="mini" placeholder="请选择分组">
      <tu-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label"
      >
        <tu-option
          v-for="item in group.options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </tu-option>
      </tu-option-group>
    </tu-select> -->

    <!-- <br />
    <p>分组 小</p>
    <tu-select v-model="value3" size="small" placeholder="请选择分组">
      <tu-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label"
      >
        <tu-option
          v-for="item in group.options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </tu-option>
      </tu-option-group>
    </tu-select> -->

    <!-- <br />
    <p>分组 大</p>
    <tu-select v-model="value3" size="large" placeholder="请选择分组">
      <tu-option-group
        v-for="group in options3"
        :key="group.label"
        :label="group.label"
      >
        <tu-option
          v-for="item in group.options3"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </tu-option>
      </tu-option-group>
    </tu-select> -->

    <br />
    <p>多选</p>
    <tu-select
      style="width: 300px"
      multiple
      clearable
      filterable
      v-model="value2"
      placeholder="请选择"
      @change="handleChage"
    >
      <tu-option
        v-for="item in options2"
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
      options2: [
        {
          value: "beijin",
          label: "北京",
        },
        {
          value: "shanghai",
          label: "上海",
        },
        {
          value: "guangzhou",
          label: "广州",
        },
        {
          value: "shenzheng",
          label: "深圳",
        },
        {
          value: "hefei",
          label: "合肥",
        },
        {
          value: "nanjin",
          label: "南京",
        },
        {
          value: "hangzhou",
          label: "杭州",
        },
        {
          value: "wuhan",
          label: "武汉",
        },
        {
          value: "wulumuqi",
          label: "乌鲁木齐",
        },
        {
          value: "huhehaote",
          label: "呼和浩特",
        },
      ],
      value2: ["beijin", "shanghai"],
      options3: [
        {
          label: "热门城市",
          options3: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options3: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      value3: "",
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