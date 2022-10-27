// 配置对外引用
import Button from './Button.vue';
import './button.scss';

// 提供install方法
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

// 默认导出方式导出
export default Button;