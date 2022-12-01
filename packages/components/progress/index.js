import Progress from './src/progress.vue';
import './src/progress.scss';

Progress.install = function (Vue) {
    Vue.component(Progress.name, Progress);
};

export default Progress;
