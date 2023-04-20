import Drawer from "./src/drawer.vue";
// import "./src/drawer.scss";

Drawer.install = function (Vue) {
	Vue.component(Drawer.name, Drawer);
};

export default Drawer;
