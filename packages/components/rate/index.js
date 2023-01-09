import Rate from './src/rate';
import './src/rate.scss';

Rate.install = function (Vue) {
    Vue.component(Rate.name, Rate);
};

export default Rate;
