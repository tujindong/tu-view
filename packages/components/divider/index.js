import Divider from "./src/divider.vue";
// import "./src/divider.scss";

Divider.install = function (Vue) {
	Vue.component(Divider.name, Divider);
};

export default Divider;
