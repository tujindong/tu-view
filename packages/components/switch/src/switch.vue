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
      <span
        v-if="($slots.activeLabel || activeLabel) && checked"
        :class="['tu-switch__label', 'tu-switch__label--left']"
      >
        <span v-if="activeLabel">{{ activeLabel }}</span>
      </span>
      <span class="tu-switch__core" ref="core"></span>
      <span
        v-if="($slots.inactiveLabel || inactiveLabel) && !checked"
        :class="['tu-switch__label', 'tu-switch__label--right']"
      >
        <span v-if="inactiveLabel">{{ inactiveLabel }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuSwitch",

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
