<template>
	<div class="demo-icon-wrapper">
		<h2>calendar</h2>
		<br />
		<p>基本配置</p>
		<tu-calendar v-model="value"> </tu-calendar>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {
				value: new Date(),
			};
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
