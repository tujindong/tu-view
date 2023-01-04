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
    type: {
      type: String,
      default: "line",
    },
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: "top",
    },
    beforeLeave: Function,
    stretch: Boolean,
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
    currentName(value) {
      if (this.$refs.nav) {
        this.$nextTick(() => {
          this.$refs.nav.$nextTick(() => {
            this.$refs.nav.scrollToActiveTab();
          });
        });
      }
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

    handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit("edit", pane.name, "remove");
      this.$emit("tab-remove", pane.name);
    },

    handleTabAdd() {
      this.$emit("edit", null, "add");
      this.$emit("tab-add");
    },
  },

  render(h) {
    let {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch,
    } = this;

    const newButton =
      editable || addable ? (
        <span
          class="tu-tabs__new-tab"
          on-click={handleTabAdd}
          tabindex="0"
          on-keydown={(ev) => {
            if (ev.keyCode === 13) {
              handleTabAdd();
            }
          }}
        >
          <i class="tu-icon-plus-circle"></i>
        </span>
      ) : null;

    const navProps = {
      ref: "nav",
      props: {
        currentName,
        editable,
        type,
        panes,
        stretch,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
      },
    };

    const header = (
      <div class={["tu-tabs__header", `is-${tabPosition}`]}>
        {newButton}
        <tab-nav {...navProps}></tab-nav>
      </div>
    );

    const panels = <div class="tu-tabs__content">{this.$slots.default}</div>;

    return (
      <div
        class={{
          "tu-tabs": true,
          "tu-tabs--line": type === "line",
          "tu-tabs--card": type === "card",
          "tu-tabs--border-card": type === "border-card",
          [`tu-tabs--${tabPosition}`]: true,
        }}
      >
        {tabPosition !== "bottom" ? [header, panels] : [panels, header]}
      </div>
    );
  },
};
</script>
