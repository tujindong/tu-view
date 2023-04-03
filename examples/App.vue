<template>
  <div class="container">
    <tu-tree-select
      placeholder="请输入节点"
      v-model="value"
      :data="data"
      :render-after-expand="false"
    />
    <tu-divider />
    <br />
    <br />
    <tu-tree-select
      placeholder="请输入"
      v-model="value"
      :data="data"
      :render-after-expand="false"
      show-checkbox
    />
    <br />
    <br />
    <tu-select v-model="value1" placeholder="请选择">
      <tu-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </tu-option>
    </tu-select>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      value: "",
      defaultProps: {
        children: "children",
        label: "label",
      },

      options: [
        {
          value: "banana",
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
      value1: "",
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  padding: 10px 10px 500px;
}
</style>
