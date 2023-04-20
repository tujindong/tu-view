import TimeSelect from "../date-picker/src/picker/time-select";

TimeSelect.install = function (Vue) {
	Vue.component(TimeSelect.name, TimeSelect);
};

export default TimeSelect;
