import Scrollbar from "./src/scrollbar";

Scrollbar.install = function (Vue) {
	Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
