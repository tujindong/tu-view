import Statistic from "./src/statistic.vue";
import "./src/statistic.scss";

Statistic.install = function (Vue) {
	Vue.component(Statistic.name, Statistic);
};

export default Statistic;
