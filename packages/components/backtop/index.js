import Backtop from "./src/backtop.vue";
import "./src/backtop.scss";

Backtop.install = function (Vue) {
	Vue.component(Backtop.name, Backtop);
};

export default Backtop;
