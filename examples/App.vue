<template>
  <div class="container">
    <p>基本用法</p>
    值：{{ value }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="value"
      :data="data"
      clearable
      @change="handleTreeChange"
      filterable
      :filterMethod="filterMethod"
      node-key="value"
    />
    <br />
    <br />
    <br />
    <p>check-strictly true 可以选择任意节点</p>
    值：{{ value1 }}
    <tu-tree-select
      placeholder="请输入"
      v-model="value1"
      :data="data"
      filterable
      :check-strictly="true"
    />
    <br />
    <br />
    <br />
    <p>多选</p>
    值：{{ valueMulti }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueMulti"
      :data="data"
      multiple
      filterable
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>多选 check-strictly true 可以选择任意节点</p>
    值：{{ valueMulti1 }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueMulti1"
      :data="data"
      multiple
      filterable
      :check-strictly="true"
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>单选show-checkbox</p>
    值：{{ valueCheckbox }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueCheckbox"
      :data="data"
      show-checkbox
      filterable
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>单选show-checkbox check-strictly true 可以选择任意节点</p>
    值：{{ valueCheckbox1 }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueCheckbox1"
      :data="data"
      show-checkbox
      :check-strictly="true"
      filterable
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>多选show-checkbox</p>
    值：{{ valueCheckbox2 }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueCheckbox2"
      :data="data"
      show-checkbox
      multiple
      filterable
      @change="handleTreeChange"
    />
    <br />
    <br />
    <br />
    <p>多选show-checkbox</p>
    值：{{ valueCheckbox3 }}
    <tu-tree-select
      placeholder="请输入节点"
      v-model="valueCheckbox3"
      :data="data"
      show-checkbox
      multiple
      :check-strictly="true"
      filterable
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
    <br />
    <h2>懒加载</h2>
    值：{{ valueLazy }}
    <tu-tree-select
      :props="props"
      placeholder="请输入节点"
      v-model="valueLazy"
      :data="data"
      clearable
      @change="handleTreeChange"
      filterable
      lazy
      :filterMethod="filterMethod"
      :load="loadNode"
      node-key="value"
    />
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
              disabled: true,
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
      options: [],
      value: "3-2-1",
      value1: "2-1",
      valueMulti: ["2-1-1", "3-1-1"],
      valueMulti1: ["1-1-1"],
      valueCheckbox: "1-1-1",
      valueCheckbox1: "1-1-1",
      valueCheckbox2: ["1-1-1"],
      valueCheckbox3: ["1-1-1"],
      props: {
        label: "name",
        children: "zones",
        isLeaf: "leaf",
      },
      valueLazy: "",
    };
  },

  methods: {
    handleNodeClick(data, node, comp) {
      console.log("tree~~", { data, node, comp });
    },

    handleTreeChange(e) {
      // console.log("handleTreeChange~~", e);
    },

    filterMethod(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },

    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "主干节点" }]);
      }
      if (node.level > 10) return resolve([]);

      setTimeout(() => {
        const data = [
          {
            value: `${node.level}`,
            name: `叶子节点${node.level}`,
            leaf: true,
          },
          {
            value: `sub-${node.level}`,
            name: `分支节点${node.level}`,
          },
        ];
        console.log("data~~", data);
        resolve(data);
      }, 500);
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
