import Tree from "./src/tree.vue";
// import "./src/tree.scss";

Tree.install = function (Vue) {
	Vue.component(Tree.name, Tree);
};

export default Tree;
