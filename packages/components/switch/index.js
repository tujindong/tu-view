import Switch from './src/switch.vue';
import './src/switch.scss';

Switch.install = function (Vue) {
    Vue.component(Switch.name, Switch);
};

export default Switch;
