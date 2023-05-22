<template>
  <div
    class="tu-switch"
    :class="[
      switchSize ? `tu-switch--${switchSize}` : '',
      { 'is-disabled': isDisabled },
      { 'is-checked': checked },
    ]"
    role="switch"
    :aria-checked="checked"
    :aria-disabled="isDisabled"
    @click.prevent="handleValueSwitch"
  >
    <div class="tu-switch__input">
      <input
        ref="input"
        class="tu-switch__original"
        type="checkbox"
        :id="id"
        :name="name"
        :true-value="activeValue"
        :false-value="inactiveValue"
        :disabled="isDisabled"
        @change="handleChange"
        @keydown.enter="handleValueSwitch"
      />
      <span class="tu-switch__core" ref="core"></span>
      <span
        v-if="($slots.activeLabel || activeLabel) && checked"
        :class="['tu-switch__label', 'tu-switch__label--active']"
      >
        <span v-if="activeLabel">{{ activeLabel }}</span>
        <slot v-if="$slots.activeLabel" name="activeLabel"></slot>
      </span>
      <span
        v-if="($slots.inactiveLabel || inactiveLabel) && !checked"
        :class="['tu-switch__label', 'tu-switch__label--inactive']"
      >
        <span v-if="inactiveLabel">{{ inactiveLabel }}</span>
        <slot v-if="$slots.inactiveLabel" name="inactiveLabel"></slot>
      </span>
    </div>
  </div>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuSwitch",

  mixins: [Emitter],

  props: {
    id: String,
    size: String,
    value: {
      type: [Boolean, String, Number],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    activeLabel: String,
    inactiveLabel: String,
    activeValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
    validateEvent: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },

  computed: {
    checked() {
      return this.value === this.activeValue;
    },
    switchSize() {
      return this.size;
    },
    isDisabled() {
      return this.disabled;
    },
  },

  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
      if (this.validateEvent) {
        this.dispatch("TuFormItem", "tu.form.change", [this.value]);
      }
    },
  },

  created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit("input", this.inactiveValue);
    }
  },

  mounted() {},

  methods: {
    handleChange(evt) {
      const value = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit("input", value);
      this.$emit("change", value);
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.checked = this.checked;
        }
      });
    },
    handleValueSwitch() {
      !this.isDisabled && this.handleChange();
    },
  },
};
</script>
