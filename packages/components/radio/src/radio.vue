<template>
  <label class="tu-radio">
    <span class="tu-radio__input">
      <span class="tu-radio__inner"></span>
      <input
        ref="radio"
        class="tu-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        @change="handleChange"
        :name="name"
        tabindex="-1"
        autocomplete="off"
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
    name: String,
    value: {},
    label: {},
  },
};
</script>
