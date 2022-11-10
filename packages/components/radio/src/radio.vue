<template>
  <label
    class="tu-radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': model === label },
      { 'is-bordered': border },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span class="tu-radio__input">
      <span class="tu-radio__inner"></span>
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
export default {
  name: "tu-radio",

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
  },

  data() {
    return {};
  },

  computed: {
    //radio数据模型
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      },
    },
    isDisabled() {
      return this.disabled;
    },
  },

  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
      });
    },
  },
};
</script>
