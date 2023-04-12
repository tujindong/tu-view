<template>
  <tu-popover v-bind="$attrs" v-model="visible" trigger="click">
    <div class="tu-popconfirm">
      <p class="tu-popconfirm__main">
        <i
          v-if="!hideIcon"
          :class="icon"
          class="tu-popconfirm__icon"
          :style="{ color: iconColor }"
        ></i>
        {{ title }}
      </p>
      <div class="tu-popconfirm__action">
        <tu-button size="mini" :type="cancelButtonType" @click="cancel">
          {{ displayCancelButtonText }}
        </tu-button>
        <tu-button size="mini" :type="confirmButtonType" @click="confirm">
          {{ displayConfirmButtonText }}
        </tu-button>
      </div>
    </div>
    <slot name="reference" slot="reference"></slot>
  </tu-popover>
</template>

<script>
import TuButton from "@packages/components/button";
import TuPopover from "@packages/components/popover";
import { t } from "@packages/src/locale";
export default {
  name: "TuPopconfirm",

  components: { TuButton, TuPopover },

  props: {
    title: {
      type: String,
    },
    confirmButtonText: {
      type: String,
    },
    cancelButtonText: {
      type: String,
    },
    confirmButtonType: {
      type: String,
      default: "primary",
    },
    cancelButtonType: {
      type: String,
      default: "default",
    },
    icon: {
      type: String,
      default: "tu-icon-question-circle",
    },
    iconColor: {
      type: String,
      default: "#f90",
    },
    hideIcon: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      visible: false,
    };
  },

  computed: {
    displayConfirmButtonText() {
      return this.confirmButtonText || t("tu.popconfirm.confirmButtonText");
    },
    displayCancelButtonText() {
      return this.cancelButtonText || t("tu.popconfirm.cancelButtonText");
    },
  },

  methods: {
    confirm() {
      this.visible = false;
      this.$emit("confirm");
    },
    cancel() {
      this.visible = false;
      this.$emit("cancel");
    },
  },
};
</script>

<style></style>
