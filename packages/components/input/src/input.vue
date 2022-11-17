<template>
  <div
    :class="[
      'tu-input',
      inputSize ? `tu-input--${inputSize}` : '',
      { 'is-disabled': isDisabled },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <input
      ref="input"
      :tabindex="tabindex"
      class="tu-input__inner"
      type="type"
      :placeholder="placeholder"
    />
    <span class="tu-input__suffix"> </span>
  </div>
</template>

<script>
export default {
  name: "TuInput",

  componentName: "TuInput",

  inheritAttrs: false,

  props: {
    placeholder: String,
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: "text",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    tabindex: String,
  },

  data() {
    return {
      hovering: false,
      focused: false,
    };
  },

  computed: {
    inputSize() {
      return this.size;
    },
    isDisabled() {
      return this.disabled;
    },
  },
};
</script>
