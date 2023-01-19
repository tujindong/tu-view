<template>
  <div
    class="tu-form-item"
    :class="[
      {
        'tu-form-item--feedback': tuForm && tuForm.statusIcon,
        'is-error': validateState === 'error',
        'is-validating': validateState === 'validating',
        'is-success': validateState === 'success',
        'is-required': isRequired || required,
        'is-no-asterisk': tuForm && tuForm.hideRequiredAsterisk,
      },
      sizeClass ? 'tu-form-item--' + sizeClass : '',
    ]"
  >
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
      <transition name="tu-zoom-in-top">
        <slot
          v-if="validateState === 'error' && showMessage && form.showMessage"
          name="error"
          :error="validateMessage"
        >
          <div
            class="tu-form-item__error"
            :class="{
              'tu-form-item__error--inline':
                typeof inlineMessage === 'boolean'
                  ? inlineMessage
                  : (tuForm && tuForm.inlineMessage) || false,
            }"
          >
            {{ validateMessage }}
          </div>
        </slot>
      </transition>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import LabelWrap from "./label-wrap";
import emitter from "@packages/src/mixins/emitter";
import { noop, getPropByPath } from "@packages/src/utils/util";
import objectAssign from "@packages/src/utils/merge";
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
    required: {
      type: Boolean,
      default: undefined,
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: "",
    },
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
  },

  data() {
    return {
      validateState: "",
      validateMessage: "",
      validateDisabled: false,
      validator: {},
      isNested: false,
      computedLabelWidth: "",
    };
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

    isRequired() {
      let rules = this.getRules();
      let isRequired = false;

      if (rules && rules.length) {
        rules.every((rule) => {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },

    fieldValue() {
      const model = this.form.model;
      if (!model || !this.prop) {
        return;
      }

      let path = this.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }

      return getPropByPath(model, path, true).v;
    },

    _formSize() {
      return this.tuForm.size;
    },

    tuFormItemSize() {
      return this.size || this._formSize;
    },

    sizeClass() {
      return this.tuFormItemSize || (this.$ELEMENT || {}).size;
    },
  },

  watch: {
    error: {
      immediate: true,
      handler(value) {
        this.validateMessage = value;
        this.validateState = value ? "error" : "";
      },
    },
    validateStatus(value) {
      this.validateState = value;
    },
    rules(value) {
      if ((!value || value.length === 0) && this.required === undefined) {
        this.clearValidate();
      }
    },
  },

  mounted() {
    if (this.prop) {
      this.dispatch("TuForm", "tu.form.addField", [this]);

      let initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, "initialValue", {
        value: initialValue,
      });

      this.addValidateEvents();
    }
  },

  beforeDestroy() {
    this.dispatch("TuForm", "tu.form.removeField", [this]);
  },

  methods: {
    validate(trigger, callback = noop) {
      const rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }
      this.validateState = "validating";
      const descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach((rule) => {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      const validator = new AsyncValidator(descriptor);
      const model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(
        model,
        { firstFields: true },
        (errors, invalidFields) => {
          this.validateState = !errors ? "success" : "error";
          this.validateMessage = errors ? errors[0].message : "";

          callback(this.validateMessage, invalidFields);
          this.tuForm &&
            this.tuForm.$emit(
              "validate",
              this.prop,
              !errors,
              this.validateMessage || null
            );
        }
      );
    },

    getRules() {
      let formRules = this.form.rules;
      const selfRules = this.rules;
      const requiredRule =
        this.required !== undefined ? { required: !!this.required } : [];

      const prop = getPropByPath(formRules, this.prop || "");
      formRules = formRules ? prop.o[this.prop || ""] || prop.v : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },

    getFilteredRule(trigger) {
      const rules = this.getRules();
      return rules
        .filter((rule) => {
          if (!rule.trigger || trigger === "") return true;
          if (Array.isArray(rule.trigger)) {
            return rule.trigger.indexOf(trigger) > -1;
          } else {
            return rule.trigger === trigger;
          }
        })
        .map((rule) => objectAssign({}, rule));
    },

    clearValidate() {
      this.validateState = "";
      this.validateMessage = "";
      this.validateDisabled = false;
    },

    resetField() {
      this.validateState = "";
      this.validateMessage = "";

      let model = this.form.model;
      let value = this.fieldValue;
      let path = this.prop;
      if (path.indexOf(":") !== -1) {
        path = path.replace(/:/, ".");
      }

      let prop = getPropByPath(model, path, true);

      this.validateDisabled = true;
      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        prop.o[prop.k] = this.initialValue;
      }

      this.$nextTick(() => {
        this.validateDisabled = false;
      });

      this.broadcast("TuTimeSelect", "fieldReset", this.initialValue);
    },

    onFieldBlur() {
      this.validate("blur");
    },

    onFieldChange() {
      console.log("onFieldChange");
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate("change");
    },

    updateComputedLabelWidth(width) {
      this.computedLabelWidth = width ? `${width}px` : "";
    },

    addValidateEvents() {
      const rules = this.getRules();
      if (rules.length || this.required !== undefined) {
        this.$on("tu.form.blur", this.onFieldBlur);
        this.$on("tu.form.change", this.onFieldChange);
      }
    },

    removeValidateEvents() {
      this.$off();
    },
  },
};
</script>
