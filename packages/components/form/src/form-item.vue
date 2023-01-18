<template>
  <div class="tu-form-item">
    <label-wrap
      :isAutoWidth="labelStyle && labelStyle.width === 'auto'"
      :updateAll="form.labelWidth === 'auto'"
    >
      <label
        v-if="label || $slots.label"
        :for="labelFor"
        class="tu-form-item__label"
        :style="labelStyle"
      >
        <slot name="label">{{ label + form.labelSuffix }}</slot>
      </label>
    </label-wrap>
    <div class="tu-form-item__content" :style="contentStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import LabelWrap from "./label-wrap";
import emitter from "@packages/src/mixins/emitter";
import { noop, getPropByPath } from "@packages/src/utils/util";
export default {
  name: "TuFormItem",

  componentName: "TuFormItem",

  mixins: [emitter],

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
    labelWidth: String,
    prop: String,
    for: String,
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

    labelFor() {
      return this.for || this.prop;
    },

    labelStyle() {
      const ret = {};
      if (this.form.labelPosition === "top") return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      console.log("labelStyle", ret);
      return ret;
    },

    contentStyle() {
      const ret = {};
      const label = this.label;
      if (this.form.labelPosition === "top" || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      const labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth === "auto") {
        if (this.labelWidth === "auto") {
          ret.marginLeft = this.computedLabelWidth;
        } else if (this.form.labelWidth === "auto") {
          ret.marginLeft = this.tuForm.autoLabelWidth;
        }
      } else {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
  },

  mounted() {
    if (this.prop) {
      this.dispatch("TuForm", "tu.form.addField", [this]);
    }
  },

  beforeDestroy() {
    this.dispatch("TuForm", "tu.form.removeField", [this]);
  },

  methods: {
    validate(trigger, callback = noop) {
      console.log("校验 validate", trigger);
    },
  },
};
</script>
