import DropdownMenu from '../dropdown/src/dropdown-menu';

DropdownMenu.install = function (Vue) {
    Vue.component(DropdownMenu.name, DropdownMenu);
};

export default DropdownMenu;
