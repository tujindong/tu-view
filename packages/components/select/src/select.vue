<template>
  <div class="tu-select" v-clickoutside="handleClose">
    <tu-input
      :class="{ 'is-focus': visible }"
      ref="reference"
      type="text"
      v-model="selectedLabel"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :disabled="isDisabled"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
    >
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i
          v-show="!showClose"
          :class="[
            'tu-select__caret',
            'tu-input__icon',
            `tu-icon-${iconDirect}`,
          ]"
        ></i>
        <i
          class="tu-select__caret tu-icon-close-circle-fill"
          v-if="showClose"
          @mousedown.prevent
          @click="handleInputClear"
        ></i>
      </template>
    </tu-input>

    <transition
      name="tu-zoom-in-top"
      @beforeEnter="handleMenuEnter"
      @after-leave="handleMenuLeave"
    >
      <tu-select-dropdown
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible"
      >
        <tu-scrollbar
          tag="ul"
          wrap-class="tu-select-dropdown__wrap"
          view-class="tu-select-dropdown__list"
          ref="scrollbar"
        >
          <slot></slot>
        </tu-scrollbar>
      </tu-select-dropdown>
    </transition>
  </div>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
import Clickoutside from "@packages/src/utils/clickoutside";
import TuInput from "@packages/components/input";
import TuScrollbar from "@packages/components/scrollbar";
import TuSelectDropdown from "./select-dropdown.vue";
import TuOption from "./option.vue";
import {
  addResizeListener,
  removeResizeListener,
} from "@packages/src/utils/resize-event";
import { getValueByPath, valueEquals } from "@packages/src/utils/util";
export default {
  name: "TuSelect",

  componentName: "TuSelect",

  mixins: [Emitter],

  components: { TuInput, TuScrollbar, TuSelectDropdown, TuOption },

  directives: { Clickoutside },

  provide() {
    return {
      select: this,
    };
  },

  props: {
    name: String,
    id: String,
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    value: {
      required: true,
    },
    multipleLimit: {
      type: Number,
      default: 0,
    },
    placeholder: {
      type: String,
      required: false,
    },
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      options: [],
      cachedOptions: [],
      inputWidth: 0,
      query: "",
      selectedLabel: "",
      visible: false,
      softFocus: false,
      inputHovering: false,
    };
  },

  computed: {
    selectDisabled() {
      return this.disabled;
    },

    showClose() {
      const hasValue =
        this.value !== undefined && this.value !== null && this.value !== "";
      return this.clearable && this.inputHovering && hasValue;
    },

    iconDirect() {
      return this.visible ? "up is-reverse" : "up";
    },

    isDisabled() {
      return this.disabled;
    },
  },

  watch: {
    visible(val) {
      if (!val) {
        this.broadcast("TuSelectDropdown", "destroyPopper");
      } else {
        this.broadcast("TuSelectDropdown", "updatePopper");
      }
    },

    value(val, oldVal) {
      this.setSelected();
    },
  },

  created() {
    this.$on("handleOptionClick", this.handleOptionClick);
    this.$on("setSelected", this.setSelected);
  },

  mounted() {
    this.setSelected();
    addResizeListener(this.$el, this.handleResize);
  },

  beforeDestroy() {
    if (this.$el && this.handleResize) {
      removeResizeListener(this.$el, this.handleResize);
    }
  },

  methods: {
    handleFocus(evt) {
      if (!this.softFocus) {
        this.visible = true;
        this.$emit("focus", evt);
      } else {
        this.softFocus = false;
      }
    },

    blur() {
      this.visible = false;
      this.$refs.reference.blur();
    },

    handleBlur(evt) {
      setTimeout(() => {
        this.$emit("blur", evt);
      }, 50);
      this.softFocus = false;
    },

    handleComposition() {},

    handleComposition() {},

    handleComposition() {},

    handleInputClear(evt) {
      this.removeSelected(evt);
    },

    handleResize() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },

    handleMenuEnter() {},

    handleMenuLeave() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },

    handleOptionClick(option, byClick) {
      this.$emit("input", option.value);
      this.emitChange(option.value);
      this.visible = false;
    },

    handleClose() {
      this.visible = false;
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit("change", val);
      }
    },

    setSelected() {
      if (this.value) {
        const targetOption = this.options.find((i) => i.value == this.value);
        if (targetOption) {
          this.selectedLabel = targetOption.label;
        }
      } else {
        this.selectedLabel = "";
      }
    },

    removeSelected(evt) {
      evt.stopPropagation();
      const value = "";
      this.$emit("input", value);
      this.emitChange(value);
      this.visible = false;
      this.$emit("clear");
    },
  },
};
</script>
