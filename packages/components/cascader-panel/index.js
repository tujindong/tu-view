import CascaderPanel from "./src/cascader-panel";
// import "./src/cascader-panel.scss";

CascaderPanel.install = function (Vue) {
	Vue.component(CascaderPanel.name, CascaderPanel);
};

export default CascaderPanel;
