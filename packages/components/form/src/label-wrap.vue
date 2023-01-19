<script>
export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },

  inject: ["tuForm", "tuFormItem"],

  data() {
    return {
      computedWidth: 0,
    };
  },

  watch: {
    computedWidth(val, oldVal) {
      if (this.updateAll) {
        this.tuForm.registerLabelWidth(val, oldVal);
        this.tuFormItem.updateComputedLabelWidth(val);
      }
    },
  },

  mounted() {
    this.updateLabelWidth("update");
  },

  updated() {
    this.updateLabelWidth("update");
  },

  beforeDestroy() {
    this.updateLabelWidth("remove");
  },

  methods: {
    updateLabelWidth(action = "update") {
      if (
        this.$slots.default &&
        this.isAutoWidth &&
        this.$el.firstElementChild
      ) {
        if (action === "update") {
          this.computedWidth = this.getLabelWidth();
        } else if (action === "remove") {
          this.tuForm.deregisterLabelWidth(this.computedWidth);
        }
      }
    },

    getLabelWidth() {
      if (this.$el && this.$el.firstElementChild) {
        const computedWidth = window.getComputedStyle(
          this.$el.firstElementChild
        ).width;
        return Math.ceil(parseFloat(computedWidth));
      } else {
        return 0;
      }
    },
  },

  render() {
    const slots = this.$slots.default;
    if (!slots) return null;
    if (this.isAutoWidth) {
      const autoLabelWidth = this.tuForm.autoLabelWidth;
      const style = {};
      if (autoLabelWidth && autoLabelWidth !== "auto") {
        const marginLeft = parseInt(autoLabelWidth, 10) - this.computedWidth;
        if (marginLeft) {
          style.marginLeft = marginLeft + "px";
        }
      }
      return (
        <div class="tu-form-item__label-wrap" style={style}>
          {slots}
        </div>
      );
    } else {
      return slots[0];
    }
  },
};
</script>
