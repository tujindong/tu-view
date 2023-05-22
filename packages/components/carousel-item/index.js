import CarouselItem from "../carousel/src/carousel-item";

CarouselItem.install = function (Vue) {
	Vue.component(CarouselItem.name, CarouselItem);
};

export default CarouselItem;
