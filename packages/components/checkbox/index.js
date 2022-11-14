import Checkbox from './src/checkbox.vue';
import './src/checkbox.scss';

Checkbox.install = function (Vue) {
    Vue.component(Checkbox.name, Checkbox);
};

export default Checkbox;