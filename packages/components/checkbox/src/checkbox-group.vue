<template>
  <div
    :class="['tu-checkbox-group', button ? 'is-button' : '']"
    role="group"
    aria-label="checkbox-group"
  >
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
    button: Boolean,
    disabled: Boolean,
    min: Number,
    max: Number,
  },

  computed: {
    _tuFormItemSize() {
      return (this.tuFormItem || {}).tuFormItemSize;
    },
    checkboxGroupSize() {
      return this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
    },
  },

  watch: {
    value(value) {
      this.dispatch("TuFormItem", "tu.form.change", [value]);
    },
  },

  methods: {},
};
</script>

<style></style>
