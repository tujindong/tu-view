import Rate from "./src/rate";

Rate.install = function (Vue) {
	Vue.component(Rate.name, Rate);
};

export default Rate;
