import Row from "./src/row.js";
// import './src/row.scss';

Row.install = function (Vue) {
	Vue.component(Row.name, Row);
};

export default Row;
