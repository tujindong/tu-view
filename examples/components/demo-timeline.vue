<template>
	<div class="timeline-block">
		<tu-timeline>
			<tu-timeline-item
				v-for="(activity, index) in activities"
				:key="index"
				:icon="activity.icon"
				:type="activity.type"
				:color="activity.color"
				:size="activity.size"
				:timestamp="activity.timestamp"
			>
				{{ activity.content }}
			</tu-timeline-item>
		</tu-timeline>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activities: [
					{
						content: "支持使用图标",
						timestamp: "2022-04-12 20:46",
						size: "large",
						icon: "bell",
						type: "danger",
					},
					{
						content: "支持自定义颜色",
						timestamp: "2022-04-03 20:46",
						color: "#0bbd87",
					},
					{
						content: "支持自定义尺寸",
						timestamp: "2022-04-03 20:46",
						size: "large",
					},
					{
						content: "默认样式的节点",
						timestamp: "2022-04-03 20:46",
					},
				],
			};
		},
	};
</script>
