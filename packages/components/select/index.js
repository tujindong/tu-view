import Select from "./src/select.vue";
// import './src/select.scss';

Select.install = function (Vue) {
	Vue.component(Select.name, Select);
};

export default Select;
