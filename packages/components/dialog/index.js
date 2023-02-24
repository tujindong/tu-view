import Dialog from "./src/dialog.vue";
import "./src/dialog.scss";

Dialog.install = function (Vue) {
	Vue.component(Dialog.name, Dialog);
};

export default Dialog;
