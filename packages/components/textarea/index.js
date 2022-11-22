import Textarea from './src/textarea.vue';
import './src/textarea.scss';

Textarea.install = function (Vue) {
    Vue.component(Textarea.name, Textarea);
};

export default Textarea;
