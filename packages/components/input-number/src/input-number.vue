<template>
  <div
    @dragstart.prevent
    :class="[
      'tu-input-number',
      inputNumberSize ? `el-input-number--${inputNumberSize}` : '',
      { 'is-disabled': isDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight },
    ]"
  >
    <span
      v-if="controls"
      :class="['tu-input-number__decrease', { 'is-disabled': minDisabled }]"
      role="button"
      @mousedown.prevent
      v-repeat-click="handleDecrease"
      @keydown.enter="handleDecrease"
    >
      <i :class="`tu-icon-${controlsAtRight ? 'down' : 'minus'}`"></i>
    </span>
    <span
      v-if="controls"
      :class="['tu-input-number__increase', { 'is-disabled': maxDisabled }]"
      role="button"
      @mousedown.prevent
      v-repeat-click="handleIncrease"
      @keydown.enter="handleIncrease"
    >
      <i :class="`tu-icon-${controlsAtRight ? 'up' : 'plus'}`"></i>
    </span>
    <tu-input
      ref="input"
      :value="displayValue"
      :placeholder="placeholder"
      :name="name"
      :label="label"
      :disabled="isDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      @keydown.up.native.prevent="handleIncrease"
      @keydown.down.native.prevent="handleDecrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>

<script>
import TuInput from "@packages/components/input";
import RepeatClick from "@packages/src/directives/repeat-click";
export default {
  name: "TuInputNumber",

  directives: {
    repeatClick: RepeatClick,
  },

  components: { TuInput },

  props: {
    value: {},
    disabled: Boolean,
    size: String,
    name: String,
    label: String,
    placeholder: String,
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    precision: {
      type: Number,
      validator(val) {
        return val >= 0 && val === parseInt(val, 10);
      },
    },
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      currentValue: 0,
      inputValue: null,
    };
  },

  computed: {
    displayValue() {
      if (this.inputValue !== null) return this.inputValue;
      let currentValue = this.currentValue;
      if (typeof currentValue === "undefined") currentValue = "";
      if (isNaN(currentValue)) currentValue = "";
      if (typeof currentValue === "number") {
        if (this.stepStrictly) {
          const stepPrecision = this.getPrecision(this.step);
          const precisionFactor = Math.pow(10, stepPrecision);
          currentValue =
            (Math.round(currentValue / this.step) *
              precisionFactor *
              this.step) /
            precisionFactor;
        }

        if (this.precision !== undefined) {
          currentValue = currentValue.toFixed(this.precision);
        }
      }
      return currentValue;
    },
    minDisabled() {
      return this.decrease(this.value, this.step) < this.min;
    },
    maxDisabled() {
      return this.increase(this.value, this.step) > this.max;
    },
    isDisabled() {
      return this.disabled;
    },
    inputNumberSize() {
      return this.size;
    },
    numPrecision() {
      const { value, step, getPrecision, precision } = this;
      const stepPrecision = getPrecision(step);
      if (precision !== undefined) {
        if (stepPrecision > precision) {
          console.warn(
            "[Tu-view Warn][InputNumber]precision should not be less than the decimal places of step"
          );
        }
        return precision;
      } else {
        return Math.max(getPrecision(value), stepPrecision);
      }
    },
    controlsAtRight() {
      return this.controls && this.controlsPosition === "right";
    },
  },

  watch: {
    value: {
      immediate: true,
      handler(value) {
        let newVal = value === undefined ? value : Number(value);
        if (newVal !== undefined) {
          if (isNaN(newVal)) return;
          if (this.stepStrictly) {
            const stepPrecision = this.getPrecision(this.step);
            const precisionFactor = Math.pow(10, stepPrecision);
            newVal =
              (Math.round(newVal / this.step) * precisionFactor * this.step) /
              precisionFactor;
          }
          if (this.precision !== undefined) {
            newVal = this.toPrecision(newVal, this.precision);
          }
        }
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.inputNumber = null;
        this.$emit("input", newVal);
      },
    },
  },

  mounted() {
    let innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute("role", "spinbutton");
    innerInput.setAttribute("aria-valuemax", this.max);
    innerInput.setAttribute("aria-valuemin", this.min);
    innerInput.setAttribute("aria-valuenow", this.currentValue);
    innerInput.setAttribute("aria-disabled", this.isDisabled);
  },

  updated() {
    if (!this.$refs || !this.$refs.input) return;
    const innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute("aria-valuenow", this.currentValue);
  },

  methods: {
    getPrecision(value) {
      if (value === undefined) return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },

    toPrecision(num, precision) {
      if (precision === undefined) precision = this.numPrecision;
      return parseFloat(
        Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
      );
    },

    decrease(value, step) {
      if (typeof value !== "number" && value !== undefined)
        return this.currentValue;
      //解决js 数值精度问题
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision(
        (precisionFactor * value - precisionFactor * step) / precisionFactor
      );
    },

    increase(value, step) {
      if (typeof value !== "number" && value !== undefined)
        return this.currentValue;
      const precisionFactor = Math.pow(10, this.numPrecision);
      return this.toPrecision(
        (precisionFactor * value + precisionFactor * step) / precisionFactor
      );
    },

    setCurrentValue(newVal) {
      const oldVal = this.currentValue;
      if (typeof newVal === "number" && this.precision !== undefined) {
        newVal = this.toPrecision(newVal, this.precision);
      }
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) return;
      this.inputValue = null;
      this.$emit("input", newVal);
      this.$emit("change", newVal, oldVal);
      this.currentValue = newVal;
    },

    handleDecrease() {
      if (this.isDisabled || this.minDisabled) return;
      const value = this.value || 0;
      const newValue = this.decrease(value, this.step);
      this.setCurrentValue(newValue);
    },

    handleIncrease() {
      if (this.isDisabled || this.maxDisabled) return;
      const value = this.value || 0;
      const newValue = this.increase(value, this.step);
      this.setCurrentValue(newValue);
    },

    handleBlur(evt) {
      this.$emit("blur", evt);
    },

    handleFocus(evt) {
      this.$emit("focus", evt);
    },

    handleInput(value) {
      this.inputValue = value;
    },

    handleInputChange(value) {
      const newVal = value === "" ? undefined : Number(value);
      if (!isNaN(newVal || value === "")) {
        this.setCurrentValue(newVal);
      }
      this.inputValue = null;
    },
  },
};
</script>
