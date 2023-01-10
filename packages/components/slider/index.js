import Slider from './src/slider.vue';
import './src/slider.scss';

Slider.install = function (Vue) {
    Vue.component(Slider.name, Slider);
};

export default Slider;
