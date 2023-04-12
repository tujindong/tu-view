<template>
  <div class="tu-time-spinner" :class="{ 'has-seconds': showSeconds }">
    <template v-if="!arrowControl">
      <tu-scrollbar
        @mouseenter.native="emitSelectRange('hours')"
        @mousemove.native="adjustCurrentSpinner('hours')"
        class="tu-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tu-time-spinner__list"
        noresize
        tag="ul"
        ref="hours"
      >
        <li
          @click="handleClick('hours', { value: hour, disabled: disabled })"
          v-for="(disabled, hour) in hoursList"
          class="tu-time-spinner__item"
          :key="hour"
          :class="{ active: hour === hours, disabled: disabled }"
        >
          {{ ("0" + (amPmMode ? hour % 12 || 12 : hour)).slice(-2)
          }}{{ amPm(hour) }}
        </li>
      </tu-scrollbar>
      <tu-scrollbar
        @mouseenter.native="emitSelectRange('minutes')"
        @mousemove.native="adjustCurrentSpinner('minutes')"
        class="tu-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tu-time-spinner__list"
        noresize
        tag="ul"
        ref="minutes"
      >
        <li
          @click="handleClick('minutes', { value: key, disabled: false })"
          v-for="(enabled, key) in minutesList"
          :key="key"
          class="tu-time-spinner__item"
          :class="{ active: key === minutes, disabled: !enabled }"
        >
          {{ ("0" + key).slice(-2) }}
        </li>
      </tu-scrollbar>
      <tu-scrollbar
        v-show="showSeconds"
        @mouseenter.native="emitSelectRange('seconds')"
        @mousemove.native="adjustCurrentSpinner('seconds')"
        class="tu-time-spinner__wrapper"
        wrap-style="max-height: inherit;"
        view-class="tu-time-spinner__list"
        noresize
        tag="ul"
        ref="seconds"
      >
        <li
          @click="handleClick('seconds', { value: key, disabled: false })"
          v-for="(second, key) in 60"
          class="tu-time-spinner__item"
          :class="{ active: key === seconds }"
          :key="key"
        >
          {{ ("0" + key).slice(-2) }}
        </li>
      </tu-scrollbar>
    </template>
    <template v-if="arrowControl">
      <div
        @mouseenter="emitSelectRange('hours')"
        class="tu-time-spinner__wrapper is-arrow"
      >
        <i
          v-repeat-click="decrease"
          class="tu-time-spinner__arrow tu-icon-up"
        ></i>
        <i
          v-repeat-click="increase"
          class="tu-time-spinner__arrow tu-icon-down"
        ></i>
        <ul class="tu-time-spinner__list" ref="hours">
          <li
            class="tu-time-spinner__item"
            :class="{ active: hour === hours, disabled: hoursList[hour] }"
            v-for="(hour, key) in arrowHourList"
            :key="key"
          >
            {{
              hour === undefined
                ? ""
                : ("0" + (amPmMode ? hour % 12 || 12 : hour)).slice(-2) +
                  amPm(hour)
            }}
          </li>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('minutes')"
        class="tu-time-spinner__wrapper is-arrow"
      >
        <i
          v-repeat-click="decrease"
          class="tu-time-spinner__arrow tu-icon-up"
        ></i>
        <i
          v-repeat-click="increase"
          class="tu-time-spinner__arrow tu-icon-down"
        ></i>
        <ul class="tu-time-spinner__list" ref="minutes">
          <li
            class="tu-time-spinner__item"
            :class="{ active: minute === minutes }"
            v-for="(minute, key) in arrowMinuteList"
            :key="key"
          >
            {{ minute === undefined ? "" : ("0" + minute).slice(-2) }}
          </li>
        </ul>
      </div>
      <div
        @mouseenter="emitSelectRange('seconds')"
        class="tu-time-spinner__wrapper is-arrow"
        v-if="showSeconds"
      >
        <i
          v-repeat-click="decrease"
          class="tu-time-spinner__arrow tu-icon-up"
        ></i>
        <i
          v-repeat-click="increase"
          class="tu-time-spinner__arrow tu-icon-down"
        ></i>
        <ul class="tu-time-spinner__list" ref="seconds">
          <li
            v-for="(second, key) in arrowSecondList"
            class="tu-time-spinner__item"
            :class="{ active: second === seconds }"
            :key="key"
          >
            {{ second === undefined ? "" : ("0" + second).slice(-2) }}
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
import TuScrollbar from "@packages/components/scrollbar";
import {
  getRangeHours,
  getRangeMinutes,
  modifyTime,
} from "@packages/src/utils/date-util";
import RepeatClick from "@packages/src/directives/repeat-click";

export default {
  components: {
    TuScrollbar,
  },

  directives: {
    repeatClick: RepeatClick,
  },

  props: {
    date: {},
    defaultValue: {},
    showSeconds: {
      type: Boolean,
      default: true,
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: "",
    },
  },

  computed: {
    hours() {
      return this.date.getHours();
    },
    minutes() {
      return this.date.getMinutes();
    },
    seconds() {
      return this.date.getSeconds();
    },
    hoursList() {
      return getRangeHours(this.selectableRange);
    },
    minutesList() {
      return getRangeMinutes(this.selectableRange, this.hours);
    },
    arrowHourList() {
      const hours = this.hours;
      return [
        hours > 0 ? hours - 1 : undefined,
        hours,
        hours < 23 ? hours + 1 : undefined,
      ];
    },
    arrowMinuteList() {
      const minutes = this.minutes;
      return [
        minutes > 0 ? minutes - 1 : undefined,
        minutes,
        minutes < 59 ? minutes + 1 : undefined,
      ];
    },
    arrowSecondList() {
      const seconds = this.seconds;
      return [
        seconds > 0 ? seconds - 1 : undefined,
        seconds,
        seconds < 59 ? seconds + 1 : undefined,
      ];
    },
  },

  data() {
    return {
      selectableRange: [],
      currentScrollbar: null,
    };
  },

  mounted() {
    this.$nextTick(() => {
      !this.arrowControl && this.bindScrollEvent();
    });
  },

  methods: {
    increase() {
      this.scrollDown(1);
    },

    decrease() {
      this.scrollDown(-1);
    },

    modifyDateField(type, value) {
      switch (type) {
        case "hours":
          this.$emit(
            "change",
            modifyTime(this.date, value, this.minutes, this.seconds)
          );
          break;
        case "minutes":
          this.$emit(
            "change",
            modifyTime(this.date, this.hours, value, this.seconds)
          );
          break;
        case "seconds":
          this.$emit(
            "change",
            modifyTime(this.date, this.hours, this.minutes, value)
          );
          break;
      }
    },

    handleClick(type, { value, disabled }) {
      if (!disabled) {
        this.modifyDateField(type, value);
        this.emitSelectRange(type);
        this.adjustSpinner(type, value);
      }
    },

    emitSelectRange(type) {
      if (type === "hours") {
        this.$emit("select-range", 0, 2);
      } else if (type === "minutes") {
        this.$emit("select-range", 3, 5);
      } else if (type === "seconds") {
        this.$emit("select-range", 6, 8);
      }
      this.currentScrollbar = type;
    },

    bindScrollEvent() {
      const bindFunction = (type) => {
        this.$refs[type].wrap.onscroll = (e) => {
          this.handleScroll(type, e);
        };
      };
      bindFunction("hours");
      bindFunction("minutes");
      bindFunction("seconds");
    },

    handleScroll(type) {
      const value = Math.min(
        Math.round(
          (this.$refs[type].wrap.scrollTop -
            (this.scrollBarHeight(type) * 0.5 - 10) /
              this.typeItemHeight(type) +
            3) /
            this.typeItemHeight(type)
        ),
        type === "hours" ? 23 : 59
      );
      this.modifyDateField(type, value);
    },

    adjustSpinners() {
      this.adjustSpinner("hours", this.hours);
      this.adjustSpinner("minutes", this.minutes);
      this.adjustSpinner("seconds", this.seconds);
    },

    adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type]);
    },

    adjustSpinner(type, value) {
      if (this.arrowControl) return;
      const el = this.$refs[type].wrap;
      if (el) {
        el.scrollTop = Math.max(0, value * this.typeItemHeight(type));
      }
    },

    scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange("hours");
      }

      const label = this.currentScrollbar;
      const hoursList = this.hoursList;
      let now = this[label];

      if (this.currentScrollbar === "hours") {
        let total = Math.abs(step);
        step = step > 0 ? 1 : -1;
        let length = hoursList.length;
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length;
          if (hoursList[now]) {
            continue;
          }
          total--;
        }
        if (hoursList[now]) return;
      } else {
        now = (now + step + 60) % 60;
      }

      this.modifyDateField(label, now);
      this.adjustSpinner(label, now);
      this.$nextTick(() => this.emitSelectRange(this.currentScrollbar));
    },
    amPm(hour) {
      let shouldShowAmPm = this.amPmMode.toLowerCase() === "a";
      if (!shouldShowAmPm) return "";
      let isCapital = this.amPmMode === "A";
      let content = hour < 12 ? " am" : " pm";
      if (isCapital) content = content.toUpperCase();
      return content;
    },
    typeItemHeight(type) {
      return this.$refs[type].$el.querySelector("li").offsetHeight;
    },
    scrollBarHeight(type) {
      return this.$refs[type].$el.offsetHeight;
    },
  },
};
</script>
