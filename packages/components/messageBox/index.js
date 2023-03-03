import MessageBox from "./src/messageBox.vue";
import "./src/messageBox.scss";

MessageBox.install = function (Vue) {
	Vue.component(MessageBox.name, MessageBox);
};

export default MessageBox;
