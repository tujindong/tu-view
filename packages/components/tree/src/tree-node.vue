<template>
  <div
    class="tu-tree-node"
    @click.stop="handleClick"
    @contextmenu="($event) => this.handleContextMenu($event)"
    v-show="node.visible"
    :class="{
      'is-expanded': expanded,
      'is-current': node.isCurrent,
      'is-hidden': !node.visible,
      'is-focusable': !node.disabled,
      'is-checked': !node.disabled && node.checked,
    }"
    role="treeitem"
    tabindex="-1"
    :aria-expanded="expanded"
    :aria-disabled="node.disabled"
    :aria-checked="node.checked"
    :draggable="tree.draggable"
    @dragstart.stop="handleDragStart"
    @dragover.stop="handleDragOver"
    @dragend.stop="handleDragEnd"
    @drop.stop="handleDrop"
    ref="node"
  >
    <div
      :class="['tu-tree-node__content', { 'is-disabled': node.disabled }]"
      :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }"
    >
      <span
        @click.stop="handleExpandIconClick"
        :class="[
          { 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded },
          'tu-tree-node__expand-icon',
          tree.iconClass ? tree.iconClass : 'tu-icon-caret-right',
        ]"
      >
      </span>
      <tu-checkbox
        v-if="showCheckbox"
        v-model="node.checked"
        :indeterminate="node.indeterminate"
        :disabled="!!node.disabled"
        @click.native.stop
        @change="handleCheckChange"
      >
      </tu-checkbox>
      <tu-icon
        v-if="node.loading"
        name="loading"
        class="tu-tree-node__loading-icon"
      ></tu-icon>
      <node-content :node="node"></node-content>
    </div>
    <tu-collapse-transition>
      <div
        class="tu-tree-node__children"
        v-if="!renderAfterExpand || childNodeRendered"
        v-show="expanded"
        role="group"
        :aria-expanded="expanded"
      >
        <tu-tree-node
          :render-content="renderContent"
          v-for="child in node.childNodes"
          :render-after-expand="renderAfterExpand"
          :show-checkbox="showCheckbox"
          :key="getNodeKey(child)"
          :node="child"
          @node-expand="handleChildNodeExpand"
        >
        </tu-tree-node>
      </div>
    </tu-collapse-transition>
  </div>
</template>

<script type="text/jsx">
import TuCollapseTransition from "@packages/src/transitions/collapse-transition";
import emitter from "@packages/src/mixins/emitter";
import { getNodeKey } from "./model/util";

export default {
  name: "TuTreeNode",

  componentName: "TuTreeNode",

  mixins: [emitter],

  props: {
    node: {
      default() {
        return {};
      },
    },
    props: {},
    renderContent: Function,
    renderAfterExpand: {
      type: Boolean,
      default: true,
    },
    showCheckbox: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    TuCollapseTransition,

    NodeContent: {
      props: {
        node: {
          required: true,
        },
      },
      render(h) {
        const parent = this.$parent;
        const tree = parent.tree;
        const node = this.node;
        const { data, store } = node;
        return parent.renderContent ? (
          parent.renderContent.call(parent._renderProxy, h, {
            _self: tree.$vnode.context,
            node,
            data,
            store,
          })
        ) : tree.$scopedSlots.default ? (
          tree.$scopedSlots.default({ node, data })
        ) : (
          <span class={{ "tu-tree-node__label": true }}>{node.label}</span>
        );
      },
    },
  },

  data() {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      oldChecked: null,
      oldIndeterminate: null,
    };
  },

  watch: {
    "node.indeterminate"(val) {
      this.handleSelectChange(this.node.checked, val);
    },

    "node.checked"(val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },

    "node.expanded"(val) {
      this.$nextTick(() => (this.expanded = val));
      if (val) {
        this.childNodeRendered = true;
      }
    },
  },

  methods: {
    getNodeKey(node) {
      return getNodeKey(this.tree.nodeKey, node.data);
    },

    handleSelectChange(checked, indeterminate) {
      if (
        this.oldChecked !== checked &&
        this.oldIndeterminate !== indeterminate
      ) {
        this.tree.$emit("check-change", this.node.data, checked, indeterminate);
      }
      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },

    handleClick() {
      const store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit(
        "current-change",
        store.currentNode ? store.currentNode.data : null,
        store.currentNode
      );
      this.tree.currentNode = this;
      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }
      if (this.tree.checkOnClickNode && !this.node.disabled) {
        this.handleCheckChange(null, {
          target: { checked: !this.node.checked },
        });
      }
      this.tree.$emit("node-click", this.node.data, this.node, this);
    },

    handleContextMenu(event) {
      if (
        this.tree._events["node-contextmenu"] &&
        this.tree._events["node-contextmenu"].length > 0
      ) {
        event.stopPropagation();
        event.preventDefault();
      }
      this.tree.$emit(
        "node-contextmenu",
        event,
        this.node.data,
        this.node,
        this
      );
    },

    handleExpandIconClick() {
      if (this.node.isLeaf) return;
      if (this.expanded) {
        this.tree.$emit("node-collapse", this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit("node-expand", this.node.data, this.node, this);
      }
    },

    handleCheckChange(value, ev) {
      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
      this.$nextTick(() => {
        const store = this.tree.store;
        this.tree.$emit(
          "check",
          this.node.data,
          {
            checkedNodes: store.getCheckedNodes(),
            checkedKeys: store.getCheckedKeys(),
            halfCheckedNodes: store.getHalfCheckedNodes(),
            halfCheckedKeys: store.getHalfCheckedKeys(),
          },
          this.node
        );
      });
    },

    handleChildNodeExpand(nodeData, node, instance) {
      this.broadcast("TuTreeNode", "tree-node-expand", node);
      this.tree.$emit("node-expand", nodeData, node, instance);
    },

    handleDragStart(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit("tree-node-drag-start", event, this);
    },

    handleDragOver(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit("tree-node-drag-over", event, this);
      event.preventDefault();
    },

    handleDrop(event) {
      event.preventDefault();
    },

    handleDragEnd(event) {
      if (!this.tree.draggable) return;
      this.tree.$emit("tree-node-drag-end", event, this);
    },
  },

  created() {
    const parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    const tree = this.tree;
    if (!tree) {
      console.warn("Can not find node's tree.");
    }

    const props = tree.props || {};
    const childrenKey = props["children"] || "children";

    this.$watch(`node.data.${childrenKey}`, () => {
      this.node.updateChildren();
    });

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on("tree-node-expand", (node) => {
        console.log("this.node", this.node.data.label, "node", node.data.label);
        if (this.node !== node) {
          this.node.collapse();
        }
      });
    }
  },
};
</script>
