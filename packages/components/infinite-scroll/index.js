import InfiniteScroll from "./src/infinite-scroll.js";

InfiniteScroll.install = function (Vue) {
	Vue.directive(InfiniteScroll.name, InfiniteScroll);
};

export default InfiniteScroll;
