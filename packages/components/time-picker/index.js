import TimePicker from "../date-picker/src/picker/time-picker";

TimePicker.install = function (Vue) {
	Vue.component(TimePicker.name, TimePicker);
};

export default TimePicker;
