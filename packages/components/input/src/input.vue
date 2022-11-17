<template>
  <div :class="['tu-input']">
    <!-- 前置元素 -->
    <div class="tu-input-group__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :tabindex="tabindex" class="tu-input__inner" type="type" />
  </div>
</template>

<script>
export default {
  name: "TuInput",

  componentName: "TuInput",

  props: {
    value: [String, Number],
    size: String,
    disabled: Boolean,
    readonly: Boolean,
    type: {
      type: String,
      default: "text",
    },
    tabindex: String,
  },

  data() {
    return {
      hovering: false,
      focused: false,
    };
  },
};
</script>
