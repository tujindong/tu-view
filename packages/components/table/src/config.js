import { getPropByPath } from "@packages/src/utils/util";

export const cellStarts = {
	default: {
		order: "",
	},
	selection: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: "",
		className: "tu-table-column--selection",
	},
	expand: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: "",
	},
	index: {
		width: 48,
		minWidth: 48,
		realWidth: 48,
		order: "",
	},
};

// 这些选项不应该被覆盖
export const cellForced = {
	selection: {
		renderHeader: function (h, { store }) {
			return (
				<tu-checkbox
					disabled={store.states.data && store.states.data.length === 0}
					indeterminate={store.states.selection.length > 0 && !this.isAllSelected}
					on-input={this.toggleAllSelection}
					value={this.isAllSelected}
				/>
			);
		},
		renderCell: function (h, { row, column, isSelected, store, $index }) {
			return (
				<tu-checkbox
					nativeOn-click={event => event.stopPropagation()}
					value={isSelected}
					disabled={column.selectable ? !column.selectable.call(null, row, $index) : false}
					on-input={() => {
						store.commit("rowSelectedChanged", row);
					}}
				/>
			);
		},
		sortable: false,
		resizable: false,
	},
	index: {
		renderHeader: function (h, { column }) {
			return column.label || "#";
		},
		renderCell: function (h, { $index, column }) {
			let i = $index + 1;
			const index = column.index;

			if (typeof index === "number") {
				i = $index + index;
			} else if (typeof index === "function") {
				i = index($index);
			}

			return <div>{i}</div>;
		},
		sortable: false,
	},
	expand: {
		renderHeader: function (h, { column }) {
			return column.label || "";
		},
		renderCell: function (h, { row, store, isExpanded }) {
			const classes = ["tu-table__expand-icon"];
			if (isExpanded) {
				classes.push("tu-table__expand-icon--expanded");
			}
			const callback = function (e) {
				e.stopPropagation();
				store.toggleRowExpansion(row);
			};
			return (
				<div
					class={classes}
					on-click={callback}>
					<i class="tu-icon tu-icon-right"></i>
				</div>
			);
		},
		sortable: false,
		resizable: false,
		className: "tu-table__expand-column",
	},
};

export function defaultRenderCell(h, { row, column, $index }) {
	const property = column.property;
	const value = property && getPropByPath(row, property).v;
	if (column && column.formatter) {
		return column.formatter(row, column, value, $index);
	}
	return value;
}

export function treeCellPrefix(h, { row, treeNode, store }) {
	if (!treeNode) return null;
	const ele = [];
	const callback = function (e) {
		e.stopPropagation();
		store.loadOrToggle(row);
	};
	if (treeNode.indent) {
		ele.push(
			<span
				class="tu-table__indent"
				style={{ "padding-left": treeNode.indent + "px" }}></span>
		);
	}
	if (typeof treeNode.expanded === "boolean" && !treeNode.noLazyChildren) {
		const expandClasses = [
			"tu-table__expand-icon",
			treeNode.expanded ? "tu-table__expand-icon--expanded" : "",
		];
		let iconName = "right";
		if (treeNode.loading) {
			iconName = "loading";
		}
		ele.push(
			<div
				class={expandClasses}
				on-click={callback}>
				<tu-icon name={iconName}></tu-icon>
			</div>
		);
	} else {
		ele.push(<span class="tu-table__placeholder"></span>);
	}
	return ele;
}
