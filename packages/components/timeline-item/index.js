import TimelineItem from "../timeline/src/item";

TimelineItem.install = function (Vue) {
	Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
