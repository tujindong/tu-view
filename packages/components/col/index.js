import Col from './src/col.js';
import './src/col.scss';

Col.install = function (Vue) {
    Vue.component(Col.name, Col);
};

export default Col;
