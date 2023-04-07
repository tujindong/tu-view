<template>
  <div
    class="tu-tree-select"
    v-clickoutside="handleClose"
    @click.stop="toggleMenu"
  >
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
          :key="item.data.value"
          :closable="!selectDisabled"
          @close="deleteTag($event, item)"
        >
          {{ item.data.label }}
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
            :node-key="_replaceFields['value']"
            :expand-on-click-node="!checkStrictly"
            :check-strictly="checkStrictly"
            :show-checkbox="showCheckbox"
            :default-expanded-keys="defaultExpandedKeys"
            @node-click="handleNodeClick"
            @check="handleNodeCheck"
          >
            <span
              slot-scope="{ node, data }"
              :class="{ 'is-selected': node.selected }"
            >
              {{ node[_replaceFields["label"]] }}
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
import { valueEquals } from "@packages/src/utils/util";
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
    clearable: Boolean,
    filterable: Boolean,
    multiple: Boolean,
    loading: Boolean,
    collapseTags: Boolean,
    showCheckbox: Boolean,
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
    //当属性 check-strictly=true 时，任何节点都可以被选择，否则只有叶子节点可被选择。
    checkStrictly: {
      type: Boolean,
      default: false,
    },
    replaceFields: Object,
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
      defaultExpandedKeys: [],
    };
  },

  computed: {
    selectDisabled() {
      return this.disabled;
    },

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

    _replaceFields() {
      return {
        children: "children",
        value: "value",
        label: "label",
        ...this.replaceFields,
      };
    },
  },

  watch: {
    propPlaceholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },

    value(val, oldVal) {
      if (this.multiple) {
        this.$nextTick(() => {
          this.resetInputHeight();
          this.broadcast("TuTreeSelectDropdown", "updatePopper");
        });
        if (
          (val && val.length > 0) ||
          (this.$refs.input && this.query !== "")
        ) {
          this.currentPlaceholder = "";
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
      }
      this.setOldSelected(oldVal);
      this.setSelected();
    },

    visible(val, oldVal) {
      if (!val) {
        this.menuVisibleOnFocus = false;
      } else {
        if (this.multiple) {
          this.resetInputHeight();
        } else {
        }
        this.$nextTick(() => {
          this.broadcast("TuTreeSelectDropdown", "updatePopper");
        });
      }
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
    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = "";
    }
    addResizeListener(this.$el, this.handleResize);
    const reference = this.$refs.reference;
    if (reference && reference.$el) {
      const sizeMap = {
        medium: 36,
        small: 32,
        mini: 28,
      };
      const input = reference.$el.querySelector("input");
      this.initialInputHeight =
        input.getBoundingClientRect().height || sizeMap[this.selectSize];
    }
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

    handleClearClick(event) {
      event.stopPropagation();
      const value = this.multiple ? [] : "";
      this.$emit("input", value);
      this.emitChange(value);
      this.visible = false;
      this.$emit("clear");
    },

    deleteTag(event, node) {
      event.stopPropagation();
      this.handleMultipSelect(node.data, node);
    },

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

    handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },

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

    resetInputHeight() {
      if (this.collapseTags && !this.filterable) return;
      this.$nextTick(() => {
        if (!this.$refs.reference) return;
        let inputChildNodes = this.$refs.reference.$el.childNodes;
        let input = [].filter.call(
          inputChildNodes,
          (item) => item.tagName === "INPUT"
        )[0];
        const tags = this.$refs.tags;
        const tagsHeight = tags
          ? Math.round(tags.getBoundingClientRect().height)
          : 0;
        const sizeInMap = this.initialInputHeight || 40;
        input.style.height =
          this.selected.length === 0
            ? sizeInMap + "px"
            : Math.max(
                tags ? tagsHeight + (tagsHeight > sizeInMap ? 6 : 0) : 0,
                sizeInMap
              ) + "px";
        if (this.visible && this.emptyText !== false) {
          this.broadcast("TuTreeSelectDropdown", "updatePopper");
        }
      });
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit("change", val);
      }
    },

    setSelected() {
      console.log("setSelected");
      const tree = this.$refs.tree;
      //单选
      if (!this.multiple) {
        const node = tree.getNode(this.value);
        if (node) {
          this.$set(node, "selected", true);
          this.selected = node;
          this.selectedLabel = node.label;
        }
      } else {
        //多选
        const selected = [];
        if (Array.isArray(this.value)) {
          this.value.forEach((val) => {
            const node = tree.getNode(val);
            if (node) {
              this.$set(node, "selected", true);
              selected.push(node);
            }
          });
        }
        this.selected = selected;
      }
    },

    setOldSelected(oldVal) {
      console.log("setOldSelected", oldVal);
      const tree = this.$refs.tree;
      if (this.multiple) {
      } else {
        const oldNode = tree.getNode(oldVal);
        if (oldNode) {
          this.$set(oldNode, "selected", false);
        }
      }
    },

    findNode(tree, func) {
      if (tree.isLeaf) return tree;
      for (const node of tree.childNodes) {
        if (func(node)) return node;
        if (node.childNodes && node.childNodes.length) {
          const res = this.findNode(node, func);
          if (res) return res;
        }
      }
      return null;
    },

    handleNodeCheck(data, state, node) {
      console.log(
        "handleNodeCheck",
        { data, state, node },
        "value~",
        this.value
      );
      // debugger;
      const tree = this.$refs.tree;
      const { value, label } = this._replaceFields;
      if (this.multiple) {
        //多选
        this.$emit("input", state.checkedKeys);
      } else {
        //单选
        if (this.checkStrictly) {
        } else {
          // select first leaf node when check parent
          const firstLeafNode = this.findNode(node, (node) => node.isLeaf);
          console.log("firstLeafNode", firstLeafNode.data.value);
          let currentValue = "";
          let currentLabel = "";
          if (
            firstLeafNode.checked &&
            !this.findNode(node, (node) => node.data[value] === this.value)
          ) {
            currentLabel = firstLeafNode.data[label];
            currentValue = firstLeafNode.data[value];
            this.$set(firstLeafNode, "selected", true);
          }
          tree.setCheckedKeys([currentValue]);
          this.selectedLabel = currentLabel;
          this.$emit("input", currentValue);
          this.emitChange(currentValue);
        }
      }
    },

    handleNodeClick(data, node, comp) {
      // console.log("handleNodeClick", { data, node, comp });
      if (this.showCheckbox || node.disabled) return;
      if (!this.checkStrictly && node.childNodes.length !== 0) return;
      if (this.multiple) {
        this.handleMultipSelect(data, node, comp);
      } else {
        this.handleSingleSelect(data, node, comp);
      }
      this.setSoftFocus();
    },

    handleMultipSelect(data, node) {
      const currentValue = (this.value || []).slice();
      const selected = (this.selected || []).slice();
      const { value } = this._replaceFields;
      const index = currentValue.indexOf(data[value]);
      if (index === -1) {
        selected.push(node);
        currentValue.push(data[value]);
        this.$set(node, "selected", true);
        this.$set(node, "hitState", false);
      } else {
        selected.splice(index, 1);
        currentValue.splice(index, 1);
        this.$set(node, "selected", false);
      }
      this.selected = selected;
      this.$emit("input", currentValue);
    },

    handleSingleSelect(data, node) {
      if (node.selected) return;
      const { value, label } = this._replaceFields;
      this.selectedLabel = data[label];
      this.$set(node, "selected", true);
      this.$emit("input", data[value]);
      this.emitChange(data[value]);
      this.visible = false;
    },
  },
};
</script>
