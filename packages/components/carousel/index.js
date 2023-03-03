import Carousel from "./src/carousel.vue";
import "./src/carousel.scss";

Carousel.install = function (Vue) {
	Vue.component(Carousel.name, Carousel);
};

export default Carousel;
