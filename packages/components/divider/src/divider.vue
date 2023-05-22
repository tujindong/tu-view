<template functional>
  <div
    v-bind="data.attrs"
    v-on="listeners"
    :class="[
      data.staticClass,
      'tu-divider',
      `tu-divider--${props.direction}`,
      `is-${props.contentPosition}`,
      { 'tu-divider--with-text': slots().default },
      { 'is-shadow': props.shadow },
    ]"
  >
    <div
      v-if="slots().default && props.direction !== 'vertical'"
      :class="['tu-divider__text']"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TuDivider",

  props: {
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].indexOf(val) !== -1;
      },
    },
    contentPosition: {
      type: String,
      default: "center",
      validator(val) {
        return ["left", "center", "right"].indexOf(val) !== -1;
      },
    },
    shadow: Boolean,
  },
};
</script>
