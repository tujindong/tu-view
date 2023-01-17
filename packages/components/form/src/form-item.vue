<template>
  <div class="tu-form-item">
    <label-wrap>
      <slot name="label">{{ label + form.labelSuffix }}</slot>
    </label-wrap>
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

  props: {
    label: String,
  },

  computed: {
    form() {
      let parent = this.$parent;
      let parentName = parent.$options.componentName;
      while (parentName !== "TuForm") {
        if (parentName === "TuFormItem") {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },
  },
};
</script>
