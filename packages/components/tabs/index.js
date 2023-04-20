import Tabs from "./src/tabs.vue";
// import './src/tabs.scss';

Tabs.install = function (Vue) {
	Vue.component(Tabs.name, Tabs);
};

export default Tabs;
