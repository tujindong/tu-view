<template>
	<div class="demo-icon-wrapper">
		<h2>carousel</h2>
		<br />
		<p>基本配置</p>
		<tu-carousel height="150px">
			<tu-caroustu-item
				v-for="item in 4"
				:key="item"
			>
				<h3 class="small">{{ item }}</h3>
			</tu-caroustu-item>
		</tu-carousel>
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
