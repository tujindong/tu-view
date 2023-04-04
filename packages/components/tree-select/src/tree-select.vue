<template>
  <div
    class="tu-tree-select"
    v-clickoutside="handleClose"
    @click.stop="toggleMenu"
  >
    ~~{{ value }}
    <div
      class="tu-tree-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <tu-tag
          effect="shadow"
          :size="selectSize | tagSize"
          :hit="selected[0].hitState"
          :closable="!selectDisabled"
          @close="deleteTag($event, selected[0])"
          >{{ selected[0].label }}</tu-tag
        >
        <tu-tag
          effect="shadow"
          v-if="selected.length > 1"
          :closable="false"
          :size="selectSize | tagSize"
        >
          {{ selected.length - 1 }}..
        </tu-tag>
      </span>

      <transition-group
        v-if="!collapseTags"
        name="tu-popper-in-center"
        @after-leave="resetInputHeight"
      >
        <tu-tag
          v-for="item in selected"
          effect="shadow"
          :size="selectSize | tagSize"
          :hit="item.hitState"
          :key="item.value"
          :closable="!selectDisabled"
          @close="deleteTag($event, item)"
        >
          {{ item.label }}
        </tu-tag>
      </transition-group>

      <input
        v-if="filterable"
        v-model="query"
        ref="input"
        type="text"
        class="tu-tree-select__input"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="softFocus = false"
        @keyup="managePlaceholder"
        @keydown="resetInputState"
        @keydown.down.prevent="handleNavigate('next')"
        @keydown.up.prevent="handleNavigate('prev')"
        @keydown.enter.prevent="selectOption"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="deletePrevTag"
        @keydown.tab="visible = false"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        @input="debouncedQueryChange"
        :style="{
          'flex-grow': '1',
          width: inputLength / (inputWidth - 32) + '%',
          'max-width': inputWidth - 42 + 'px',
        }"
      />
    </div>
    <tu-input
      :class="{ 'is-focus': visible }"
      ref="reference"
      type="text"
      v-model="selectedLabel"
      :name="name"
      :id="id"
      :placeholder="currentPlaceholder"
      :disabled="disabled"
      :readonly="readonly"
      :size="selectSize"
      :validate-event="false"
      :tabindex="multiple && filterable ? '-1' : null"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="debouncedOnInputChange"
      @keydown.native.down.stop.prevent="handleNavigate('next')"
      @keydown.native.up.stop.prevent="handleNavigate('prev')"
      @keydown.native.enter.prevent="selectOption"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.tab="visible = false"
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
        <i v-if="loading" class="tu-tree-select__caret tu-icon-reload"></i>
        <template v-if="!loading">
          <i
            v-show="!showClose"
            :class="[
              'tu-tree-select__caret',
              'tu-input__icon',
              `tu-icon-${iconDirection}`,
            ]"
          ></i>
          <i
            class="tu-tree-select__caret is-show-close tu-icon-close-circle-fill"
            v-if="showClose"
            @click="handleClearClick"
          ></i>
        </template>
      </template>
    </tu-input>

    <transition
      name="tu-zoom-in-top"
      @beforeEnter="handleMenuEnter"
      @afterLeave="doDestroy"
    >
      <tu-tree-select-dropdown
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible"
        :class="[selectSize ? `tu-tree-select-dropdown--${selectSize}` : '']"
      >
        <tu-scrollbar
          tag="ul"
          v-show="data.length && !loading"
          wrap-class="tu-tree-select-dropdown__wrap"
          view-class="tu-tree-select-dropdown__list"
          ref="scrollbar"
          :class="{
            'is-empty': query && filteredOptionsCount === 0,
          }"
        >
          <tu-tree
            ref="tree"
            :data="data"
            :props="defaultProps"
            :expand-on-click-node="true"
            :check-strictly="checkStrictly"
            @node-click="handleNodeClick"
          >
            <span
              slot-scope="{ node, data }"
              :class="{ 'is-selected': node.selected }"
            >
              {{ node.label }}
            </span>
          </tu-tree>
        </tu-scrollbar>
      </tu-tree-select-dropdown>
    </transition>
  </div>
</template>
<script>
import Clickoutside from "@packages/src/utils/clickoutside";
import {
  addResizeListener,
  removeResizeListener,
} from "@packages/src/utils/resize-event";
import Emitter from "@packages/src/mixins/emitter";
import { debounce } from "@packages/src/utils/throttle-debounce";
import TuTreeSelectDropdown from "./tree-select-dropdown.vue";
export default {
  name: "TuTreeSelect",

  directives: { Clickoutside },

  mixins: [Emitter],

  components: { TuTreeSelectDropdown },

  inject: {
    tuForm: {
      default: "",
    },

    tuFormItem: {
      default: "",
    },
  },

  props: {
    name: String,
    id: String,
    value: {
      required: true,
      type: [String, Array],
    },
    disabled: Boolean,
    filterable: Boolean,
    multiple: Boolean,
    loading: Boolean,
    collapseTags: Boolean,
    popperAppendToBody: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    loadingText: String,
    data: [],
    defaultProps: {},
    //当属性 check-strictly=true 时，任何节点都可以被选择，否则只有子节点可被选择。
    checkStrictly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      options: [],
      selectedLabel: "",
      visible: false,
      softFocus: false,
      currentPlaceholder: "",
      inputHovering: false,
      inputWidth: 0,
      selected: this.multiple ? [] : {},
      query: "",
      filteredOptionsCount: 0,
      cachedPlaceHolder: "",
      menuVisibleOnFocus: false,
      inputWidth: 0,
    };
  },

  computed: {
    iconDirection() {
      return this.visible ? "up is-reverse" : "up";
    },

    readonly() {
      return !this.filterable || this.multiple || !this.visible;
    },

    selectSize() {
      return this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
    },

    _tuFormItemSize() {
      return (this.tuFormItem || {}).tuFormItemSize;
    },

    showClose() {
      const hasValue =
        this.value !== undefined && this.value !== null && this.value !== "";
      return this.clearable && this.inputHovering && hasValue && !this.disabled;
    },

    propPlaceholder() {
      return typeof this.placeholder !== "undefined"
        ? this.placeholder
        : "请输入";
    },
  },

  watch: {
    propPlaceholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },

    value(val, oldVal) {
      if (this.multiple) {
        if (
          (val && val.length > 0) ||
          (this.$refs.input && this.query !== "")
        ) {
          this.currentPlaceholder = "";
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
      }
    },

    visible(val, oldVal) {
      let defaultSelect;
      if (!val) {
        this.menuVisibleOnFocus = false;
      } else {
        if (this.multiple) {
          this.resetInputHeight();
          if (oldVal) {
            defaultSelect = oldVal.filter((item) => {
              return !val.includes(item);
            });
          }
        } else {
          defaultSelect = oldVal;
        }
        this.$nextTick(() => {
          this.broadcast("TuTreeSelectDropdown", "updatePopper");
        });
      }
      this.setSelected();
      this.setDefaultSelected(defaultSelect);
    },

    options() {
      if (this.$isServer) return;
      this.$nextTick(() => {
        this.broadcast("TuTreeSelectDropdown", "updatePopper");
      });
    },
  },

  filters: {
    tagSize(size) {
      if (!size) size = "medium";
      const maps = {
        large: "medium",
        medium: "small",
        small: "mini",
      };
      return maps[size];
    },
  },

  created() {
    this.options = this.data;
    this.cachedPlaceHolder = this.currentPlaceholder = this.propPlaceholder;
    this.debouncedQueryChange = debounce(this.debounce, (e) => {
      this.handleQueryChange(e.target.value);
    });
  },

  mounted() {
    const reference = this.$refs.reference;
    addResizeListener(this.$el, this.handleResize);
    this.$nextTick(() => {
      if (reference && reference.$el) {
        this.inputWidth = reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },

  beforeDestroy() {
    if (this.$el && this.handleResize)
      removeResizeListener(this.$el, this.handleResize);
  },

  methods: {
    handleClose() {
      this.visible = false;
    },

    toggleMenu() {
      if (!this.selectDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },

    setSoftFocus() {
      this.softFocus = true;
      const input = this.$refs.input || this.$refs.reference;
      if (input) {
        input.focus();
      }
    },

    handleFocus() {},

    handleBlur() {},

    debouncedOnInputChange() {},

    handleNavigate() {},

    selectOption() {},

    handleComposition() {},

    deleteTag() {},

    managePlaceholder() {
      if (this.currentPlaceholder !== "") {
        this.currentPlaceholder = this.$refs.input.value
          ? ""
          : this.cachedPlaceHolder;
      }
    },

    resetInputState() {},

    deletePrevTag() {},

    handleQueryChange() {},

    handleResize() {},

    handleMenuEnter() {},

    doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },

    resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },

    handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },

    resetInputHeight() {},

    setSelected() {
      const tree = this.$refs.tree;
      if (this.multiple) {
      } else {
        const node = tree.getNode(this.value);
      }
    },

    setDefaultSelected(item) {
      const tree = this.$refs.tree;

      if (this.multiple) {
      } else {
        const node = tree.getNode(item);
        if (node) {
          this.$set(node, "selected", false);
        }
      }
    },

    handleNodeClick(data, node, comp) {
      console.log("handleNodeClick", { data, node, comp });
      if (this.multiple) {
        this.handleMultipSelect(data, node, comp);
      } else {
        this.handleSingleSelect(data, node, comp);
      }
      this.setSoftFocus();
    },

    handleMultipSelect(data, node, comp) {},

    handleSingleSelect(data, node, comp) {
      if (node.selected) {
        return;
      }
      if (this.value) {
        const tree = this.$refs.tree;
        const oldNode = tree.getNode(this.value);
        console.log("oldNode~~", oldNode);
        if (oldNode) {
          oldNode.selected = false;
        }
      }
      if (node.childNodes.length === 0) {
        this.selectedLabel = data.label;
        this.$set(node, "selected", true);
        this.$emit("input", data.id);
        this.visible = false;
      }
    },
  },
};
</script>
