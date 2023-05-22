import Tooltip from "./src/tooltip.js";

Tooltip.install = function (Vue) {
	Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
