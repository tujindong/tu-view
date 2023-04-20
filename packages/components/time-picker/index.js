import TimePicker from "../date-picker/src/picker/time-picker";
// import "./src/time-picker.scss";

TimePicker.install = function (Vue) {
	Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
