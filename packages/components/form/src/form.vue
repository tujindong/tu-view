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

  components: {},

  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    inline: Boolean,
    labelSuffix: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      fields: [],
    };
  },

  watch: {
    rules() {
      this.fields.forEach((field) => {
        field.removeValidateEvents();
        field.addValidateEvents();
      });
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
      console.log("validate~~", this.fields);
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

    resetFields() {
      if (!this.model) {
        console.warn(
          "[TuView Warn][Form]model is required for resetFields to work."
        );
        return;
      }
    },

    deregisterLabelWidth(val) {
      console.log("注销标签宽度", val);
    },
  },
};
</script>
