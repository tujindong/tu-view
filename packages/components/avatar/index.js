import Avatar from "./src/avatar.vue";

Avatar.install = function (Vue) {
	Vue.component(Avatar.name, Avatar);
};

export default Avatar;
