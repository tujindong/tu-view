import DatePicker from "./src/picker/date-picker";

DatePicker.install = function install(Vue) {
	Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
