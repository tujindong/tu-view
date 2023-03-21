<template>
	<div class="container">
		<tu-button
			style="margin-bottom: 20px"
			@click="loading = !loading"
			>切换loading</tu-button
		>
		<tu-table
			v-loading="loading"
			:data="tableData"
			style="width: 100%"
		>
			<tu-table-column
				prop="date"
				label="日期"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
			>
			</tu-table-column>
		</tu-table>
	</div>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				tableData: [
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				],
				loading: true,
			};
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
