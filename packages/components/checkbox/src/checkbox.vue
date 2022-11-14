<template>
  <label class="tu-checkbox">
    <span class="tu-checkbox__input">
      <span class="tu-checkbox__inner"></span>
      <input class="tu-checkbox__original" type="checkbox" />
    </span>
    <span class="tu-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "TuCheckbox",

  componentName: "TuCheckbox",

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    border: Boolean,
    size: String,
  },

  data() {
    return {};
  },

  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },

    isChecked() {
      if (Object.toString.call(this.model) === "[object Boolean]") {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.model) > -1;
      }
    },

    isDisabled() {
      return this.disabled;
    },
  },
};
</script>
