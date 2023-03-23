import Empty from "./src/empty.vue";
import "./src/empty.scss";

Empty.install = function (Vue) {
	Vue.component(Empty.name, Empty);
};

export default Empty;
