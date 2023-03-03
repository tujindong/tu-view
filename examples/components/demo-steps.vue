<template>
	<div class="demo-icon-wrapper">
		<h2>steps</h2>
		<br />
		<p>基本配置</p>
		<tu-steps :active="1">
			<tu-step
				title="步骤 1"
				icon="tu-icon-edit"
			></tu-step>
			<tu-step
				title="步骤 2"
				icon="tu-icon-upload"
			></tu-step>
			<tu-step
				title="步骤 3"
				icon="tu-icon-picture"
			></tu-step>
		</tu-steps>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
