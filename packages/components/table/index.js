import Table from './src/table.vue';
import './src/table.scss';

Table.install = function (Vue) {
    Vue.component(Table.name, Table);
};

export default Table;
