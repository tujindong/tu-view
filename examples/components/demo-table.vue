<template>
	<div>
		<tu-table
			ref="multipleTable"
			:data="tableData"
			tooltip-effect="dark"
			style="width: 100%"
			@selection-change="handleSelectionChange"
		>
			<tu-table-column
				type="selection"
				width="55"
			>
			</tu-table-column>
			<tu-table-column
				label="日期"
				width="120"
			>
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
				show-overflow-tooltip
			>
			</tu-table-column>
		</tu-table>
		<div style="margin-top: 20px">
			<tu-button @click="toggleSelection([tableData[1], tableData[2]])"
				>切换第二、第三行的选中状态</tu-button
			>
			<tu-button
				style="margin-left: 4px"
				@click="toggleSelection()"
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
						date: "2022-05-03",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-02",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-04",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-01",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-08",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-06",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-07",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				],
				multipleSelection: [],
			};
		},

		methods: {
			toggleSelection(rows) {
				if (rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
		},
	};
</script>
