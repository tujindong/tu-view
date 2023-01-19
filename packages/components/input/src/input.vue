<template>
  <div
    :class="[
      'tu-input',
      inputSize ? `tu-input--${inputSize}` : '',
      {
        'is-disabled': isDisabled,
        'is-exceed': isExceed,
        'tu-input--prefix': $slots.prefix || prefixIcon,
        'tu-input--suffix': $slots.suffix || suffixIcon,
      },
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <input
      ref="input"
      class="tu-input__inner"
      v-bind="$attrs"
      :tabindex="tabindex"
      :type="inputType"
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
    <span v-if="$slots.prefix || prefixIcon" class="tu-input__prefix">
      <span class="tu-input__prefix-inner">
        <span v-if="$slots.prefix" class="tu-input__icon-slot">
          <slot name="prefix"></slot>
        </span>
        <i v-if="prefixIcon" class="tu-input__icon" :class="prefixIcon"></i>
      </span>
    </span>
    <!-- 后置内容 -->
    <span class="tu-input__suffix">
      <span class="tu-input__suffix-inner">
        <i
          v-if="showClear"
          class="tu-input__icon tu-icon-close-circle-fill tu-input__hover"
          @mousedown.prevent
          @click="handleClear"
        ></i>
        <i
          v-if="showPassword"
          :class="[
            'tu-input__icon',
            `tu-icon-${isPasswordVisible ? 'eye' : 'eyeclose'}-fill`,
            'tu-input__hover',
          ]"
          @mousedown.prevent
          @click="isPasswordVisible = !isPasswordVisible"
        ></i>
        <template v-if="$slots.suffix || suffixIcon">
          <span v-if="$slots.suffix" class="tu-input__icon-slot">
            <slot name="suffix"></slot>
          </span>
          <i v-if="suffixIcon" class="tu-input__icon" :class="suffixIcon"></i>
        </template>
        <span v-if="isWordLimitVisible" class="tu-input__count">
          <span class="tu-input__count-inner">
            {{ textLength }}/{{ upperLimit }}
          </span>
        </span>
      </span>
    </span>
  </div>
</template>

<script>
import emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuInput",

  componentName: "TuInput",

  mixins: [emitter],

  inheritAttrs: false,

  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    label: String,
    tabindex: String,
    prefixIcon: String,
    suffixIcon: String,
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
    showWordLimit: {
      type: Boolean,
      default: false,
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      hovering: false,
      focused: false,
      isComposing: false,
      isPasswordVisible: false,
    };
  },

  computed: {
    inputSize() {
      return this.size;
    },
    nativeInputValue() {
      return this.value !== null || this.value !== undefined
        ? String(this.value)
        : "";
    },
    inputType() {
      return this.showPassword
        ? this.isPasswordVisible
          ? "text"
          : "password"
        : this.type;
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
    isWordLimitVisible() {
      return (
        this.showWordLimit &&
        this.$attrs.maxlength &&
        !this.isDisabled &&
        !this.readonly &&
        !this.showPassword
      );
    },
    upperLimit() {
      return this.$attrs.maxlength;
    },
    textLength() {
      return typeof this.value === "number"
        ? String(this.value).length
        : (this.value || "").length;
    },
    isExceed() {
      return this.isWordLimitVisible && this.textLength >= this.upperLimit;
    },
  },

  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
    value(val) {
      if (this.validateEvent) {
        this.dispatch("TuFormItem", "tu.form.change", val);
      }
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
      if (this.validateEvent) {
        this.dispatch("TuFormItem", "tu.form.blur", this.value);
      }
    },

    handleClear() {
      this.$emit("input", "");
      this.$emit("change", "");
    },
  },
};
</script>
