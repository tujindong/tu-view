import Popconfirm from "./src/popconfirm.vue";

Popconfirm.install = function (Vue) {
	Vue.component(Popconfirm.name, Popconfirm);
};

export default Popconfirm;
