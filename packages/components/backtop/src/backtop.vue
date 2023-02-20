<template>
  <transition name="tu-fade-in">
    <div
      ref="backtop"
      v-if="visible"
      @click.stop="handleClick"
      :style="{
        right: styleRight,
        bottom: styleBottom,
      }"
      class="tu-backtop"
    >
      <div class="tu-backtop__inner" ref="inner">
        <tu-button>
          <slot>
            <tu-icon name="vertical-align-top"></tu-icon>
          </slot>
        </tu-button>
      </div>
    </div>
  </transition>
</template>

<script>
import { throttle } from "@packages/src/utils/throttle-debounce";
import { getBackground } from "@packages/src/utils/get-background";

const cubic = (value) => Math.pow(value, 3);
const easeInOutCubic = (value) =>
  value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;

export default {
  name: "TuBacktop",

  props: {
    visibilityHeight: {
      type: Number,
      default: 200,
    },
    target: [String],
    right: {
      type: Number,
      default: 40,
    },
    bottom: {
      type: Number,
      default: 40,
    },
  },

  data() {
    return {
      el: null,
      container: null,
      visible: false,
    };
  },

  computed: {
    styleBottom() {
      return `${this.bottom}px`;
    },
    styleRight() {
      return `${this.right}px`;
    },
    styleBackgroundColor() {},
  },

  watch: {
    visible(val) {
      if (val) {
        this.setBackgroundColor();
      }
    },
  },

  mounted() {
    this.init();
    this.throttledScrollHandler = throttle(300, this.onScroll);
    this.container.addEventListener("scroll", this.throttledScrollHandler);
  },

  beforeDestroy() {
    this.container.removeEventListener("scroll", this.throttledScrollHandler);
  },

  methods: {
    init() {
      this.container = document;
      this.el = document.documentElement;
      if (this.target) {
        this.el = document.querySelector(this.target);
        if (!this.el) {
          throw new Error(`target is not existed: ${this.target}`);
        }
        this.container = this.el;
      }
    },

    onScroll() {
      const scrollTop = this.el.scrollTop;
      this.visible = scrollTop >= this.visibilityHeight;
    },

    handleClick(e) {
      this.scrollToTop();
      this.$emit("click", e);
    },

    scrollToTop() {
      const el = this.el;
      const beginTime = Date.now();
      const beginValue = el.scrollTop;
      const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
      const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
          el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
          rAF(frameFunc);
        } else {
          el.scrollTop = 0;
        }
      };
      rAF(frameFunc);
    },

    setBackgroundColor() {
      this.$nextTick(() => {
        const backgroundColor = getBackground(this.$refs.backtop);
        if (backgroundColor)
          this.$refs.inner.style.backgroundColor = backgroundColor;
      });
    },
  },
};
</script>
