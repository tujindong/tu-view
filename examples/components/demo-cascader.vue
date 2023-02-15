<template>
  <div class="demo-wrapper">
    <h2>Table</h2>
    <br />
    <p>默认 click 触发子菜单</p>
    <tu-cascader
      v-model="value"
      :options="options"
      @change="handleChange"
    ></tu-cascader>

    <br />
    <p>默认 click 触发子菜单</p>
    <tu-cascader
      v-model="value"
      :options="options"
      :props="{ expandTrigger: 'hover' }"
      @change="handleChange"
    ></tu-cascader>

    <br />
    <p>禁用选项</p>
    <tu-cascader
      :options="options"
      clearable
      :show-all-levels="false"
    ></tu-cascader>

    <p>默认显示所有Tag</p>
    <tu-cascader :options="options" :props="props" clearable></tu-cascader>

    <p>折叠展示Tag</p>
    <tu-cascader
      :options="options"
      :props="props"
      collapse-tags
      clearable
    ></tu-cascader>

    <tu-row :gutter="20">
      <tu-col :span="12">
        <p>单选可搜索</p>
        <tu-cascader
          placeholder="试试搜索：姑苏区"
          :options="options"
          filterable
        ></tu-cascader>
      </tu-col>
      <tu-col :span="12">
        <p>多选可搜索</p>
        <tu-cascader
          placeholder="试试搜索：姑苏区"
          :options="options"
          :props="{ multiple: true }"
          filterable
        ></tu-cascader>
      </tu-col>
    </tu-row>
    <br />
    <p>级联面板</p>
    <tu-cascader-panel :options="options"></tu-cascader-panel>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      value: [],
      //   props: { multiple: true, checkStrictly: true },
      props: { checkStrictly: true },
      options: [
        {
          value: "1",
          label: "上海",
          children: [
            {
              value: "1-1",
              label: "普陀区",
            },
            {
              value: "1-2",
              label: "黄埔区",
            },
            {
              value: "1-3",
              label: "徐汇区",
            },
          ],
        },
        {
          value: "2",
          label: "江苏",
          children: [
            {
              value: "2-1",
              label: "南京",
              children: [
                {
                  value: "2-1-1",
                  label: "玄武区",
                },
                {
                  value: "2-1-2",
                  label: "秦淮区",
                },
                {
                  value: "2-1-3",
                  label: "建邺区",
                },
                {
                  value: "2-1-4",
                  label: "鼓楼区",
                },
                {
                  value: "2-1-5",
                  label: "浦口区",
                },
                {
                  value: "2-1-6",
                  label: "栖霞区",
                },
                {
                  value: "2-1-7",
                  label: "雨花台区",
                },
                {
                  value: "2-1-8",
                  label: "江宁区",
                },
                {
                  value: "2-1-9",
                  label: "六合区",
                },
              ],
            },
            {
              value: "2-2",
              label: "苏州",
              children: [
                {
                  value: "2-2-1",
                  label: "姑苏区",
                },
                {
                  value: "2-2-2",
                  label: "相城区",
                },
              ],
            },
            {
              value: "2-3",
              label: "扬州",
              children: [
                {
                  value: "2-3-1",
                  label: "江都区",
                },
              ],
            },
          ],
        },
        {
          value: "3",
          label: "浙江",
          children: [
            {
              value: "3-1",
              label: "杭州",
              children: [
                {
                  value: "3-1-1",
                  label: "西湖区",
                },
                {
                  value: "3-1-2",
                  label: "上城区",
                },
                {
                  value: "3-1-3",
                  label: "余杭区",
                },
                {
                  value: "3-1-4",
                  label: "拱墅区",
                },
                {
                  value: "3-1-5",
                  label: "滨江区",
                },
              ],
            },
            {
              value: "3-2",
              label: "宁波",
              children: [
                {
                  value: "3-2-1",
                  label: "海曙区",
                },
              ],
            },
          ],
        },
      ],
    };
  },

  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>