<template>
  <button
    class="tu-button"
    :disabled="buttonDisabled"
    :class="[
      type ? `tu-button--${type}` : '',
      size ? `tu-button--${size}` : '',
      {
        'is-disabled': buttonDisabled,
        'is-round': round,
        'is-circle': circle,
        'is-loading': loading,
      },
    ]"
    @click="handleClick"
  >
    <i class="tu-icon__loading tu-icon-reload" v-if="loading"></i>
    <i :class="`tu-icon-${icon}`" v-if="icon"></i>
    <template v-if="$slots.default"><slot></slot></template>
  </button>
</template>

<script>
/**
 * button 按钮
 * @description Button 按钮
 * @property {String} type: default | primary | success | info | warning | danger 按钮类型
 * @property {String} size: small | medium | large 按钮的大小
 * @property {Boolean} round: 是否圆角按钮
 * @property {Boolean} disabled: 是否禁用
 * @property {Boolean} circle: 是否圆形按钮
 */
export default {
  name: "TuButton",

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
    loading: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
  },

  computed: {
    buttonDisabled() {
      return this.disabled;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>

