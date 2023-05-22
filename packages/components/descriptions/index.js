import Descriptions from "./src/descriptions.js";

Descriptions.install = function (Vue) {
	Vue.component(Descriptions.name, Descriptions);
};

export default Descriptions;
