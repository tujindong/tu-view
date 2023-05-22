import Clock from "./src/clock.vue";

Clock.install = function (Vue) {
	Vue.component(Clock.name, Clock);
};

export default Clock;
