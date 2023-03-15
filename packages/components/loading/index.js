import Loading from "./src/loading.vue";
import "./src/loading.scss";

Loading.install = function (Vue) {
	Vue.component(Loading.name, Loading);
};

export default Loading;
