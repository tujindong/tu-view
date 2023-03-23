import Carousel from "./src/carousel.vue";
import "./src/carousel.scss";
import "./src/carousel-item.scss";

Carousel.install = function (Vue) {
	Vue.component(Carousel.name, Carousel);
};

export default Carousel;
