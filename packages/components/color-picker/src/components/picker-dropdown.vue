<template>
  <transition name="tu-zoom-in-top" @after-leave="doDestroy">
    <div class="tu-color-dropdown" v-show="showPopper">
      <div class="tu-color-dropdown__main-wrapper">
        <hue-slider
          ref="hue"
          :color="color"
          vertical
          style="float: right"
        ></hue-slider>
        <sv-panel ref="sl" :color="color"></sv-panel>
      </div>
      <alpha-slider v-if="showAlpha" ref="alpha" :color="color"></alpha-slider>
      <predefine
        v-if="predefine"
        :color="color"
        :colors="predefine"
      ></predefine>
      <div class="tu-color-dropdown__btns">
        <span class="tu-color-dropdown__value">
          <tu-input
            v-model="customInput"
            @keyup.native.enter="handleConfirm"
            @blur="handleConfirm"
            :validate-event="false"
            size="mini"
          >
          </tu-input>
        </span>
        <tu-button
          size="mini"
          class="tu-color-dropdown__link-btn"
          @click="$emit('clear')"
        >
          {{ t("tu.colorpicker.clear") }}
        </tu-button>
        <tu-button
          type="primary"
          size="mini"
          class="tu-color-dropdown__btn"
          @click="confirmValue"
        >
          {{ t("tu.colorpicker.confirm") }}
        </tu-button>
      </div>
    </div>
  </transition>
</template>

<script>
import SvPanel from "./sv-panel";
import HueSlider from "./hue-slider";
import AlphaSlider from "./alpha-slider";
import Predefine from "./predefine";
import Popper from "@packages/src/utils/vue-popper";
import Locale from "@packages/src/mixins/locale";

export default {
  name: "tuColorPickerDropdown",

  mixins: [Popper, Locale],

  components: {
    SvPanel,
    HueSlider,
    AlphaSlider,
    Predefine,
  },

  props: {
    color: {
      required: true,
    },
    showAlpha: Boolean,
    predefine: Array,
  },

  data() {
    return {
      customInput: "",
    };
  },

  computed: {
    currentColor() {
      const parent = this.$parent;
      return !parent.value && !parent.showPanelColor ? "" : parent.color.value;
    },
  },

  watch: {
    showPopper(val) {
      if (val === true) {
        this.$nextTick(() => {
          const { sl, hue, alpha } = this.$refs;
          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    },

    currentColor: {
      immediate: true,
      handler(val) {
        this.customInput = val;
      },
    },
  },

  mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },

  methods: {
    confirmValue() {
      this.$emit("pick");
    },

    handleConfirm() {
      this.color.fromString(this.customInput);
    },
  },
};
</script>
