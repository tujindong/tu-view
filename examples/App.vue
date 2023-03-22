<template>
	<div class="container">
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
		components: {},

		data() {
			return {};
		},

		methods: {},
	};
</script>

<style lang="scss">
	.container {
		min-height: 100vh;
		font-family: "Poppins", sans-serif;
		background: #e4ebf5;
		padding: 10px 10px 500px;
	}
</style>
