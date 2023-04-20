import CascaderPanel from "./src/cascader-panel";

CascaderPanel.install = function (Vue) {
	Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
