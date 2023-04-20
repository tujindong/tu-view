import TimeSelect from "../date-picker/src/picker/time-select";
// import "./src/time-select.scss";

TimeSelect.install = function (Vue) {
	Vue.component(TimeSelect.name, TimeSelect);
};

export default TimeSelect;
