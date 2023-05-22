import Badge from "./src/badge.vue";

Badge.install = function (Vue) {
	Vue.component(Badge.name, Table);
};

export default Badge;
