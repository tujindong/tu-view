import ColorPicker from "./src/color-picker.vue";

ColorPicker.install = function (Vue) {
	Vue.component(ColorPicker.name, ColorPicker);
};

export default ColorPicker;
