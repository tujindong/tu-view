import Collapse from "./src/collapse.vue";
import "./src/collapse.scss";

Collapse.install = function (Vue) {
	Vue.component(Collapse.name, Collapse);
};

export default Collapse;
