import Tooltip from './src/tooltip.js';
import './src/tooltip.scss';

Tooltip.install = function (Vue) {
    Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
