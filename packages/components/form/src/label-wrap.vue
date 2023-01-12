<script>
export default {
  props: {
    isAutoWidth: Boolean,
    updateAll: Boolean,
  },

  inject: ["tuForm", "tuFormItem"],

  render() {
    const slots = this.$slots.default;
    if (!slots) return null;
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
