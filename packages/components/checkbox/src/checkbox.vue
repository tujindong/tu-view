<template>
  <label
    class="tu-checkbox"
    :class="[
      isBorder && checkboxSize ? `tu-checkbox--${checkboxSize}` : '',
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked },
      { 'is-bordered': isBorder },
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
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuCheckbox",

  componentName: "TuCheckbox",

  mixins: [Emitter],

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
      selfModel: false,
      focus: false,
    };
  },

  computed: {
    model: {
      get() {
        if (this.isGroup) {
          return this._checkboxGroup.value !== undefined
            ? this._checkboxGroup.value
            : this.selfModel;
        } else {
          return this.value !== undefined ? this.value : this.selfModel;
        }
      },
      set(val) {
        if (this.isGroup) {
          this.isLimitExceeded(val.length) === false &&
            this.dispatch("TuCheckboxGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.selfModel = val;
      },
    },

    checkboxSize() {
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize : this.size;
    },

    isChecked() {
      if ({}.toString.call(this.model) === "[object Boolean]") {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      }
    },

    isBorder() {
      return this.isGroup ? this._checkboxGroup.border : this.border;
    },

    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "TuCheckboxGroup") {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },

    isLimitDisabled() {
      const { max, min } = this._checkboxGroup;
      if (!!(max || min)) {
        return (
          (this.model.length >= max && !this.isChecked) ||
          (this.model.length <= min && this.isChecked)
        );
      }
    },

    isDisabled() {
      return this.isGroup
        ? this._checkboxGroup.disabled || this.isLimitDisabled
        : this.disabled;
    },
  },

  watch: {},

  created() {
    this.checked && this.addToModel();
  },

  mounted() {},

  methods: {
    isLimitExceeded(length) {
      const { min, max } = this._checkboxGroup;
      if (min !== undefined && length < min) {
        return true;
      }
      if (max !== undefined && length > max) {
        return true;
      }
      return false;
    },

    addToModel() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = true;
      }
    },

    handleChange(evt) {
      let value;
      if (evt.target.checked) {
        value = true;
      } else {
        value = false;
      }
      this.$nextTick(() => {
        if (this.isGroup) {
          this.dispatch("TuCheckboxGroup", "change", [
            this._checkboxGroup.value,
          ]);
        } else {
          this.$emit("change", value, evt);
        }
      });
    },
  },
};
</script>
