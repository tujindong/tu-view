import DatePicker from './src/picker/date-picker';
import './src/style/date-picker.scss';

DatePicker.install = function install(Vue) {
    Vue.component(DatePicker.name, DatePicker);
};

export default DatePicker;

