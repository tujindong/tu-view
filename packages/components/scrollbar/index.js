import Scrollbar from "./src/scrollbar";
// import './src/scrollbar.scss';

Scrollbar.install = function (Vue) {
	Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
