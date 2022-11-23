import InputNumber from './src/input-number.vue';
import './src/input-number.scss';

InputNumber.install = function (Vue) {
    Vue.component(InputNumber.name, InputNumber);
};

export default InputNumber;
