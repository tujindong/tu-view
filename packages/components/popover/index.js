import Popover from "./src/popover.vue";
import directive from "./src/directive";
import Vue from "vue";

Vue.directive("popover", directive);

Popover.install = function (Vue) {
	Vue.directive("popover", directive);
	Vue.component(Popover.name, Popover);
};
Popover.directive = directive;

export default Popover;
