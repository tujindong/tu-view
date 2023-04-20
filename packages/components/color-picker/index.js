import ColorPicker from "./src/color-picker.vue";
// import "./src/color-picker.scss";

ColorPicker.install = function (Vue) {
	Vue.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker;
