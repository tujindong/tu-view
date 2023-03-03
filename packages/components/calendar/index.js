import Calendar from "./src/calendar.vue";
import "./src/calendar.scss";

Calendar.install = function (Vue) {
	Vue.component(Calendar.name, Calendar);
};

export default Calendar;
