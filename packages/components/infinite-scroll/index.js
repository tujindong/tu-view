import InfiniteScroll from "./src/infinite-scroll.js";

InfiniteScroll.install = function (Vue) {
	Vue.component(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
