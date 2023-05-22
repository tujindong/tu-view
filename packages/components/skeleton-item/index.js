import SkeletonItem from "../skeleton/src/skeleton-item";

SkeletonItem.install = function (Vue) {
	Vue.component(SkeletonItem.name, SkeletonItem);
};

export default SkeletonItem;
