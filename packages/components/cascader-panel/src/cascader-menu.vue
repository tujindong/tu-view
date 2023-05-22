<script>
import CascaderNode from "./cascader-node.vue";
import Locale from "@packages/src/mixins/locale";
import TuScrollbar from "@packages/components/scrollbar";
import { generateId } from "@packages/src/utils/util";

export default {
  name: "TuCascaderMenu",

  mixins: [Locale],

  inject: ["panel"],

  components: {
    CascaderNode,
    TuScrollbar,
  },

  props: {
    nodes: {
      type: Array,
      required: true,
    },
    index: Number,
  },

  data() {
    return {
      activeNode: null,
      hoverTimer: null,
      id: generateId(),
    };
  },

  computed: {
    isEmpty() {
      return !this.nodes.length;
    },
    menuId() {
      return `cascader-menu-${this.id}-${this.index}`;
    },
  },

  methods: {
    handleExpand(e) {
      this.activeNode = e.target;
    },

    handleMouseMove(e) {
      const { activeNode, hoverTimer } = this;
      const { hoverZone } = this.$refs;

      if (!activeNode || !hoverZone) return;

      if (activeNode.contains(e.target)) {
        clearTimeout(hoverTimer);

        const { left } = this.$el.getBoundingClientRect();
        const startX = e.clientX - left;
        const { offsetWidth, offsetHeight } = this.$el;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;

        hoverZone.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        this.hoverTimer = setTimeout(
          this.clearHoverZone,
          this.panel.config.hoverThreshold
        );
      }
    },

    clearHoverZone() {
      const { hoverZone } = this.$refs;
      if (!hoverZone) return;
      hoverZone.innerHTML = "";
    },

    renderEmptyText(h) {
      return (
        <div class="tu-cascader-menu__empty-text">
          {this.t("tu.cascader.noData")}
        </div>
      );
    },

    renderNodeList(h) {
      const { menuId } = this;
      const { isHoverMenu } = this.panel;
      const events = { on: {} };

      if (isHoverMenu) {
        events.on.expand = this.handleExpand;
      }

      const nodes = this.nodes.map((node, index) => {
        const { hasChildren } = node;
        return (
          <cascader-node
            key={node.uid}
            node={node}
            node-id={`${menuId}-${index}`}
            aria-haspopup={hasChildren}
            aria-owns={hasChildren ? menuId : null}
            {...events}
          ></cascader-node>
        );
      });

      return [
        ...nodes,
        isHoverMenu ? (
          <svg ref="hoverZone" class="tu-cascader-menu__hover-zone"></svg>
        ) : null,
      ];
    },
  },

  render(h) {
    const { isEmpty, menuId } = this;
    const events = { nativeOn: {} };

    if (this.panel.isHoverMenu) {
      events.nativeOn.mousemove = this.handleMouseMove;
    }

    return (
      <tu-scrollbar
        tag="ul"
        role="menu"
        id={menuId}
        class="tu-cascader-menu"
        wrap-class="tu-cascader-menu__wrap"
        view-class={{
          "tu-cascader-menu__list": true,
          "is-empty": isEmpty,
        }}
        {...events}
      >
        {isEmpty ? this.renderEmptyText(h) : this.renderNodeList(h)}
      </tu-scrollbar>
    );
  },
};
</script>
