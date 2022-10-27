/* 组件库对外导出的组件集合，对整个组件进行导出 */

// 导入主样式文件（用于注册所有组件时使用）
import Button from './components/button';

// 定义组件列表
const componentsList = [
    Button
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
}
// 如果你还想实现按需加载各个组件，比如我想单独引用button组件，那么你还要加上下面这句
// 然后呢在你的项目的main.js加上下面代码才会生效（这个持保留意见）
/*
  // 按需要引入
  import { Button, Cell } from '../packages/index';
  Vue.use(Button).use(Cell);
*/
// export {
//   Button
// }
