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

  watch: {},

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
      console.log("获取标签宽度");
    },
  },

  render() {
    const slots = this.$slots.default;
    if (!slots) return null;
    console.log("isAutoWidth~~", this.isAutoWidth);
    if (this.isAutoWidth) {
      const style = {};

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
