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
    <i :class="icon" v-if="icon"></i>
    <template v-if="$slots.default"><slot></slot></template>
  </button>
</template>

<script>
/**
 * button 按钮
 * @description Button 按钮
 * @property {String} size: small | medium | large 按钮的大小
 * @property {Boolean} round: 是否圆角按钮
 * @property {Boolean} circle: 是否圆形按钮
 */
export default {
  name: "tu-button",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
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

