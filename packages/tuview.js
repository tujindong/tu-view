/* 组件库对外导出的组件集合，对整个组件进行导出 */
import Button from './components/button';
import Icon from './components/icon';
import Radio from './components/radio';
import RadioGroup from './components/radio-group';
import Checkbox from './components/checkbox';
import CheckboxGroup from './components/checkbox-group';
import Input from './components/input';
import Textarea from './components/textarea';
import Switch from './components/switch'
import InputNumber from './components/input-number'
import Tabs from './components/tabs'
import Select from './components/select'

const componentsList = [
    Button,
    Icon,
    Radio,
    RadioGroup,
    Checkbox,
    CheckboxGroup,
    Input,
    Textarea,
    Switch,
    InputNumber,
    Tabs,
    Select
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

