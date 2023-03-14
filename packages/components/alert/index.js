import Alert from "./src/alert.vue";
import "./src/alert.scss";

Alert.install = function (Vue) {
	Vue.component(Alert.name, Alert);
};

export default Alert;
