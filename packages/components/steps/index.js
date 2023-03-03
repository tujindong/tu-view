import Steps from "./src/steps.vue";
import "./src/steps.scss";

Steps.install = function (Vue) {
	Vue.component(Steps.name, Steps);
};

export default Steps;
