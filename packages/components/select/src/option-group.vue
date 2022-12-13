<template>
  <ul class="tu-select-group__wrap" v-show="visible">
    <li class="tu-select-group__title">{{ label }}</li>
    <li>
      <ul class="tu-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";

export default {
  mixins: [Emitter],

  name: "TuOptionGroup",

  componentName: "TuOptionGroup",

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  watch: {
    disabled(val) {
      this.broadcast("TuOption", "handleGroupDisabled", val);
    },
  },

  methods: {
    queryChange() {
      this.visible =
        this.$children &&
        Array.isArray(this.$children) &&
        this.$children.some((option) => option.visible === true);
    },
  },

  created() {
    this.$on("queryChange", this.queryChange);
  },

  mounted() {
    if (this.disabled) {
      this.broadcast("TuOption", "handleGroupDisabled", this.disabled);
    }
  },
};
</script>
