<template>
  <el-select
    v-model="value"
    v-bind="$attrs"
    ref="select"
    @clear="handleSelectClear"
    @remove-tag="handleRemoveTag"
  >
    <el-option value="">
      <el-tree
        ref="tree"
        :data="data"
        v-on="$listeners"
        highlight-current
        @node-click="handleNodeClick"
      >
      </el-tree>
    </el-option>
  </el-select>
</template>

<script>
export default {
  name: "selectTree",
  components: {},
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      value: "",
      valueIds: [],
    };
  },
  mounted() {
    this.value = this.$attrs.multiple ? [] : "";
  },
  methods: {
    hiddenPopper() {
      this.$refs.select.blur();
    },

    handleNodeClick(data) {
      if (this.$attrs.multiple) {
        if (this.value.indexOf(data.label) > -1) return false;
        this.value.push(data.label);
        this.valueIds.push(data.id);
      } else {
        this.value = data.label;
        this.valueIds = data.id;
      }
      this.$emit("getValueIds", this.valueIds);
      this.hiddenPopper();
    },

    handleSelectClear() {
      this.$emit("input", "");
    },

    handleRemoveTag(value) {
      let fileterValue = this.value.filter((item) => item !== value);
      this.$emit("input", fileterValue);
    },
  },
};
</script>

<style scoped>
</style>