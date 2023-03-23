<template>
	<div class="container">
		<tu-descriptions
			title="垂直带边框列表"
			direction="vertical"
			:column="4"
			border
			style="margin-bottom: 30px"
		>
			<tu-descriptions-item label="用户名">唐小虎</tu-descriptions-item>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item
				label="居住地"
				:span="2"
				>合肥市</tu-descriptions-item
			>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item label="联系地址"
				>安徽省合肥市高新区创新大道 121 号</tu-descriptions-item
			>
		</tu-descriptions>
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
