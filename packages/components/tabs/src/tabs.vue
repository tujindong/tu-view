<script>
import TabNav from "./tab-nav.vue";
export default {
  name: "TuTabs",

  components: {
    TabNav,
  },

  provide() {
    return {
      rootTabs: this,
    };
  },

  props: {
    value: {},
    tabPosition: {
      type: String,
      default: "top",
    },
  },

  data() {
    return {
      currentName: this.value,
      panes: [],
    };
  },

  watch: {
    value(value) {
      this.setCurrentName(value);
    },
  },

  created() {
    if (!this.currentName) {
      this.setCurrentName("0");
    }
    this.$on("tab-nav-update", this.calcPaneInstances.bind(null, true));
  },

  mounted() {
    this.calcPaneInstances();
  },

  updated() {
    this.calcPaneInstances();
  },

  methods: {
    calcPaneInstances(isForceUpdate = false) {
      if (this.$slots.default) {
        const panes = this.$slots.default
          .filter(
            (vnode) =>
              vnode.tag &&
              vnode.componentOptions &&
              vnode.componentOptions.Ctor.options.name === "TuTabPane"
          )
          .map(({ componentInstance }) => componentInstance);
        const isPanesChanged = !(
          panes.length === this.panes.length &&
          panes.every((pane, index) => pane === this.panes[index])
        );
        if (isForceUpdate || isPanesChanged) {
          this.panes = panes;
        }
      } else if (this.panes.length !== 0) {
        this.panes = [];
      }
    },

    handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit("tab-click", tab, event);
    },

    setCurrentName(value) {
      this.currentName = value;
      this.$emit("input", value);
    },
  },

  render(h) {
    let { currentName, panes, handleTabClick } = this;

    const navProps = {
      ref: "nav",
      props: {
        currentName,
        panes,
        onTabClick: handleTabClick,
      },
    };

    const header = (
      <div class={["tu-tabs__header"]}>
        <tab-nav {...navProps}></tab-nav>
      </div>
    );

    const panels = <div class="tu-tabs__content">{this.$slots.default}</div>;

    return <div class={{ "tu-tabs": true }}>{[header, panels]}</div>;
  },
};
</script>
