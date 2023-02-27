<template>
	<div>
		<br />
		<p>基本使用</p>
		<tu-table
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

		<br />
		<p>带斑马纹</p>
		<tu-table
			:data="tableData"
			stripe
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

		<br />
		<p>带边框</p>
		<tu-table
			:data="tableData"
			border
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

		<br />
		<p>带状态</p>
		<tu-table
			:data="tableData"
			style="width: 100%"
			:row-class-name="tableRowClassName"
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
		<br />
		<p>固定表头</p>
		<tu-table
			:data="tableData"
			height="250"
			border
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
		<br />
		<p>固定列</p>
		<tu-table
			:data="tableData"
			border
			style="width: 100%"
		>
			<tu-table-column
				fixed
				prop="date"
				label="日期"
				width="150"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="province"
				label="省份"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="city"
				label="市区"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
				width="300"
			>
			</tu-table-column>
			<tu-table-column
				prop="zip"
				label="邮编"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				fixed="right"
				label="操作"
				width="100"
			>
				<template slot-scope="scope">
					<tu-button
						@click="handleClick(scope.row)"
						type="text"
						size="small"
						>查看</tu-button
					>
					<tu-button
						type="text"
						size="small"
						>编辑</tu-button
					>
				</template>
			</tu-table-column>
		</tu-table>

		<br />
		<p>固定列和表头</p>
		<tu-table
			:data="tableData"
			style="width: 100%"
			height="250"
		>
			<tu-table-column
				fixed
				prop="date"
				label="日期"
				width="150"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="province"
				label="省份"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="city"
				label="市区"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
				width="300"
			>
			</tu-table-column>
			<tu-table-column
				prop="zip"
				label="邮编"
				width="120"
			>
			</tu-table-column>
		</tu-table>
		<br />
		<p>流体高度</p>
		<tu-table
			:data="tableData"
			style="width: 100%"
			max-height="250"
		>
			<tu-table-column
				fixed
				prop="date"
				label="日期"
				width="150"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="province"
				label="省份"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="city"
				label="市区"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
				width="300"
			>
			</tu-table-column>
			<tu-table-column
				prop="zip"
				label="邮编"
				width="120"
			>
			</tu-table-column>
			<tu-table-column
				fixed="right"
				label="操作"
				width="120"
			>
				<template slot-scope="scope">
					<tu-button
						@click.native.prevent="deleteRow(scope.$index, tableData)"
						type="text"
						size="small"
					>
						移除
					</tu-button>
				</template>
			</tu-table-column>
		</tu-table>
		<br />
		<p>多级表头</p>
		<tu-table
			:data="tableData"
			style="width: 100%"
		>
			<tu-table-column
				prop="date"
				label="日期"
				width="150"
			>
			</tu-table-column>
			<tu-table-column label="配送信息">
				<tu-table-column
					prop="name"
					label="姓名"
					width="120"
				>
				</tu-table-column>
				<tu-table-column label="地址">
					<tu-table-column
						prop="province"
						label="省份"
						width="120"
					>
					</tu-table-column>
					<tu-table-column
						prop="city"
						label="市区"
						width="120"
					>
					</tu-table-column>
					<tu-table-column
						prop="address"
						label="地址"
						width="300"
					>
					</tu-table-column>
					<tu-table-column
						prop="zip"
						label="邮编"
						width="120"
					>
					</tu-table-column>
				</tu-table-column>
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
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1517 弄",
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1519 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
				],
			};
		},

		methods: {
			tableRowClassName({ row, rowIndex }) {
				if (rowIndex === 1) {
					return "warning-row";
				} else if (rowIndex === 3) {
					return "success-row";
				}
				return "";
			},
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
		},
	};
</script>
<style>
	.tu-table .warning-row {
		background: oldlace;
	}

	.tu-table .success-row {
		background: #f0f9eb;
	}
</style>
