import Clock from "./src/clock.vue";
import "./src/clock.scss";

Clock.install = function (Vue) {
	Vue.component(Clock.name, Clock);
};

export default Clock;
