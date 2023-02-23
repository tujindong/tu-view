import Badge from "./src/badge.vue";
import "./src/badge.scss";

Badge.install = function (Vue) {
	Vue.component(Badge.name, Table);
};

export default Badge;
