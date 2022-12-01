import Pagination from './src/pagination.vue';
import './src/pagination.scss';

Pagination.install = function (Vue) {
    Vue.component(Pagination.name, Pagination);
};

export default Pagination;
