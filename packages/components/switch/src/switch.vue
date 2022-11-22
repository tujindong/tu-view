<template>
  <div
    class="tu-switch"
    :class="{ 'is-disabled': isDisabled, 'is-checked': checked }"
  >
    <div class="tu-switch__input">
      <input class="tu-switch__original" type="checkbox" />
      <span class="tu-switch__core" ref="core"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuSwitch",

  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    isDisabled() {
      return this.disabled;
    },
  },
};
</script>
