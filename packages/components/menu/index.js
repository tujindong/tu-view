import Menu from "./src/menu.vue";
import "./src/menu.scss";

Menu.install = function (Vue) {
	Vue.component(Menu.name, Menu);
};

export default Menu;
