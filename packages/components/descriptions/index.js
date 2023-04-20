import Descriptions from "./src/descriptions.js";
// import "./src/descriptions.scss";

Descriptions.install = function (Vue) {
	Vue.component(Descriptions.name, Descriptions);
};

export default Descriptions;
