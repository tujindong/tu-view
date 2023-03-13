<template>
	<div>
		<tu-table
			ref="singleTable"
			:data="tableData"
			highlight-current-row
			@current-change="handleCurrentChange"
			style="width: 100%"
		>
			<tu-table-column
				type="index"
				width="50"
			>
			</tu-table-column>
			<tu-table-column
				property="date"
				label="日期"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				property="name"
				label="姓名"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				property="address"
				label="地址"
			>
			</tu-table-column>
		</tu-table>
		<div style="margin-top: 20px">
			<tu-button @click="setCurrent(tableData[1])">选中第二行</tu-button>
			<tu-button
				style="margin-left: 4px"
				@click="setCurrent()"
				>取消选择</tu-button
			>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2022-05-02",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-04",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1517 弄",
					},
					{
						date: "2022-05-01",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1519 弄",
					},
					{
						date: "2022-05-03",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
				],
				currentRow: null,
			};
		},

		methods: {
			setCurrent(row) {
				this.$refs.singleTable.setCurrentRow(row);
			},
			handleCurrentChange(val) {
				this.currentRow = val;
			},
		},
	};
</script>
