import Input from './src/input.vue';
import './src/input.scss';

Input.install = function (Vue) {
    Vue.component(Input.name, Input);
};

export default Input;
