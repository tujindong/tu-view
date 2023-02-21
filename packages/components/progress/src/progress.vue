import { getBackground } from '@packages/src/utils/get-background';
<template>
  <div
    class="tu-progress"
    :class="[
      'tu-progress--' + type,
      status ? 'is-' + status : '',
      {
        'tu-progress--without-text': !showText,
        'tu-progress--text-inside': textInside,
      },
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100"
    ref="progress"
  >
    <div class="tu-progress-bar" v-if="type === 'line'">
      <div
        class="tu-progress-bar__outer"
        :style="{ height: strokeWidth + 'px' }"
      >
        <div class="tu-progress-bar__inner" :style="barStyle">
          <div class="tu-progress-bar__innerText" v-if="showText && textInside">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="tu-progress-circle"
      :style="{ height: width + 'px', width: width + 'px' }"
      v-else
    >
      <div
        v-if="type == 'circle'"
        class="tu-progress-circle__outer"
        :style="{ '--stroke-width': `${strokeWidth * 2}px` }"
      ></div>
      <svg viewBox="0 0 100 100" class="tu-progress-circle__inner">
        <defs>
          <radialGradient
            :id="`gradient-${id}`"
            cx="50%"
            cy="50%"
            r="60%"
            fx="50%"
            fy="50%"
          >
            <stop offset="30%" :stop-color="stroke" />
            <stop offset="100%" :stop-color="strokeLight" />
          </radialGradient>
        </defs>
        <path
          class="tu-progress-circle__track"
          :d="trackPath"
          :stroke-width="relativeStrokeWidth"
          :stroke="type == 'dashboard' ? '#c8d0e761' : ''"
          fill="none"
          :style="trailPathStyle"
        ></path>
        <path
          class="tu-progress-circle__path"
          :d="trackPath"
          :stroke="`url(#gradient-${id})`"
          fill="none"
          :stroke-linecap="strokeLinecap"
          :stroke-width="percentage ? relativeStrokeWidth : 0"
          :style="circlePathStyle"
        ></path>
      </svg>
    </div>
    <div
      class="tu-progress__text"
      v-if="showText && !textInside"
      :style="{ fontSize: progressTextSize + 'px' }"
    >
      <template v-if="!status">{{ content }}</template>
      <i v-else :class="iconClass"></i>
    </div>
  </div>
</template>

<script>
import { generateId } from "@packages/src/utils/util";
export default {
  name: "TuProgress",

  components: {},

  props: {
    type: {
      type: String,
      default: "line",
      validator: (val) => ["line", "circle", "dashboard"].indexOf(val) > -1,
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: (val) => val >= 0 && val <= 100,
    },
    status: {
      type: String,
      validator: (val) => ["success", "exception", "warning"].indexOf(val) > -1,
    },
    strokeWidth: {
      type: Number,
      default: 8,
    },
    strokeLinecap: {
      type: String,
      default: "round",
    },
    textInside: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 126,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    color: {
      type: [String, Array, Function],
      default: "",
    },
    format: Function,
  },

  data() {
    return {
      strokeTrack: "",
      id: generateId(),
    };
  },

  computed: {
    barStyle() {
      const style = {};
      style.width = this.percentage + "%";
      style.background = this.getCurrentColor(this.percentage);
      return style;
    },

    relativeStrokeWidth() {
      return ((this.strokeWidth / this.width) * 100).toFixed(1);
    },

    radius() {
      if (this.type === "circle" || this.type === "dashboard") {
        return parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);
      } else {
        return 0;
      }
    },

    trackPath() {
      const radius = this.radius;
      const isDashboard = this.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${radius}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "-" : ""}${radius * 2}
          a ${radius} ${radius} 0 1 1 0 ${isDashboard ? "" : "-"}${radius * 2}
          `;
    },

    perimeter() {
      return 2 * Math.PI * this.radius;
    },

    rate() {
      return this.type === "dashboard" ? 0.75 : 1;
    },

    strokeDashoffset() {
      const offset = (-1 * this.perimeter * (1 - this.rate)) / 2;
      return `${offset}px`;
    },

    trailPathStyle() {
      return {
        strokeDasharray: `${this.perimeter * this.rate}px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
      };
    },

    circlePathStyle() {
      return {
        strokeDasharray: `${
          this.perimeter * this.rate * (this.percentage / 100)
        }px, ${this.perimeter}px`,
        strokeDashoffset: this.strokeDashoffset,
        transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease",
      };
    },

    stroke() {
      let ret;
      if (this.color) {
        ret = this.getCurrentColor(this.percentage);
      } else {
        switch (this.status) {
          case "success":
            ret = "#6bc43f";
            break;
          case "exception":
            ret = "#f56c6c";
            break;
          case "warning":
            ret = "#e6a23c";
            break;
          default:
            ret = "#6d5dfc";
        }
      }
      return ret;
    },

    strokeLight() {
      let ret;
      if (this.color) {
        ret = this.getCurrentColor(this.percentage);
      } else {
        switch (this.status) {
          case "success":
            ret = "#93e769";
            break;
          case "exception":
            ret = "#ff9f9f";
            break;
          case "warning":
            ret = "#ffc979";
            break;
          default:
            ret = "#8abdff";
        }
      }
      return ret;
    },

    iconClass() {
      if (this.status === "warning") {
        return "tu-icon-warning-circle";
      }
      if (this.type === "line") {
        return this.status === "success"
          ? "tu-icon-check-circle"
          : "tu-icon-close-circle";
      } else {
        return this.status === "success"
          ? "tu-icon-check-circle"
          : "tu-icon-close-circle";
      }
    },

    progressTextSize() {
      return this.type === "line"
        ? 12 + this.strokeWidth * 0.4
        : this.width * 0.111111 + 2;
    },

    content() {
      if (typeof this.format === "function") {
        return this.format(this.percentage) || "";
      } else {
        return `${this.percentage}%`;
      }
    },
  },

  mounted() {},

  methods: {
    getCurrentColor(percentage) {
      if (typeof this.color === "function") {
        return this.color(percentage);
      } else if (typeof this.color === "string") {
        return this.color;
      } else {
        return this.getLevelColor(percentage);
      }
    },

    getLevelColor(percentage) {
      const colorArray = this.getColorArray().sort(
        (a, b) => a.percentage - b.percentage
      );

      for (let i = 0; i < colorArray.length; i++) {
        if (colorArray[i].percentage > percentage) {
          return colorArray[i].color;
        }
      }
      return colorArray[colorArray.length - 1].color;
    },

    getColorArray() {
      const color = this.color;
      const span = 100 / color.length;
      return color.map((seriesColor, index) => {
        if (typeof seriesColor === "string") {
          return {
            color: seriesColor,
            percentage: (index + 1) * span,
          };
        }
        return seriesColor;
      });
    },
  },
};
</script>
