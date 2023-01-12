<template>
  <div class="tu-form-item">
    <label-wrap></label-wrap>
    <div class="tu-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LabelWrap from "./label-wrap";
export default {
  name: "TuFormItem",

  componentName: "TuFormItem",

  provide() {
    return {
      tuFormItem: this,
    };
  },

  inject: ["tuForm"],

  components: {
    LabelWrap,
  },

  props: {},
};
</script>
