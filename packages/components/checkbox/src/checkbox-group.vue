<template>
  <div class="tu-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuCheckboxGroup",

  componentName: "TuCheckboxGroup",

  mixins: [Emitter],

  inject: {
    tuFormItem: {
      default: "",
    },
  },

  props: {
    value: {},
    size: String,
    border: Boolean,
    disabled: Boolean,
    min: Number,
    max: Number,
  },

  computed: {
    checkboxGroupSize() {
      return this.size;
    },
  },

  watch: {
    value(value) {
      this.dispatch("TuFormItem", "tu.form.change", [value]);
    },
  },
};
</script>

<style>
</style>