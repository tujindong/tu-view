import CheckboxButton from "../checkbox/src/checkbox-button.vue";

CheckboxButton.install = function (Vue) {
	Vue.component(CheckboxButton.name, CheckboxButton);
};

export default CheckboxButton;
