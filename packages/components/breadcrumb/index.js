import Breadcrumb from "./src/breadcrumb.vue";
import "./src/breadcrumb.scss";

Breadcrumb.install = function (Vue) {
	Vue.component(Breadcrumb.name, Breadcrumb);
};

export default Breadcrumb;
