<template>
	<div class="demo-icon-wrapper">
		<h2>timeline</h2>
		<br />
		<p>基本配置</p>
		<tu-timeline :reverse="reverse">
			<tu-timeline-item
				v-for="(activity, index) in activities"
				:key="index"
				:timestamp="activity.timestamp"
			>
				{{ activity.content }}
			</tu-timeline-item>
		</tu-timeline>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {
				reverse: true,
				activities: [
					{
						content: "活动按期开始",
						timestamp: "2018-04-15",
					},
					{
						content: "通过审核",
						timestamp: "2018-04-13",
					},
					{
						content: "创建成功",
						timestamp: "2018-04-11",
					},
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
