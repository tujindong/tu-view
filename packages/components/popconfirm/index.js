import Popconfirm from "./src/popconfirm.vue";
import "./src/popconfirm.scss";

Popconfirm.install = function (Vue) {
	Vue.component(Popconfirm.name, Popconfirm);
};

export default Popconfirm;
