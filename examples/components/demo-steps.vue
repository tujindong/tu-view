<template>
	<div>
		<tu-steps :current="1">
			<tu-step
				title="已完成"
				content="这里是该步骤的描述信息"
			></tu-step>
			<tu-step
				title="进行中"
				content="这里是该步骤的描述信息"
			></tu-step>
			<tu-step
				title="待进行"
				content="这里是该步骤的描述信息"
			></tu-step>
			<tu-step
				title="待进行"
				content="这里是该步骤的描述信息"
			></tu-step>
		</tu-steps>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {
				active: 0,
			};
		},

		methods: {
			next() {
				if (this.active++ > 2) this.active = 0;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
