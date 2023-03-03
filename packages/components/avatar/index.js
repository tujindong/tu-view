import Avatar from "./src/avatar.vue";
import "./src/avatar.scss";

Avatar.install = function (Vue) {
	Vue.component(Avatar.name, Avatar);
};

export default Avatar;
