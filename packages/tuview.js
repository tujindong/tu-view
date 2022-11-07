/* 组件库对外导出的组件集合，对整个组件进行导出 */

// 导入主样式文件（用于注册所有组件时使用）
import Button from './components/button';
import Icon from './components/icon'

// 定义组件列表
const componentsList = [
    Button,
    Icon
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
    Button,
    Icon
}

