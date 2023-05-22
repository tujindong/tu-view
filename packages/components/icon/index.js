/**
 * ⠀⠰⢷⢿⠄
⠀⠀⠀⠀⠀⣼⣷⣄
⠀⠀⣤⣿⣇⣿⣿⣧⣿⡄
⢴⠾⠋⠀⠀⠻⣿⣷⣿⣿⡀
○ ⠀⢀⣿⣿⡿⢿⠈⣿
⠀⠀⠀⢠⣿⡿⠁⠀⡊⠀⠙
⠀⠀⠀⢿⣿⠀⠀⠹⣿
⠀⠀⠀⠀⠹⣷⡀⠀⣿⡄
⠀⠀⠀⠀⣀⣼⣿⠀⢈⣧.
 * 
 */
import Icon from "./src/icon.vue";

Icon.install = function (Vue) {
	Vue.component(Icon.name, Icon);
};

export default Icon;
