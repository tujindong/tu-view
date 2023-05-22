import Pagination from "./src/pagination.js";

Pagination.install = function (Vue) {
	Vue.component(Pagination.name, Pagination);
};

export default Pagination;
