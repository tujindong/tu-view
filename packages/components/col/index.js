import Col from "./src/col.js";

Col.install = function (Vue) {
	Vue.component(Col.name, Col);
};

export default Col;
