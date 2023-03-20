import DescriptionsItem from "../descriptions/src/descriptions-item";

DescriptionsItem.install = function install(Vue) {
	Vue.component(DescriptionsItem.name, DescriptionsItem);
};

export default DescriptionsItem;
