import BreadcrumbItem from "../breadcrumb/src/breadcrumb-item";

BreadcrumbItem.install = function (Vue) {
	Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
