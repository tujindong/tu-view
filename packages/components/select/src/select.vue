<template>
  <div class="tu-select">
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

    <transition name="tu-zoom-in-top">
      <tu-select-dropdown
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="true"
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
import TuInput from "@packages/components/input";
import TuScrollbar from "@packages/components/scrollbar";
import TuSelectDropdown from "./select-dropdown.vue";
import TuOption from "./option.vue";
export default {
  name: "TuSelect",

  componentName: "TuSelect",

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
      options: [],
      query: "",
      selectedLabel: "",
      visible: false,
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

  methods: {
    handleFocus(evt) {
      this.visible = true;
      this.$emit("focus", evt);
    },

    handleBlur(evt) {
      this.visible = false;
      this.$emit("blur", evt);
    },

    handleComposition() {},

    handleComposition() {},

    handleComposition() {},

    handleInputClear() {},
  },
};
</script>
