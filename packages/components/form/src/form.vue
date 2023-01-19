<template>
  <form
    class="tu-form"
    :class="[
      labelPosition ? `tu-form--label-${labelPosition}` : '',
      { 'tu-form--inline': inline },
    ]"
  >
    <slot></slot>
  </form>
</template>

<script>
import objectAssign from "@packages/src/utils/merge";

export default {
  name: "TuForm",

  componentName: "TuForm",

  provide() {
    return {
      tuForm: this,
    };
  },

  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: "",
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true,
    },
    size: String,
    disabled: Boolean,
    validateOnRuleChange: {
      type: Boolean,
      default: true,
    },
    hideRequiredAsterisk: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      fields: [],
      potentialLabelWidthArr: [],
    };
  },

  computed: {
    autoLabelWidth() {
      if (!this.potentialLabelWidthArr.length) return 0;
      const max = Math.max(...this.potentialLabelWidthArr);
      return max ? `${max}px` : "";
    },
  },

  watch: {
    rules() {
      this.fields.forEach((field) => {
        field.removeValidateEvents();
        field.addValidateEvents();
      });

      if (this.validateOnRuleChange) {
        this.validate(() => {});
      }
    },
  },

  created() {
    this.$on("tu.form.addField", (field) => {
      if (field) {
        this.fields.push(field);
      }
    });
    this.$on("tu.form.removeField", (field) => {
      if (field.prop) {
        this.fields.splice(this.fields.indexOf(field), 1);
      }
    });
  },

  methods: {
    getLabelWidthIndex(width) {
      const index = this.potentialLabelWidthArr.indexOf(width);
      if (index === -1) {
        throw new Error("[TuForm]unpected width ", width);
      }
      return index;
    },

    registerLabelWidth(val, oldVal) {
      if (val && oldVal) {
        const index = this.getLabelWidthIndex(oldVal);
        this.potentialLabelWidthArr.splice(index, 1, val);
      } else if (val) {
        this.potentialLabelWidthArr.push(val);
      }
    },

    deregisterLabelWidth(val) {
      const index = this.getLabelWidthIndex(val);
      this.potentialLabelWidthArr.splice(index, 1);
    },

    validate(callback) {
      if (!this.model) {
        console.warn(
          "[TuView Warn][Form]model is required for validate to work!"
        );
        return;
      }
      let promise;
      if (typeof callback !== "function" && window.Promise) {
        promise = new Promise((resolve, reject) => {
          callback = function (valid, invalidFields) {
            valid ? resolve(valid) : reject(invalidFields);
          };
        });
      }
      let valid = true;
      let count = 0;
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      let invalidFields = {};
      this.fields.forEach((field) => {
        field.validate("", (message, field) => {
          if (message) {
            valid = false;
          }
          invalidFields = objectAssign({}, invalidFields, field);
          if (
            typeof callback === "function" &&
            ++count === this.fields.length
          ) {
            callback(valid, invalidFields);
          }
        });
      });
      if (promise) return promise;
    },

    validateField(props, cb) {
      props = [].concat(props);
      const fields = this.fields.filter(
        (field) => props.indexOf(field.prop) !== -1
      );
      if (!fields.length) {
        console.warn("[TuView Warn]please pass correct props!");
        return;
      }

      fields.forEach((field) => {
        field.validate("", cb);
      });
    },

    resetFields() {
      if (!this.model) {
        console.warn(
          "[TuView Warn][Form]model is required for resetFields to work."
        );
        return;
      }
      this.fields.forEach((field) => {
        field.resetField();
      });
    },

    deregisterLabelWidth(val) {
      console.log("注销标签宽度", val);
    },
  },
};
</script>
