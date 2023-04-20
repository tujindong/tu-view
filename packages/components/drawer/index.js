import Drawer from "./src/drawer.vue";

Drawer.install = function (Vue) {
	Vue.component(Drawer.name, Drawer);
};

export default Drawer;
