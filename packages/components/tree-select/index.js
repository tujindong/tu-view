import TreeSelect from "./src/tree-select";
import "./src/tree-select.scss";

TreeSelect.install = function (Vue) {
	Vue.component(TreeSelect.name, TreeSelect);
};

export default TreeSelect;
