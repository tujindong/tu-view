<template>
	<div>
		<tu-table
			:data="tableData"
			border
			show-summary
			style="width: 100%"
		>
			<tu-table-column
				prop="id"
				label="ID"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount1"
				sortable
				label="数值 1"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount2"
				sortable
				label="数值 2"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount3"
				sortable
				label="数值 3"
			>
			</tu-table-column>
		</tu-table>

		<tu-table
			:data="tableData"
			border
			height="200"
			:summary-method="getSummaries"
			show-summary
			style="width: 100%; margin-top: 20px"
		>
			<tu-table-column
				prop="id"
				label="ID"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount1"
				label="数值 1（元）"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount2"
				label="数值 2（元）"
			>
			</tu-table-column>
			<tu-table-column
				prop="amount3"
				label="数值 3（元）"
			>
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
						id: "12987122",
						name: "王小虎",
						amount1: "234",
						amount2: "3.2",
						amount3: 10,
					},
					{
						id: "12987123",
						name: "王小虎",
						amount1: "165",
						amount2: "4.43",
						amount3: 12,
					},
					{
						id: "12987124",
						name: "王小虎",
						amount1: "324",
						amount2: "1.9",
						amount3: 9,
					},
					{
						id: "12987125",
						name: "王小虎",
						amount1: "621",
						amount2: "2.2",
						amount3: 17,
					},
					{
						id: "12987126",
						name: "王小虎",
						amount1: "539",
						amount2: "4.1",
						amount3: 15,
					},
				],
			};
		},
		methods: {
			getSummaries(param) {
				const { columns, data } = param;
				const sums = [];
				columns.forEach((column, index) => {
					if (index === 0) {
						sums[index] = "总价";
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					if (!values.every(value => isNaN(value))) {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if (!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] += " 元";
					} else {
						sums[index] = "N/A";
					}
				});

				return sums;
			},
		},
	};
</script>
