<template>
	<div>
		<tu-button @click="resetDateFilter">清除日期过滤器</tu-button>
		<tu-button
			style="margin-left: 4px"
			@click="clearFilter"
			>清除所有过滤器</tu-button
		>
		<tu-table
			ref="filterTable"
			:data="tableData"
			style="width: 100%"
		>
			<tu-table-column
				prop="date"
				label="日期"
				sortable
				width="180"
				column-key="date"
				:filters="[
					{ text: '2016-05-01', value: '2016-05-01' },
					{ text: '2016-05-02', value: '2016-05-02' },
					{ text: '2016-05-03', value: '2016-05-03' },
					{ text: '2016-05-04', value: '2016-05-04' },
				]"
				:filter-method="filterHandler"
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
				:formatter="formatter"
			>
			</tu-table-column>
			<tu-table-column
				prop="tag"
				label="标签"
				width="100"
				:filters="[
					{ text: '家', value: '家' },
					{ text: '公司', value: '公司' },
				]"
				:filter-method="filterTag"
				filter-placement="bottom-end"
			>
				<template slot-scope="scope">
					<tu-tag
						:type="scope.row.tag === '家' ? 'primary' : 'success'"
						disable-transitions
						>{{ scope.row.tag }}</tu-tag
					>
				</template>
			</tu-table-column>
		</tu-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
						tag: "家",
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1517 弄",
						tag: "公司",
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1519 弄",
						tag: "家",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
						tag: "公司",
					},
				],
			};
		},
		methods: {
			resetDateFilter() {
				this.$refs.filterTable.clearFilter("date");
			},
			clearFilter() {
				this.$refs.filterTable.clearFilter();
			},
			formatter(row, column) {
				return row.address;
			},
			filterTag(value, row) {
				return row.tag === value;
			},
			filterHandler(value, row, column) {
				const property = column["property"];
				return row[property] === value;
			},
		},
	};
</script>
