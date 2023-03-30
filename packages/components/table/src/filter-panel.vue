<template>
  <transition name="tu-zoom-in-top">
    <div
      class="tu-table-filter"
      v-if="multiple"
      v-clickoutside="handleOutsideClick"
      v-show="showPopper"
    >
      <div class="tu-table-filter__content">
        <tu-scrollbar wrap-class="tu-table-filter__wrap">
          <tu-checkbox-group
            class="tu-table-filter__checkbox-group"
            v-model="filteredValue"
          >
            <tu-checkbox
              v-for="filter in filters"
              :key="filter.value"
              :label="filter.value"
              >{{ filter.text }}</tu-checkbox
            >
          </tu-checkbox-group>
        </tu-scrollbar>
      </div>
      <div class="tu-table-filter__bottom">
        <tu-button size="mini" @click="handleReset"
          >{{ t("tu.table.resetFilter") }}
        </tu-button>
        <tu-button
          type="primary"
          size="mini"
          @click="handleConfirm"
          :class="[
            'tu-table-filter__confirm-btn',
            { 'is-disabled': filteredValue.length === 0 },
          ]"
          :disabled="filteredValue.length === 0"
        >
          {{ t("tu.table.confirmFilter") }}
        </tu-button>
      </div>
    </div>
    <div
      class="tu-table-filter"
      v-else
      v-clickoutside="handleOutsideClick"
      v-show="showPopper"
    >
      <ul class="tu-table-filter__list">
        <li
          class="tu-table-filter__list-item"
          :class="{
            'is-active': filterValue === undefined || filterValue === null,
          }"
          @click="handleSelect(null)"
        >
          {{ t("tu.table.clearFilter") }}
        </li>
        <li
          class="tu-table-filter__list-item"
          v-for="filter in filters"
          :label="filter.value"
          :key="filter.value"
          :class="{ 'is-active': isActive(filter) }"
          @click="handleSelect(filter.value)"
        >
          {{ filter.text }}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import Popper from "@packages/src/utils/vue-popper";
import { PopupManager } from "@packages/src/utils/popup";
import Locale from "@packages/src/mixins/locale";
import Clickoutside from "@packages/src/utils/clickoutside";
import Dropdown from "./dropdown";

export default {
  name: "TuTableFilterPanel",

  mixins: [Popper, Locale],

  directives: {
    Clickoutside,
  },

  components: {},

  props: {
    placement: {
      type: String,
      default: "bottom-end",
    },
  },

  data() {
    return {
      table: null,
      cell: null,
      column: null,
    };
  },

  computed: {
    filters() {
      return this.column && this.column.filters;
    },

    filterValue: {
      get() {
        return (this.column.filteredValue || [])[0];
      },
      set(value) {
        if (this.filteredValue) {
          if (typeof value !== "undefined" && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      },
    },

    filteredValue: {
      get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      },
    },

    multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    },
  },

  watch: {
    showPopper(val) {
      if (
        val === true &&
        parseInt(this.popperJS._popper.style.zIndex, 10) < PopupManager.zIndex
      ) {
        this.popperJS._popper.style.zIndex = PopupManager.nextZIndex();
      }
    },
  },

  mounted() {
    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener("scroll", () => {
      this.updatePopper();
    });

    this.$watch("showPopper", (value) => {
      if (this.column) this.column.filterOpened = value;
      if (value) {
        Dropdown.open(this);
      } else {
        Dropdown.close(this);
      }
    });
  },

  methods: {
    isActive(filter) {
      return filter.value === this.filterValue;
    },

    handleOutsideClick() {
      setTimeout(() => {
        this.showPopper = false;
      }, 16);
    },

    handleConfirm() {
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },

    handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },

    handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== "undefined" && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }
      this.handleOutsideClick();
    },

    confirmFilter(filteredValue) {
      this.table.store.commit("filterChange", {
        column: this.column,
        values: filteredValue,
      });
      this.table.store.updateAllSelected();
    },
  },
};
</script>
