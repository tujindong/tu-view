import directive from "./src/directive";
import service from "./src/index";
// import "./src/loading.scss";

export default {
	install(Vue) {
		Vue.use(directive);
		Vue.prototype.$loading = service;
	},
	directive,
	service,
};
