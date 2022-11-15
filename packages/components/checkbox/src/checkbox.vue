<template>
  <label
    class="tu-checkbox"
    :class="[
      border && checkboxSize ? `tu-checkbox--${checkboxSize}` : '',
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked },
      { 'is-bordered': border },
    ]"
  >
    <span class="tu-checkbox__input">
      <span class="tu-checkbox__inner"></span>
      <input
        class="tu-checkbox__original"
        type="checkbox"
        :aria-hidden="false"
        :name="name"
        :disabled="isDisabled"
        :value="label"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      />
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
    return {
      focus: false,
    };
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

    checkboxSize() {
      return this.size;
    },

    isChecked() {
      if ({}.toString.call(this.model) === "[object Boolean]") {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.model) > -1;
      }
    },

    isDisabled() {
      return this.disabled;
    },
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {
    handleChange(evt) {
      let value;
      if (evt.target.checked) {
        value = true;
      } else {
        value = false;
      }
      this.$emit("change", value, evt);
    },
  },
};
</script>
