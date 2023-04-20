import Timeline from "./src/timeline.vue";
// import "./src/timeline.scss";

Timeline.install = function (Vue) {
	Vue.component(Timeline.name, Timeline);
};

export default Timeline;
