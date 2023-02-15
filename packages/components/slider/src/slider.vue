<template>
  <div
    class="tu-slider"
    :class="{ 'is-vertical': vertical, 'tu-slider--with-input': showInput }"
    role="slider"
    :aria-valuemin="min"
    :aria-valuemax="max"
    :aria-orientation="vertical ? 'vertical' : 'horizontal'"
    :aria-disabled="sliderDisabled"
  >
    <tu-input-number
      v-model="firstValue"
      v-if="showInput && !range"
      class="tu-slider__input"
      ref="input"
      @change="emitChange"
      :step="step"
      :disabled="sliderDisabled"
      :controls="showInputControls"
      :min="min"
      :max="max"
      :debounce="debounce"
      :size="inputSize"
    >
    </tu-input-number>
    <div
      class="tu-slider__runway"
      :class="{ 'show-input': showInput, disabled: sliderDisabled }"
      :style="runwayStyle"
      @click="onSliderClick"
      ref="slider"
    >
      <div class="tu-slider__bar" :style="barStyle"></div>
      <slider-button
        :vertical="vertical"
        v-model="firstValue"
        :tooltip-class="tooltipClass"
        ref="button1"
      >
      </slider-button>
      <slider-button
        :vertical="vertical"
        v-model="secondValue"
        :tooltip-class="tooltipClass"
        ref="button2"
        v-if="range"
      >
      </slider-button>
      <div
        class="tu-slider__stop"
        v-for="(item, key) in stops"
        :key="key"
        :style="getStopStyle(item)"
        v-if="showStops"
      ></div>
      <template v-if="markList.length > 0">
        <div>
          <div
            v-for="(item, key) in markList"
            :style="getStopStyle(item.position)"
            class="tu-slider__stop tu-slider__marks-stop"
            :key="key"
          ></div>
        </div>
        <div class="tu-slider__marks">
          <slider-marker
            :mark="item.mark"
            v-for="(item, key) in markList"
            :key="key"
            :style="getStopStyle(item.position)"
          >
          </slider-marker>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import SliderButton from "./button.vue";
// import SliderMarker from "./marker";
import Emitter from "@packages/src/mixins/emitter";

export default {
  name: "TuSlider",

  mixins: [Emitter],

  inject: {
    tuForm: {
      default: "",
    },
  },

  components: {},

  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    value: {
      type: [Number, Array],
      default: 0,
    },
    showInput: {
      type: Boolean,
      default: false,
    },
    showInputControls: {
      type: Boolean,
      default: true,
    },
    inputSize: {
      type: String,
      default: "small",
    },
    showStops: {
      type: Boolean,
      default: false,
    },
    showTooltip: {
      type: Boolean,
      default: true,
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false,
    },
    range: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
    },
    debounce: {
      type: Number,
      default: 300,
    },
    label: {
      type: String,
    },
    tooltipClass: String,
    marks: Object,
  },

  data() {
    return {
      firstValue: null,
      secondValue: null,
      oldValue: null,
      dragging: false,
      sliderSize: 1,
    };
  },

  computed: {
    stops() {
      if (!this.showStops || this.min > this.max) return [];
      if (this.step === 0) {
        process.env.NODE_ENV !== "production" &&
          console.warn("[TuView Warn][Slider]step should not be 0.");
        return [];
      }
      const stopCount = (this.max - this.min) / this.step;
      const stepWidth = (100 * this.step) / (this.max - this.min);
      const result = [];
      for (let i = 1; i < stopCount; i++) {
        result.push(i * stepWidth);
      }
      if (this.range) {
        return result.filter((step) => {
          return (
            step < (100 * (this.minValue - this.min)) / (this.max - this.min) ||
            step > (100 * (this.maxValue - this.min)) / (this.max - this.min)
          );
        });
      } else {
        return result.filter(
          (step) =>
            step > (100 * (this.firstValue - this.min)) / (this.max - this.min)
        );
      }
    },

    markList() {
      if (!this.marks) {
        return [];
      }
      const marksKeys = Object.keys(this.marks);
      return marksKeys
        .map(parseFloat)
        .sort((a, b) => a - b)
        .filter((point) => point <= this.max && point >= this.min)
        .map((point) => ({
          point,
          position: ((point - this.min) * 100) / (this.max - this.min),
          mark: this.marks[point],
        }));
    },

    minValue() {
      return Math.min(this.firstValue, this.secondValue);
    },

    maxValue() {
      return Math.max(this.firstValue, this.secondValue);
    },

    barSize() {
      return this.range
        ? `${(100 * (this.maxValue - this.minValue)) / (this.max - this.min)}%`
        : `${(100 * (this.firstValue - this.min)) / (this.max - this.min)}%`;
    },

    barStart() {
      return this.range
        ? `${(100 * (this.minValue - this.min)) / (this.max - this.min)}%`
        : "0%";
    },

    precision() {
      let precisions = [this.min, this.max, this.step].map((item) => {
        let decimal = ("" + item).split(".")[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    },

    runwayStyle() {
      return this.vertical ? { height: this.height } : {};
    },

    barStyle() {
      return this.vertical
        ? {
            height: this.barSize,
            bottom: this.barStart,
          }
        : {
            width: this.barSize,
            left: this.barStart,
          };
    },

    sliderDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
  },

  watch: {
    value(val, oldVal) {
      if (
        this.dragging ||
        (Array.isArray(val) &&
          Array.isArray(oldVal) &&
          val.every((item, index) => item === oldVal[index]))
      ) {
        return;
      }
      this.setValues();
    },

    dragging(val) {
      if (!val) {
        this.setValues();
      }
    },

    firstValue(val) {
      if (this.range) {
        this.$emit("input", [this.minValue, this.maxValue]);
      } else {
        this.$emit("input", val);
      }
    },

    secondValue() {
      if (this.range) {
        this.$emit("input", [this.minValue, this.maxValue]);
      }
    },

    min() {
      this.setValues();
    },

    max() {
      this.setValues();
    },
  },

  mounted() {
    let valuetext;
    if (this.range) {
      if (Array.isArray(this.value)) {
        this.firstValue = Math.max(this.min, this.value[0]);
        this.secondValue = Math.min(this.max, this.value[1]);
      } else {
        this.firstValue = this.min;
        this.secondValue = this.max;
      }
      this.oldValue = [this.firstValue, this.secondValue];
      valuetext = `${this.firstValue}-${this.secondValue}`;
    } else {
      if (typeof this.value !== "number" || isNaN(this.value)) {
        this.firstValue = this.min;
      } else {
        this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
      }
      this.oldValue = this.firstValue;
      valuetext = this.firstValue;
    }
    this.$el.setAttribute("aria-valuetext", valuetext);

    this.$el.setAttribute(
      "aria-label",
      this.label ? this.label : `slider between ${this.min} and ${this.max}`
    );

    this.resetSize();
    window.addEventListener("resize", this.resetSize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.resetSize);
  },
};
</script>
