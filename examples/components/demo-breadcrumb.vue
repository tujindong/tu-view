<template>
	<div class="demo-icon-wrapper">
		<h2>breadcrumb</h2>
		<br />
		<p>基本配置</p>
		<tu-breadcrumb separator="/">
			<tu-breadcrumb-item :to="{ path: '/' }">首页</tu-breadcrumb-item>
			<tu-breadcrumb-item><a href="/">活动管理</a></tu-breadcrumb-item>
			<tu-breadcrumb-item>活动列表</tu-breadcrumb-item>
			<tu-breadcrumb-item>活动详情</tu-breadcrumb-item>
		</tu-breadcrumb>
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
