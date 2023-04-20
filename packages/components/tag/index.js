import Tag from "./src/tag.vue";
// import './src/tag.scss';

Tag.install = function (Vue) {
	Vue.component(Tag.name, Tag);
};

export default Tag;
