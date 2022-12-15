<template>
  <div
    class="tu-select"
    v-clickoutside="handleClose"
    @click.stop="handleDropdownToggle"
  >
    <div class="tu-select__tags" v-if="multiple" ref="tags">
      <!-- 超长省略 -->
      <span v-if="collapseTags && selected.length">
        <tu-tag
          effect="shadow"
          size="small"
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
          {{ selected.length - 1 }}..</tu-tag
        >
      </span>

      <transition-group
        v-if="!collapseTags"
        name="tu-popper-in-center"
        @after-leave="adjustInputHeight"
      >
        <tu-tag
          v-for="item in selected"
          effect="shadow"
          size="small"
          :key="item.value"
          :closable="!isDisabled"
          @close.stop="handleTagDelete($event, item)"
        >
          {{ item.label }}
        </tu-tag>
      </transition-group>
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
    loading: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    size: String,
    filterMethod: Function,
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
      selectedLabel: "",
      visible: false,
      inputHovering: false,
      menuVisibleOnFocus: false,
      isOnComposition: false,
      currentPlaceholder: "",
    };
  },

  computed: {
    iconDirection() {
      return this.visible ? "up is-reverse" : "up";
    },

    isDisabled() {
      return this.disabled;
    },

    selectSize() {
      return !this.multiple ? this.size : "";
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
      return this.remote ? 300 : 0;
    },

    emptyText() {
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
      if (!val) {
        //隐藏
        this.broadcast("TuSelectDropdown", "destroyPopper");
        this.menuVisibleOnFocus = false;
        this.resetHoverIndex();
      } else {
        //显示
        this.broadcast("TuSelectDropdown", "updatePopper");
        if (this.filterable) {
          this.selectedLabel = "";
          this.currentPlaceholder =
            this.getSelected().selectedLabel || this.placeholder;
          this.query = "";
          this.handleQueryChange(this.query);
        }
      }
      this.$emit("visible-change", val);
    },

    value(val, oldVal) {
      this.setCurrentPlaceholder();
      this.setSelected();
      if (this.multiple) this.adjustInputHeight();
    },
  },

  created() {
    this.setCurrentPlaceholder();
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
          this.value && this.value.length ? "" : this.placeholder;
      } else {
        this.currentPlaceholder = this.placeholder;
      }
    },

    handleFocus(evt) {
      if (!this.visible) {
        this.menuVisibleOnFocus = true;
      }
      this.visible = true;
      this.$emit("focus", evt);
    },

    handleBlur(evt) {
      setTimeout(() => {
        this.$emit("blur", evt);
      }, 50);
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
        } else {
          value.push(option.value);
        }
        this.$emit("input", value);
        this.emitChange(value);
      } else {
        this.$emit("input", option.value);
        this.emitChange(option.value);
        this.visible = false;
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
        }
      }
    },

    handleSelectEnter() {
      if (!this.visible) {
        this.handleDropdownToggle();
      } else {
        if (this.options[this.hoverIndex]) {
          this.handleOptionClick(this.options[this.hoverIndex]);
          this.visible = false;
        }
      }
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
      if (typeof this.filterMethod === "function") this.filterMethod(val);
      this.hoverIndex = -1;
      this.filteredOptionsCount = this.optionsCount;
      this.query = val;
      this.$nextTick(() => {
        if (this.visible) this.broadcast("TuSelectDropdown", "updatePopper");
      });
      this.broadcast("TuOption", "queryChange", val);
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
  },
};
</script>
