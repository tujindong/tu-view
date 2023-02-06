<template>
  <transition name="tu-zoom-in-top" @after-leave="doDestroy">
    <ul
      class="tu-dropdown-menu tu-popper"
      :class="[size && `tu-dropdown-menu--${size}`]"
      v-show="showPopper"
    >
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
import Popper from "@packages/src/utils/vue-popper";

export default {
  name: "TuDropdownMenu",

  componentName: "TuDropdownMenu",

  mixins: [Popper],

  inject: ["dropdown"],

  props: {
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 0,
    },
    visibleArrow: false,
  },

  data() {
    return {
      size: this.dropdown.dropdownSize,
    };
  },

  watch: {
    "dropdown.placement": {
      immediate: true,
      handler(val) {
        this.currentPlacement = val;
      },
    },
  },

  created() {
    this.$on("updatePopper", () => {
      if (this.showPopper) this.updatePopper();
    });
    this.$on("visible", (val) => {
      this.showPopper = val;
    });
  },

  mounted() {
    this.dropdown.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.dropdown.$el;
    this.dropdown.initDomOperation();
  },
};
</script>
