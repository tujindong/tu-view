import Calendar from "./src/calendar.vue";

Calendar.install = function (Vue) {
	Vue.component(Calendar.name, Calendar);
};

export default Calendar;
