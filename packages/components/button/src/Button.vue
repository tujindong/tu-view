<template>
  <button
    class="tu-button"
    :class="[
      type ? `tu-button--${type}` : '',
      size ? `tu-button--${size}` : '',
      {
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
/**
 * button 按钮
 * @description Button 按钮
 * @property {String} size: small | medium | large 按钮的大小
 */
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

