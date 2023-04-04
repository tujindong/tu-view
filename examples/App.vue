<template>
  <div class="container">
    ++{{ value }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="value"
      :data="data"
      :render-after-expand="false"
      :checkStrictly="true"
    />
    <br />
    <!-- <tu-tree-select
      placeholder="请输入"
      v-model="value"
      :data="data"
      :render-after-expand="false"
      show-checkbox
    /> -->
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

    <br />
    <br />
    <tu-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></tu-tree>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      data: [
        {
          id: "1",
          label: "一级 1",
          children: [
            {
              id: "1-1",
              label: "二级 1-1",
              children: [
                {
                  id: "1-1-1",
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          label: "一级 2",
          children: [
            {
              id: "2-1",
              label: "二级 2-1",
              children: [
                {
                  id: "2-1-1",
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              id: "2-2",
              label: "二级 2-2",
              children: [
                {
                  id: "2-2-1",
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          id: "3",
          label: "一级 3",
          children: [
            {
              id: "3-1",
              label: "二级 3-1",
              children: [
                {
                  id: "3-1-1",
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              id: "3-2",
              label: "二级 3-2",
              children: [
                {
                  id: "3-2-1",
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

  methods: {
    handleNodeClick(data, node, comp) {
      console.log("tree~~", { data, node, comp });
    },
  },
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  padding: 10px 10px 500px;
}
</style>
