import DatePicker from "./src/picker/date-picker";
// import './src/style/index.scss';

DatePicker.install = function install(Vue) {
	Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;
