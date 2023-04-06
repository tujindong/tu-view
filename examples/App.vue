<template>
  <div class="container">
    <p>基本用法</p>
    ++{{ value }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="value"
      :data="data"
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>check-strictly true 可以选择任意节点</p>
    ++{{ value1 }}
    <tu-tree-select
      placeholder="请输入"
      v-model="value1"
      :data="data"
      :check-strictly="true"
    />
    <br />
    <br />
    <br />
    <p>多选</p>
    <p>基本用法</p>
    ++{{ value2 }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="value2"
      :data="data"
      multiple
      @change="handleTreeChange"
    />
    <br />
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
          value: "1",
          label: "一级 1",
          children: [
            {
              value: "1-1",
              label: "二级 1-1",
              children: [
                {
                  value: "1-1-1",
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          value: "2",
          label: "一级 2",
          children: [
            {
              value: "2-1",
              label: "二级 2-1",
              children: [
                {
                  value: "2-1-1",
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              value: "2-2",
              label: "二级 2-2",
              children: [
                {
                  value: "2-2-1",
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          value: "3",
          label: "一级 3",
          children: [
            {
              value: "3-1",
              label: "二级 3-1",
              children: [
                {
                  value: "3-1-1",
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              value: "3-2",
              label: "二级 3-2",
              children: [
                {
                  value: "3-2-1",
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      value: "",
      value1: "2-1",
      value2: ["2-1-1", "3-1-1"],
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
    };
  },

  methods: {
    handleNodeClick(data, node, comp) {
      console.log("tree~~", { data, node, comp });
    },

    handleTreeChange(e) {
      console.log("handleTreeChange~~", e);
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
