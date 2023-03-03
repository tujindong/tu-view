<template>
	<div class="demo-icon-wrapper">
		<h2>timeline</h2>
		<br />
		<p>基本配置</p>
		<tu-avatar
			:size="50"
			:src="circleUrl"
		></tu-avatar>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
			};
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
