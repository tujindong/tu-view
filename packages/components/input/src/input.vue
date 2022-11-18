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
      class="tu-input__inner"
      v-bind="$attrs"
      :tabindex="tabindex"
      :type="type"
      :disabled="isDisabled"
      :readonly="readonly"
      :aria-label="label"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
      @change="handleChange"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <!-- 前置内容 -->
    <span class="tu-input__prefix"></span>
    <!-- 后置内容 -->
    <span class="tu-input__suffix">
      <span class="tu-input__suffix-inner">
        <i
          v-if="showClear"
          class="tu-input__icon tu-icon-close-circle-fill tu-input__clear"
          @mousedown.prevent
          @click="handleClear"
        ></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: "TuInput",

  componentName: "TuInput",

  inheritAttrs: false,

  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    label: String,
    tabindex: String,
    type: {
      type: String,
      default: "text",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      hovering: false,
      focused: false,
      isComposing: false,
    };
  },

  computed: {
    inputSize() {
      return this.size;
    },
    isDisabled() {
      return this.disabled;
    },
    showClear() {
      return (
        this.clearable &&
        !this.isDisabled &&
        !this.readonly &&
        this.nativeInputValue &&
        (this.focused || this.hovering)
      );
    },
    nativeInputValue() {
      return this.value !== null || this.value !== undefined
        ? String(this.value)
        : "";
    },
  },

  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
  },

  mounted() {
    this.setNativeInputValue();
  },

  methods: {
    getInput() {
      return this.$refs.input;
    },

    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },

    handleCompositionStart(evt) {
      this.$emit("compositionstart", evt);
      this.isComposing = true;
    },

    handleCompositionUpdate(evt) {
      this.$emit("compositionupdate", evt);
    },

    handleCompositionEnd(evt) {
      this.$emit("compositionend", evt);
      if (this.isComposing) {
        this.isComposing = false;
        this.handleInput(evt);
      }
    },

    handleInput(evt) {
      if (this.isComposing) return;
      this.$emit("input", evt.target.value);
      this.$nextTick(this.setNativeInputValue);
    },

    handleChange(evt) {
      this.$emit("change", evt.target.value);
    },

    handleFocus(evt) {
      this.focused = true;
      this.$emit("focus", evt);
    },

    handleBlur(evt) {
      this.focused = false;
      this.$emit("blur", evt);
    },

    handleClear() {
      this.$emit("input", "");
      this.$emit("change", "");
    },
  },
};
</script>
