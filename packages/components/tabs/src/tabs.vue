<script>
export default {
  name: "TuTabs",

  props: {},

  render(h) {
    let {} = this;

    const header = <div class={["tu-tabs__header"]}>头部</div>;

    const panels = <div class="tu-tabs__content">{this.$slots.default}</div>;

    return <div class={{ "tu-tabs": true }}>{[header, panels]}</div>;
  },
};
</script>
