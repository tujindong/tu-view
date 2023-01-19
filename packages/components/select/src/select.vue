<template>
  <div
    class="tu-select"
    v-clickoutside="handleClose"
    @click.stop="handleDropdownToggle"
  >
    <div
      class="tu-select__tags"
      v-if="multiple"
      ref="tags"
      :style="{ 'max-width': inputWidth - 32 + 'px', width: '100%' }"
    >
      <span v-if="collapseTags && selected.length">
        <tu-tag
          effect="shadow"
          size="small"
          :hit="selected[0].hitState"
          :closable="!isDisabled"
          @close.stop="handleTagDelete($event, selected[0])"
          >{{ selected[0].label }}</tu-tag
        >
        <tu-tag
          effect="shadow"
          v-if="selected.length > 1"
          :closable="false"
          size="small"
        >
          {{ selected.length - 1 }}..
        </tu-tag>
      </span>

      <transition-group
        v-if="!collapseTags"
        name="tu-popper-in-center"
        @after-leave="adjustInputHeight"
      >
        <tu-tag
          v-for="item in selected"
          effect="shadow"
          :size="selectSize | tagSize"
          :hit="item.hitState"
          :key="item.value"
          :closable="!isDisabled"
          @close.stop="handleTagDelete($event, item)"
        >
          {{ item.label }}
        </tu-tag>
      </transition-group>

      <input
        v-if="filterable"
        v-model="query"
        ref="input"
        type="text"
        class="tu-select__input"
        :disabled="isDisabled"
        @focus="handleFocus"
        @blur="softFocus = false"
        @input="(e) => debounceInput(e.target.value)"
        @keydown="resetInputState"
        @keydown.down.stop.prevent="handleNavigate('next')"
        @keydown.up.stop.prevent="handleNavigate('prev')"
        @keydown.esc.stop.prevent="visible = false"
        @keydown.delete="handlePrevTagDelete"
        @keydown.enter.prevent="handleSelectEnter"
        @compositionstart="handleComposition"
        @compositionupdate="handleComposition"
        @compositionend="handleComposition"
        :style="{
          width: `${inputLength / inputWidth}%`,
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
      :disabled="isDisabled"
      :readonly="readonly"
      :size="selectSize"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="debounceInput"
      @mouseenter.native="inputHovering = true"
      @mouseleave.native="inputHovering = false"
      @keydown.native.down.stop.prevent="handleNavigate('next')"
      @keydown.native.up.stop.prevent="handleNavigate('prev')"
      @keydown.native.esc.stop.prevent="visible = false"
      @keydown.native.enter.prevent="handleSelectEnter"
      @compositionstart="handleComposition"
      @compositionupdate="handleComposition"
      @compositionend="handleComposition"
    >
      <template slot="prefix" v-if="$slots.prefix">
        <slot name="prefix"></slot>
      </template>
      <template slot="suffix">
        <i v-if="loading" class="tu-select__caret tu-icon-reload"></i>
        <template v-if="!loading">
          <i
            v-show="!showClose"
            :class="[
              'tu-select__caret',
              'tu-input__icon',
              `tu-icon-${iconDirection}`,
            ]"
          ></i>
          <i
            class="tu-select__caret tu-icon-close-circle-fill"
            v-if="showClose"
            @click="handleInputClear"
          ></i>
        </template>
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
        :class="[selectSize ? `tu-select-dropdown--${selectSize}` : '']"
      >
        <tu-scrollbar
          tag="ul"
          v-show="options.length && !loading"
          wrap-class="tu-select-dropdown__wrap"
          view-class="tu-select-dropdown__list"
          ref="scrollbar"
          :class="{
            'is-empty': query && filteredOptionsCount === 0,
          }"
        >
          <slot></slot>
        </tu-scrollbar>
        <!-- 空状态 -->
        <template v-if="emptyText">
          <slot name="empty" v-if="$slots.empty"></slot>
          <p class="tu-select-dropdown__empty" v-else>{{ emptyText }}</p>
        </template>
      </tu-select-dropdown>
    </transition>
  </div>
</template>

<script>
import TuInput from "@packages/components/input";
import TuScrollbar from "@packages/components/scrollbar";
import TuSelectDropdown from "./select-dropdown.vue";
import TuOption from "./option.vue";
import TuTag from "@packages/components/tag";
import Emitter from "@packages/src/mixins/emitter";
import Clickoutside from "@packages/src/utils/clickoutside";
import {
  addResizeListener,
  removeResizeListener,
} from "@packages/src/utils/resize-event";
import { valueEquals } from "@packages/src/utils/util";
import { debounce } from "@packages/src/utils/throttle-debounce";
import NavigationMixin from "./navigation-mixin";
import scrollIntoView from "@packages/src/utils/scroll-into-view";
export default {
  name: "TuSelect",

  componentName: "TuSelect",

  mixins: [Emitter, NavigationMixin],

  components: { TuInput, TuScrollbar, TuSelectDropdown, TuOption, TuTag },

  directives: { Clickoutside },

  inject: {
    tuForm: {
      default: "",
    },

    tuFormItem: {
      default: "",
    },
  },

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
    filterable: Boolean,
    remote: Boolean,
    loading: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    size: {
      type: String,
      default: "medium",
    },
    filterMethod: Function,
    remoteMethod: Function,
    collapseTags: Boolean,
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
      selected: this.multiple ? [] : {},
      query: "",
      optionsCount: 0,
      filteredOptionsCount: 0,
      inputWidth: 0,
      initialInputHeight: 0,
      hoverIndex: -1,
      inputLength: 20,
      selectedLabel: "",
      visible: false,
      inputHovering: false,
      menuVisibleOnFocus: false,
      isOnComposition: false,
      softFocus: false,
      currentPlaceholder: "",
    };
  },

  filters: {
    tagSize(size) {
      const maps = {
        large: "medium",
        medium: "small",
        small: "mini",
      };
      return maps[size] || "medium";
    },
  },

  computed: {
    iconDirection() {
      return this.visible ? "up is-reverse" : "up";
    },

    isDisabled() {
      return this.disabled;
    },

    selectSize() {
      return this.size;
    },

    readonly() {
      return !this.filterable || this.multiple || !this.visible;
    },

    showClose() {
      const hasValue =
        this.value !== undefined && this.value !== null && this.value !== "";
      return (
        this.clearable && this.inputHovering && hasValue && !this.isDisabled
      );
    },

    delayTime() {
      return 0;
    },

    emptyText() {
      if (this.loading) {
        return this.loadingText || "加载中";
      }
      if (this.options.length === 0) {
        return this.noDataText || "暂无数据";
      }
      if (
        this.filterable &&
        this.options.length &&
        this.query &&
        this.filteredOptionsCount === 0
      ) {
        return this.noMatchText || "暂无匹配数据";
      }
      return false;
    },
  },

  watch: {
    visible(val) {
      this.setSelected();
      this.query = "";
      if (!val) {
        //hide
        this.broadcast("TuSelectDropdown", "destroyPopper");
        this.menuVisibleOnFocus = false;
        this.inputLength = 20;
        this.resetHoverIndex();
      } else {
        //show
        this.broadcast("TuSelectDropdown", "updatePopper");
        if (this.filterable) {
          if (this.multiple) {
            this.$refs.input && this.$refs.input.focus();
          }
          this.selectedLabel = "";
          this.handleQueryChange(this.query);
        }
      }
      this.setCurrentPlaceholder();
      this.$emit("visible-change", val);
    },

    value(newVal, oldVal) {
      this.setSelected();
      this.setCurrentPlaceholder();
      if (this.multiple) {
        this.adjustInputHeight();
        this.query = "";
        this.handleQueryChange(this.query);
      }
      if (!valueEquals(newVal, oldVal)) {
        console.log("selectchange");
        this.dispatch("TuFormItem", "tu.form.change", newVal);
      }
    },
  },

  created() {
    this.setCurrentPlaceholder();
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit("input", []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit("input", "");
    }
    this.$on("handleOptionClick", this.handleOptionClick);
    this.$on("setSelected", this.setSelected);
    this.debounceInput = debounce(this.delayTime, (evt) =>
      this.handleQueryChange(evt)
    );
  },

  mounted() {
    this.setSelected();
    this.setInitialInputHeight();
    addResizeListener(this.$el, this.handleResize);
  },

  beforeDestroy() {
    if (this.$el && this.handleResize) {
      removeResizeListener(this.$el, this.handleResize);
    }
  },

  methods: {
    setInitialInputHeight() {
      const input = this.$refs.reference.$el.querySelector("input");
      this.initialInputHeight = input.getBoundingClientRect().height;
    },

    handleComposition(event) {
      const text = event.target.value;
      if (event.type === "compositionend") {
        this.isOnComposition = false;
        this.$nextTick((_) => this.handleQueryChange(text));
      }
    },

    scrollToOption(option) {
      const target =
        Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        const menu = this.$refs.popper.$el.querySelector(
          ".tu-select-dropdown__wrap"
        );
        scrollIntoView(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },

    setCurrentPlaceholder() {
      if (this.multiple) {
        this.currentPlaceholder =
          (this.value && this.value.length) || this.query
            ? ""
            : this.placeholder;
      } else {
        this.currentPlaceholder =
          this.getSelected().selectedLabel || this.placeholder;
      }
    },

    handleFocus(evt) {
      if (!this.softFocus) {
        if (!this.visible) {
          this.menuVisibleOnFocus = true;
        }
        this.visible = true;
        this.$emit("focus", evt);
      } else {
        this.softFocus = false;
      }
    },

    handleBlur(evt) {
      setTimeout(() => {
        this.$emit("blur", evt);
      }, 50);
      this.softFocus = false;
    },

    handleInputClear(evt) {
      this.removeSelected(evt);
    },

    handleResize() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
      if (this.multiple) this.adjustInputHeight();
    },

    adjustInputHeight() {
      this.$nextTick(() => {
        if (!this.$refs.reference) return;
        const inputChildNodes = this.$refs.reference.$el.childNodes;
        const input = [].filter.call(
          inputChildNodes,
          (item) => item.tagName === "INPUT"
        )[0];
        const tags = this.$refs.tags;
        const tagsHeight = tags
          ? Math.round(tags.getBoundingClientRect().height)
          : 0;
        input.style.height = `${Math.max(
          tags && tagsHeight > this.initialInputHeight
            ? tagsHeight + 6
            : this.initialInputHeight
        )}px`;
        if (this.visible) this.broadcast("TuSelectDropdown", "updatePopper");
      });
    },

    handleMenuEnter() {
      this.$nextTick(() => this.scrollToOption(this.selected));
    },

    handleMenuLeave() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },

    handleOptionClick(option, byClick) {
      if (this.multiple) {
        const value = [...this.value];
        const optionIndex = value.findIndex((i) => i === option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (
          this.multipleLimit <= 0 ||
          value.length < this.multipleLimit
        ) {
          value.push(option.value);
        }
        this.$emit("input", value);
        this.emitChange(value);
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit("input", option.value);
        this.emitChange(option.value);
        this.visible = false;
      }
      this.setSoftFocus();
      if (this.visible) return;
      this.$nextTick(() => {
        this.scrollToOption(option);
      });
    },

    setSoftFocus() {
      this.softFocus = true;
      const input = this.$refs.input;
      if (input) {
        input.focus();
      }
    },

    handleDropdownToggle() {
      if (!this.isDisabled) {
        if (this.menuVisibleOnFocus) {
          this.menuVisibleOnFocus = false;
        } else {
          this.visible = !this.visible;
        }
        if (this.visible) {
          this.$refs.reference.handleFocus();
          this.$refs.input && this.$refs.input.focus();
        }
      }
    },

    handleSelectEnter() {
      if (!this.visible) {
        this.handleDropdownToggle();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionClick(this.options[this.hoverIndex]);
        }
      }
    },

    handlePrevTagDelete(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        const value = [...this.value];
        value.pop();
        this.$emit("input", value);
        this.emitChange(value);
      }
    },

    resetInputState(e) {
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.adjustInputHeight();
    },

    toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      const lastOption = this.selected[this.selected.length - 1];
      if (!lastOption) return;
      if (hit === true || hit === false) {
        lastOption.hitState = hit;
        return hit;
      }
      lastOption.hitState = !lastOption.hitState;

      return lastOption.hitState;
    },

    handleClose() {
      this.visible = false;
    },

    handleNavigate(direction) {
      if (this.isOnComposition) return;
      this.navigateOptions(direction);
    },

    emitChange(val) {
      if (!valueEquals(this.value, val)) {
        this.$emit("change", val);
      }
    },

    getSelected() {
      const result = {
        selected: this.multiple ? [] : {},
        selectedLabel: "",
      };
      if (this.multiple) {
        const selected = [];
        Array.isArray(this.value) &&
          this.value.forEach((val) => {
            const targetOption = this.cachedOptions.find(
              (option) => option.value === val
            );
            targetOption && selected.push(targetOption);
          });
        result.selected = selected;
      } else {
        const targetOption = this.options.find((i) => i.value == this.value);
        if (targetOption) {
          result.selected = targetOption;
          result.selectedLabel = targetOption.label;
        }
      }
      return result;
    },

    setSelected() {
      this.selectedLabel = this.getSelected().selectedLabel;
      this.selected = this.getSelected().selected;
    },

    removeSelected(evt) {
      evt.stopPropagation();
      const value = this.multiple ? [] : "";
      this.$emit("input", value);
      this.emitChange(value);
      this.currentPlaceholder = this.placeholder;
      this.visible = false;
      this.$emit("clear");
    },

    handleQueryChange(val) {
      if (this.isOnComposition) return;
      if (this.remote && typeof this.remoteMethod === "function") {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      }
      if (typeof this.filterMethod === "function") this.filterMethod(val);
      this.filteredOptionsCount = this.optionsCount;
      this.query = val;
      this.setCurrentPlaceholder();
      this.$nextTick(() => {
        if (this.visible) this.broadcast("TuSelectDropdown", "updatePopper");
      });
      this.broadcast("TuOption", "queryChange", val);
      this.broadcast("TuOptionGroup", "queryChange");
    },

    resetHoverIndex() {
      setTimeout(() => {
        this.hoverIndex = this.options.indexOf(this.selected);
      }, 300);
    },

    handleTagDelete(evt, tag) {
      const targetIndex = this.selected.indexOf(tag);
      if (targetIndex > -1 && !this.isDisabled) {
        const value = [...this.value];
        value.splice(targetIndex, 1);
        this.$emit("input", value);
        this.emitChange(value);
        this.$emit("remove-tag", tag.value);
      }
    },

    onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
  },
};
</script>
