import Pagination from "./src/pagination.js";
// import './src/pagination.scss';

Pagination.install = function (Vue) {
	Vue.component(Pagination.name, Pagination);
};

export default Pagination;
