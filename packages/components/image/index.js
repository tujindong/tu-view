import Image from "./src/image.vue";
// import "./src/image.scss";

Image.install = function (Vue) {
	Vue.component(Image.name, Image);
};

export default Image;
