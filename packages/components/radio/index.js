import Radio from "./src/radio.vue";
// import './src/radio.scss';

Radio.install = function (Vue) {
	Vue.component(Radio.name, Radio);
};

export default Radio;
