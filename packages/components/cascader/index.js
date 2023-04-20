import Cascader from "./src/cascader.vue";
// import "./src/cascader.scss";

Cascader.install = function (Vue) {
	Vue.component(Cascader.name, Cascader);
};

export default Cascader;
