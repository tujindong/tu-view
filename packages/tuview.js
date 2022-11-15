/* 组件库对外导出的组件集合，对整个组件进行导出 */

// 导入主样式文件（用于注册所有组件时使用）
import Button from './components/button';
import Icon from './components/icon';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';
import Checkbox from './components/checkbox';
import CheckboxGroup from './components/checkbox-group';

// 定义组件列表
const componentsList = [
    Button,
    Icon,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup
];

const install = function (Vue) {
    if (install.installed) return;

    componentsList.map((component) => {
        Vue.component(component.name, component);
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    ...componentsList
}

