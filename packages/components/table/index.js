import Table from "./src/table.vue";
// import "./src/table.scss";
// import "./src/table-column.scss";

Table.install = function (Vue) {
	Vue.component(Table.name, Table);
};

export default Table;
