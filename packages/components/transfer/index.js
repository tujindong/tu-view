import Transfer from "./src/transfer.vue";
import "./src/transfer.scss";

Transfer.install = function (Vue) {
	Vue.component(Transfer.name, Transfer);
};

export default Transfer;
