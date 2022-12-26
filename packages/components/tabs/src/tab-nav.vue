<script>
import TabBar from "./tab-bar.vue";
export default {
  name: "TabNav",

  props: {
    panes: Array,
    onTabClick: {
      type: Function,
      default: () => {},
    },
  },

  components: {
    TabBar,
  },

  inject: ["rootTabs"],

  render(h) {
    const { panes, onTabClick } = this;

    const tabs = this._l(panes, (pane, index) => {
      const tabName = pane.name || pane.index || index;
      return (
        <div
          class={{
            "tu-tabs__item": true,
            "is-active": pane.active,
            "is-disabled": pane.disabled,
          }}
          id={`tab-${tabName}`}
          key={`tab-${tabName}`}
          aria-controls={`pane-${tabName}`}
          role="tab"
          aria-selected={pane.active}
          onClick={(evt) => {
            onTabClick(pane, tabName, evt);
          }}
        >
          {pane.$slots.label || pane.label}
        </div>
      );
    });

    return (
      <div class={["tu-tabs__nav-wrap"]}>
        <div class={["tu-tabs__nav-scroll"]} ref="navScroll">
          <div class={["tu-tabs__nav"]} ref="nav" role="tablist">
            <tab-bar tabs={panes}></tab-bar>
            {tabs}
          </div>
        </div>
      </div>
    );
  },
};
</script>
