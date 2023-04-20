import Dropdown from "./src/dropdown.vue";
// import './src/dropdown.scss';

Dropdown.install = function (Vue) {
	Vue.component(Dropdown.name, Dropdown);
};

export default Dropdown;
