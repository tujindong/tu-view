<template>
  <label
    class="tu-radio"
    :class="[
      (isBorder || isButton) && radioSize ? `tu-radio--${radioSize}` : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-checked': model === label },
      { 'is-bordered': isBorder },
      { 'is-button': isButton },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="tu-radio__input">
      <span v-if="!isButton" class="tu-radio__inner"></span>
      <input
        ref="radio"
        class="tu-radio__original"
        type="radio"
        aria-hidden="true"
        tabindex="-1"
        autocomplete="off"
        v-model="model"
        :value="label"
        :name="name"
        :disabled="isDisabled"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span class="tu-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuRadio",

  mixins: [Emitter],

  inject: {
    tuForm: {
      default: "",
    },
    tuFormItem: {
      default: "",
    },
  },

  props: {
    value: {},
    label: {},
    disabled: Boolean,
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
    //radio数据模型
    model: {
      get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("TuRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      },
    },

    _tuFormItemSize() {
      return (this.tuFormItem || {}).tuFormItemSize;
    },

    radioSize() {
      const temRadioSize =
        this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
      return this.isGroup
        ? this._radioGroup.radioGroupSize || temRadioSize
        : temRadioSize;
    },

    isDisabled() {
      return this.isGroup
        ? this._radioGroup.disabled ||
            this.disabled ||
            (this.tuForm || {}).disabled ||
            this.isLimitDisabled
        : this.disabled || (this.tuForm || {}).disabled;
    },

    isBorder() {
      return this.isGroup
        ? this._radioGroup.border || this.border
        : this.border;
    },

    isButton() {
      return this.isGroup
        ? this._radioGroup.button || this.button
        : this.button;
    },

    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "TuRadioGroup") {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },

    tabIndex() {
      return this.isDisabled || (this.isGroup && this.model !== this.label)
        ? -1
        : 0;
    },

    tuFormItemSize() {
      return (this.tuFormItem || {}).tuFormItemSize;
    },
  },

  watch: {},

  methods: {
    handleChange(e) {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup &&
          this.dispatch("TuRadioGroup", "handleChange", this.model);
      });
    },
  },
};
</script>
