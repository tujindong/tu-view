<template>
	<div>
		<h2>loading</h2>
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

<style>
	body {
		margin: 0;
	}
</style>

<script>
	export default {
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
	};
</script>
