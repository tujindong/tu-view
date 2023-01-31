<template>
  <transition
    name="tu-zoom-in-top"
    @after-enter="handleEnter"
    @after-leave="handleLeave"
  >
    <div
      ref="popper"
      v-show="visible"
      class="tu-picker-panel tu-date-picker tu-popper"
      :class="[
        {
          'has-sidebar': $slots.sidebar || shortcuts,
          'has-time': showTime,
        },
        popperClass,
      ]"
    >
      <div class="tu-picker-panel__body-wrapper">
        <slot name="sidebar" class="tu-picker-panel__sidebar"></slot>
        <div class="tu-picker-panel__sidebar" v-if="shortcuts">
          <button
            class="tu-picker-panel__shortcut"
            v-for="(shortcut, key) in shortcuts"
            :key="key"
            @click="handleShortcutClick(shortcut)"
          >
            {{ shortcut.text }}
          </button>
        </div>
        <div class="tu-picker-panel__body">
          <div class="tu-date-picker__time-header" v-if="showTime">
            <span class="tu-date-picker__editor-wrap">
              <tu-input
                :placeholder="t('tu.datepicker.selectDate')"
                :value="visibleDate"
                size="small"
                @input="(val) => (userInputDate = val)"
                @change="handleVisibleDateChange"
              />
            </span>
            <span
              class="tu-date-picker__editor-wrap"
              v-clickoutside="handleTimePickClose"
            >
              <tu-input
                ref="input"
                @focus="timePickerVisible = true"
                :placeholder="t('tu.datepicker.selectTime')"
                :value="visibleTime"
                size="small"
                @input="(val) => (userInputTime = val)"
                @change="handleVisibleTimeChange"
              />
              <time-picker
                ref="timepicker"
                :time-arrow-control="arrowControl"
                @pick="handleTimePick"
                :visible="timePickerVisible"
                @mounted="proxyTimePickerDataProperties"
              >
              </time-picker>
            </span>
          </div>
          <div
            class="tu-date-picker__header"
            :class="{
              'tu-date-picker__header--bordered':
                currentView === 'year' || currentView === 'month',
            }"
            v-show="currentView !== 'time'"
          >
            <button
              type="button"
              @click="prevYear"
              :aria-label="t(`tu.datepicker.prevYear`)"
              class="
                tu-picker-panel__icon-btn
                tu-date-picker__prev-btn
                tu-icon-doubleleft
              "
            ></button>
            <button
              type="button"
              @click="prevMonth"
              v-show="currentView === 'date'"
              :aria-label="t(`tu.datepicker.prevMonth`)"
              class="
                tu-picker-panel__icon-btn
                tu-date-picker__prev-btn
                tu-icon-left
              "
            ></button>
            <span
              @click="showYearPicker"
              role="button"
              class="tu-date-picker__header-label"
              >{{ yearLabel }}</span
            >
            <span
              @click="showMonthPicker"
              v-show="currentView === 'date'"
              role="button"
              class="tu-date-picker__header-label"
              :class="{ active: currentView === 'month' }"
              >{{ t(`tu.datepicker.month${month + 1}`) }}</span
            >
            <button
              type="button"
              @click="nextYear"
              :aria-label="t(`tu.datepicker.nextYear`)"
              class="
                tu-picker-panel__icon-btn
                tu-date-picker__next-btn
                tu-icon-doubleright
              "
            ></button>
            <button
              type="button"
              @click="nextMonth"
              v-show="currentView === 'date'"
              :aria-label="t(`tu.datepicker.nextMonth`)"
              class="
                tu-picker-panel__icon-btn
                tu-date-picker__next-btn
                tu-icon-right
              "
            ></button>
          </div>

          <div class="tu-picker-panel__content">
            <date-table
              v-show="currentView === 'date'"
              @pick="handleDatePick"
              :selection-mode="selectionMode"
              :first-day-of-week="firstDayOfWeek"
              :value="value"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :cell-class-name="cellClassName"
              :disabled-date="disabledDate"
            >
            </date-table>
            <year-table
              v-show="currentView === 'year'"
              @pick="handleYearPick"
              :selection-mode="selectionMode"
              :value="value"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate"
            >
            </year-table>
            <month-table
              v-show="currentView === 'month'"
              @pick="handleMonthPick"
              :selection-mode="selectionMode"
              :value="value"
              :default-value="defaultValue ? new Date(defaultValue) : null"
              :date="date"
              :disabled-date="disabledDate"
            >
            </month-table>
          </div>
        </div>
      </div>

      <div
        class="tu-picker-panel__footer"
        v-show="
          footerVisible &&
          (currentView === 'date' ||
            currentView === 'month' ||
            currentView === 'year')
        "
      >
        <tu-button
          size="mini"
          type="text"
          class="tu-picker-panel__link-btn"
          @click="changeToNow"
          v-show="
            selectionMode !== 'dates' &&
            selectionMode !== 'months' &&
            selectionMode !== 'years'
          "
        >
          {{ t("tu.datepicker.now") }}
        </tu-button>
        <tu-button
          plain
          size="mini"
          class="tu-picker-panel__link-btn"
          @click="confirm"
        >
          {{ t("tu.datepicker.confirm") }}
        </tu-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
import {
  formatDate,
  parseDate,
  getWeekNumber,
  isDate,
  modifyDate,
  modifyTime,
  modifyWithTimeString,
  clearMilliseconds,
  clearTime,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  changeYearMonthAndClampDate,
  extractDateFormat,
  extractTimeFormat,
  timeWithinRange,
} from "@packages/src/utils/date-util";
import { getBackground } from "@packages/src/utils/get-background";
import Clickoutside from "@packages/src/utils/clickoutside";
import Locale from "@packages/src/mixins/locale";
// import TimePicker from "./time";
import DateTable from "../basic/date-table";
import MonthTable from "../basic/month-table";
import YearTable from "../basic/year-table";

export default {
  mixins: [Locale],

  directives: { Clickoutside },

  components: { DateTable, MonthTable, YearTable },

  data() {
    return {
      popperClass: "",
      date: new Date(),
      value: "",
      defaultValue: null,
      defaultTime: null,
      showTime: false,
      selectionMode: "day",
      shortcuts: "",
      visible: false,
      currentView: "date",
      disabledDate: "",
      cellClassName: "",
      selectableRange: [],
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: false,
      format: "",
      arrowControl: false,
      userInputDate: null,
      userInputTime: null,
    };
  },

  computed: {
    year() {
      return this.date.getFullYear();
    },

    month() {
      return this.date.getMonth();
    },

    week() {
      return getWeekNumber(this.date);
    },

    monthDate() {
      return this.date.getDate();
    },

    footerVisible() {
      return (
        this.showTime ||
        this.selectionMode === "dates" ||
        this.selectionMode === "months" ||
        this.selectionMode === "years"
      );
    },

    visibleTime() {
      if (this.userInputTime !== null) {
        return this.userInputTime;
      } else {
        return formatDate(this.value || this.defaultValue, this.timeFormat);
      }
    },

    visibleDate() {
      if (this.userInputDate !== null) {
        return this.userInputDate;
      } else {
        return formatDate(this.value || this.defaultValue, this.dateFormat);
      }
    },

    yearLabel() {
      const yearTranslation = this.t("tu.datepicker.year");
      if (this.currentView === "year") {
        const startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return (
            startYear +
            " " +
            yearTranslation +
            " - " +
            (startYear + 9) +
            " " +
            yearTranslation
          );
        }
        return startYear + " - " + (startYear + 9);
      }
      return this.year + " " + yearTranslation;
    },

    timeFormat() {
      if (this.format) {
        return extractTimeFormat(this.format);
      } else {
        return "HH:mm:ss";
      }
    },

    dateFormat() {
      if (this.format) {
        return extractDateFormat(this.format);
      } else {
        return "yyyy-MM-dd";
      }
    },
  },

  watch: {
    showTime(val) {
      if (!val) return;
      this.$nextTick(() => {
        const inputElm = this.$refs.input.$el;
        if (inputElm) {
          this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
        }
      });
    },

    value(val) {
      if (this.selectionMode === "dates" && this.value) return;
      if (this.selectionMode === "months" && this.value) return;
      if (this.selectionMode === "years" && this.value) return;
      if (isDate(val)) {
        this.date = new Date(val);
      } else {
        this.date = this.getDefaultValue();
      }
    },

    defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },

    timePickerVisible(val) {
      if (val) this.$nextTick(() => this.$refs.timepicker.adjustSpinners());
    },

    selectionMode(newVal) {
      if (newVal === "month") {
        if (this.currentView !== "year" || this.currentView !== "month") {
          this.currentView = "month";
        }
      } else if (newVal === "dates") {
        this.currentView = "date";
      } else if (newVal === "years") {
        this.currentView = "year";
      } else if (newVal === "months") {
        this.currentView = "month";
      }
    },
  },

  mounted() {},

  methods: {
    proxyTimePickerDataProperties() {
      const format = (timeFormat) => {
        this.$refs.timepicker.format = timeFormat;
      };
      const value = (value) => {
        this.$refs.timepicker.value = value;
      };
      const date = (date) => {
        this.$refs.timepicker.date = date;
      };
      const selectableRange = (selectableRange) => {
        this.$refs.timepicker.selectableRange = selectableRange;
      };

      this.$watch("value", value);
      this.$watch("date", date);
      this.$watch("selectableRange", selectableRange);

      format(this.timeFormat);
      value(this.value);
      date(this.date);
      selectableRange(this.selectableRange);
    },

    handleClear() {
      this.date = this.getDefaultValue();
      this.$emit("pick", null);
    },

    emit(value, ...args) {
      if (!value) {
        this.$emit("pick", value, ...args);
      } else if (Array.isArray(value)) {
        const dates = value.map((date) =>
          this.showTime ? clearMilliseconds(date) : clearTime(date)
        );
        this.$emit("pick", dates, ...args);
      } else {
        this.$emit(
          "pick",
          this.showTime ? clearMilliseconds(value) : clearTime(value),
          ...args
        );
      }
      this.userInputDate = null;
      this.userInputTime = null;
    },

    showMonthPicker() {
      this.currentView = "month";
    },

    showYearPicker() {
      this.currentView = "year";
    },

    prevMonth() {
      this.date = prevMonth(this.date);
    },

    nextMonth() {
      this.date = nextMonth(this.date);
    },

    prevYear() {
      if (this.currentView === "year") {
        this.date = prevYear(this.date, 10);
      } else {
        this.date = prevYear(this.date);
      }
    },

    nextYear() {
      if (this.currentView === "year") {
        this.date = nextYear(this.date, 10);
      } else {
        this.date = nextYear(this.date);
      }
    },

    handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },

    handleTimePick(value, visible, first) {
      if (isDate(value)) {
        const newDate = this.value
          ? modifyTime(
              this.value,
              value.getHours(),
              value.getMinutes(),
              value.getSeconds()
            )
          : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },

    handleTimePickClose() {
      this.timePickerVisible = false;
    },

    handleMonthPick(month) {
      if (this.selectionMode === "month") {
        this.date = modifyDate(this.date, this.year, month, 1);
        this.emit(this.date);
      } else if (this.selectionMode === "months") {
        this.emit(month, true);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, this.year, month);
        this.currentView = "date";
      }
    },

    handleDatePick(value) {
      if (this.selectionMode === "day") {
        let newDate = this.value
          ? modifyDate(
              this.value,
              value.getFullYear(),
              value.getMonth(),
              value.getDate()
            )
          : modifyWithTimeString(value, this.defaultTime);
        if (!this.checkDateWithinRange(newDate)) {
          newDate = modifyDate(
            this.selectableRange[0][0],
            value.getFullYear(),
            value.getMonth(),
            value.getDate()
          );
        }
        this.date = newDate;
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === "week") {
        this.emit(value.date);
      } else if (this.selectionMode === "dates") {
        this.emit(value, true);
      }
    },

    handleYearPick(year) {
      if (this.selectionMode === "year") {
        this.date = modifyDate(this.date, year, 0, 1);
        this.emit(this.date);
      } else if (this.selectionMode === "years") {
        this.emit(year, true);
      } else {
        this.date = changeYearMonthAndClampDate(this.date, year, this.month);
        this.currentView = "month";
      }
    },

    changeToNow() {
      if (
        (!this.disabledDate || !this.disabledDate(new Date())) &&
        this.checkDateWithinRange(new Date())
      ) {
        this.date = new Date();
        this.emit(this.date);
      }
    },

    confirm() {
      if (
        this.selectionMode === "dates" ||
        this.selectionMode === "months" ||
        this.selectionMode === "years"
      ) {
        this.emit(this.value);
      } else {
        const value = this.value
          ? this.value
          : modifyWithTimeString(this.getDefaultValue(), this.defaultTime);
        this.date = new Date(value);
        this.emit(value);
      }
    },

    resetView() {
      if (this.selectionMode === "month" || this.selectionMode === "months") {
        this.currentView = "month";
      } else if (
        this.selectionMode === "year" ||
        this.selectionMode === "years"
      ) {
        this.currentView = "year";
      } else {
        this.currentView = "date";
      }
    },

    handleEnter() {
      document.body.addEventListener("keydown", this.handleKeydown);
    },

    handleLeave() {
      this.$emit("dodestroy");
      document.body.removeEventListener("keydown", this.handleKeydown);
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;
      const list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (
          keyCode === 13 &&
          this.userInputDate === null &&
          this.userInputTime === null
        ) {
          // Enter
          this.emit(this.date, false);
        }
      }
    },

    handleKeyControl(keyCode) {
      const mapping = {
        year: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setFullYear(date.getFullYear() + step),
        },
        month: {
          38: -4,
          40: 4,
          37: -1,
          39: 1,
          offset: (date, step) => date.setMonth(date.getMonth() + step),
        },
        week: {
          38: -1,
          40: 1,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step * 7),
        },
        day: {
          38: -7,
          40: 7,
          37: -1,
          39: 1,
          offset: (date, step) => date.setDate(date.getDate() + step),
        },
      };
      const mode = this.selectionMode;
      const year = 3.1536e10;
      const now = this.date.getTime();
      const newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        const map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (
          typeof this.disabledDate === "function" &&
          this.disabledDate(newDate)
        ) {
          continue;
        }
        this.date = newDate;
        this.$emit("pick", newDate, true);
        break;
      }
    },

    handleVisibleTimeChange(value) {
      const time = parseDate(value, this.timeFormat);
      if (time && this.checkDateWithinRange(time)) {
        this.date = modifyDate(time, this.year, this.month, this.monthDate);
        this.userInputTime = null;
        this.$refs.timepicker.value = this.date;
        this.timePickerVisible = false;
        this.emit(this.date, true);
      }
    },

    handleVisibleDateChange(value) {
      const date = parseDate(value, this.dateFormat);
      if (date) {
        if (
          typeof this.disabledDate === "function" &&
          this.disabledDate(date)
        ) {
          return;
        }
        this.date = modifyTime(
          date,
          this.date.getHours(),
          this.date.getMinutes(),
          this.date.getSeconds()
        );
        this.userInputDate = null;
        this.resetView();
        this.emit(this.date, true);
      }
    },

    isValidValue(value) {
      return (
        value &&
        !isNaN(value) &&
        (typeof this.disabledDate === "function"
          ? !this.disabledDate(value)
          : true) &&
        this.checkDateWithinRange(value)
      );
    },

    getDefaultValue() {
      return this.defaultValue ? new Date(this.defaultValue) : new Date();
    },

    checkDateWithinRange(date) {
      return this.selectableRange.length > 0
        ? timeWithinRange(date, this.selectableRange, this.format || "HH:mm:ss")
        : true;
    },

    setBackground(el) {
      const background = getBackground(el);
      this.$refs.popper.style.background = background;
    },
  },
};
</script>
