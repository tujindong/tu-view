<template>
  <div>
    <tu-input-number placeholder="请忽然" />
    <tu-tree-select
      :auto-expand-parent="true"
      :default-checked-keys="['1-1-1']"
      placeholder="请选择节点"
      :show-checkbox="true"
      :accordion="true"
      multiple
      collapseTags
      :multiple-limit="3"
      :render-after-expand="true"
      v-model="form.node"
      :data="data"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date: "",
        time: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        node: "",
      },
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
    };
  },
  methods: {
    submit() {
      console.log("submit!", this.form);
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
