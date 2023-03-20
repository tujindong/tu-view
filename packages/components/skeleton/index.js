import Skeleton from "./src/skeleton.vue";
import "./src/skeleton.scss";
import "./src/skeleton-item.scss";

Skeleton.install = function (Vue) {
	Vue.component(Skeleton.name, Skeleton);
};

export default Skeleton;
