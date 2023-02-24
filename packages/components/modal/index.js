import Modal from "./src/modal.vue";
import "./src/modal.scss";

Modal.install = function (Vue) {
	Vue.component(Modal.name, Modal);
};

export default Modal;
