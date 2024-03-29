<template>
  <transition name="tu-zoom-in-top" @after-leave="$emit('dodestroy')">
    <div
      ref="popper"
      v-show="visible"
      class="tu-time-panel tu-popper"
      :class="popperClass"
    >
      <div
        class="tu-time-panel__content"
        :class="{
          'has-seconds': showSeconds,
          'is-arrow': useArrow,
        }"
      >
        <time-spinner
          ref="spinner"
          @change="handleChange"
          :arrow-control="useArrow"
          :show-seconds="showSeconds"
          :am-pm-mode="amPmMode"
          @select-range="setSelectionRange"
          :date="date"
        >
        </time-spinner>
      </div>
      <div class="tu-time-panel__footer">
        <tu-button
          size="mini"
          class="tu-time-panel__btn cancel"
          @click="handleCancel"
        >
          {{ t("tu.datepicker.cancel") }}
        </tu-button>
        <tu-button
          size="mini"
          type="primary"
          class="tu-time-panel__btn"
          :class="{ confirm: !disabled }"
          @click="handleConfirm()"
        >
          {{ t("tu.datepicker.confirm") }}
        </tu-button>
      </div>
    </div>
  </transition>
</template>

<script type="text/babel">
import TuButton from "@packages/components/button";
import {
  limitTimeRange,
  isDate,
  clearMilliseconds,
  timeWithinRange,
} from "@packages/src/utils/date-util";
import Locale from "@packages/src/mixins/locale";
import TimeSpinner from "../basic/time-spinner";

export default {
  mixins: [Locale],

  components: {
    TuButton,
    TimeSpinner,
  },

  props: {
    visible: Boolean,
    timeArrowControl: Boolean,
  },

  data() {
    return {
      popperClass: "",
      format: "HH:mm:ss",
      value: "",
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true,
    };
  },

  computed: {
    showSeconds() {
      return (this.format || "").indexOf("ss") !== -1;
    },
    useArrow() {
      return this.arrowControl || this.timeArrowControl || false;
    },
    amPmMode() {
      if ((this.format || "").indexOf("A") !== -1) return "A";
      if ((this.format || "").indexOf("a") !== -1) return "a";
      return "";
    },
  },

  watch: {
    visible(val) {
      if (val) {
        this.oldValue = this.value;
        this.$nextTick(() => this.$refs.spinner.emitSelectRange("hours"));
      } else {
        this.needInitAdjust = true;
      }
    },

    value(newVal) {
      let date;
      if (newVal instanceof Date) {
        date = limitTimeRange(newVal, this.selectableRange, this.format);
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }

      this.date = date;
      if (this.visible && this.needInitAdjust) {
        this.$nextTick((_) => this.adjustSpinners());
        this.needInitAdjust = false;
      }
    },

    selectableRange(val) {
      this.$refs.spinner.selectableRange = val;
    },

    defaultValue(val) {
      if (!isDate(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
  },

  mounted() {
    this.$nextTick(() => this.handleConfirm(true, true));
    this.$emit("mounted");
  },

  methods: {
    handleCancel() {
      this.$emit("pick", this.oldValue, false);
    },

    handleChange(date) {
      if (this.visible) {
        this.date = clearMilliseconds(date);
        if (this.isValidValue(this.date)) {
          this.$emit("pick", this.date, true);
        }
      }
    },

    setSelectionRange(start, end) {
      this.$emit("select-range", start, end);
      this.selectionRange = [start, end];
    },

    handleConfirm(visible = false, first) {
      if (first) return;
      const date = clearMilliseconds(
        limitTimeRange(this.date, this.selectableRange, this.format)
      );
      this.$emit("pick", date, visible, first);
    },

    handleKeydown(event) {
      const keyCode = event.keyCode;
      const mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        const step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        const step = mapping[keyCode];
        this.$refs.spinner.scrollDown(step);
        event.preventDefault();
        return;
      }
    },

    isValidValue(date) {
      return timeWithinRange(date, this.selectableRange, this.format);
    },

    adjustSpinners() {
      return this.$refs.spinner.adjustSpinners();
    },

    changeSelectionRange(step) {
      const list = [0, 3].concat(this.showSeconds ? [6] : []);
      const mapping = ["hours", "minutes"].concat(
        this.showSeconds ? ["seconds"] : []
      );
      const index = list.indexOf(this.selectionRange[0]);
      const next = (index + step + list.length) % list.length;
      this.$refs.spinner.emitSelectRange(mapping[next]);
    },
  },
};
</script>
