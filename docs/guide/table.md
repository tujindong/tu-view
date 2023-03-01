## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

### 基础表格

基础的表格展示用法。

:::demo 当`tu-table`元素中注入`data`对象数组后，在`tu-table-column`中用`prop`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。可以使用`width`属性来定义列宽。

```html
<template>
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
			};
		},
	};
</script>
```

:::

### 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

:::demo `stripe`属性可以创建带斑马纹的表格。它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

```html
<template>
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
				],
			};
		},
	};
</script>
```

:::

### 带边框表格

:::demo 默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

```html
<template>
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
				],
			};
		},
	};
</script>
```

:::

### 带状态表格

可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。

:::demo 可以通过指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

```html
<template>
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
</template>

<script>
	export default {
		methods: {
			tableRowClassName({ row, rowIndex }) {
				if (rowIndex === 1) {
					return "warning-row";
				} else if (rowIndex === 3) {
					return "success-row";
				}
				return "";
			},
		},
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
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				],
			};
		},
	};
</script>
<style>
	.tu-table .warning-row {
		color: #e6a23c;
	}

	.tu-table .success-row {
		color: #6bc43f;
	}
</style>
```

:::

### 固定表头

纵向内容过多时，可选择固定表头。

:::demo 只要在`tu-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码。

```html
<template>
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
</template>

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
					{
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-08",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-06",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-07",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				],
			};
		},
	};
</script>
```

:::
