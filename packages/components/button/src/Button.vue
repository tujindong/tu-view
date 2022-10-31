<template>
  <button
    class="tu-button"
    :class="[
      type ? `tu-button--${type}` : '',
      size ? `tu-button--${size}` : '',
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "tu-button",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    round: Boolean,
    circle: Boolean,
  },

  computed: {},

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

<style lang="scss"></style>
