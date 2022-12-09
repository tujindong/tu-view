<template>
  <div class="tu-select">
    <input
      ref="input"
      type="text"
      class="tu-select__input"
      @focus="handleFocus"
      @blur="softFocus = false"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    />
    <!-- 单选 -->
    <tu-input
      :class="{ 'is-focus': visible }"
      ref="reference"
      type="text"
      v-model="selectedLabel"
      :disabled="selectDisabled"
      :name="name"
      :id="id"
      @focus="handleFocus"
      @blur="handleBlur"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    >
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-show="!showClose"></i>
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
        <tu-scrollbar tag="ul" ref="scrollbar">
          <tu-option value=""></tu-option>
          <slot></slot>
        </tu-scrollbar>
      </tu-select-dropdown>
    </transition>
  </div>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
import TuInput from "@packages/components/input";
import TuScrollbar from "@packages/components/scrollbar";
import TuSelectDropdown from "./select-dropdown.vue";
import TuOption from "./option.vue";
import {
  addResizeListener,
  removeResizeListener,
} from "@packages/src/utils/resize-event";
export default {
  name: "TuSelect",

  componentName: "TuSelect",

  mixins: [Emitter],

  components: { TuInput, TuScrollbar, TuSelectDropdown, TuOption },

  props: {
    name: String,
    id: String,
    multiple: Boolean,
    disabled: Boolean,
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
      inputWidth: 0,
      options: [],
      query: "",
      selectedLabel: "",
      visible: false,
      softFocus: false,
    };
  },

  computed: {
    selectDisabled() {
      return this.disabled;
    },
    showClose() {
      return true;
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
  },

  mounted() {
    addResizeListener(this.$el, this.handleResize);
  },

  beforeDestroy() {
    removeResizeListener(this.$el, this.handleResize);
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

    handleInputClear() {},

    handleResize() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },

    handleMenuEnter() {},

    handleMenuLeave() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
  },
};
</script>
