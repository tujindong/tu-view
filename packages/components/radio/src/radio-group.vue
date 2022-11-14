<template>
  <component :is="_tuTag" @keydown="handleKeydown">
    <slot></slot>
  </component>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuRadioGroup",

  componentName: "TuRadioGroup",

  mixins: [Emitter],

  props: {
    value: {},
    size: String,
    disabled: Boolean,
  },

  computed: {
    _tuTag() {
      let { tag = "" } = this.$vnode.data;
      if (!tag || tag === "component") tag = "div";
      return tag;
    },
  },

  watch: {},

  created() {
    this.$on("handleChange", (value) => {
      this.$emit("change", value);
    });
  },

  methods: {
    handleKeydown(e) {},
  },
};
</script>
