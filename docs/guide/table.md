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

### 固定列

横向内容过多时，可选择固定列。

:::demo 固定列需要使用`fixed`属性，它接受 Boolean 值或者`left` `right`，表示左边固定还是右边固定。

```html
<template>
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
			width="110"
		>
			<template slot-scope="scope">
				<tu-button
					@click="handleClick(scope.row)"
					size="mini"
					>查看</tu-button
				>
				<tu-button
					style="margin-left: 4px"
					size="mini"
					>编辑</tu-button
				>
			</template>
		</tu-table-column>
	</tu-table>
</template>

<script>
	export default {
		methods: {
			handleClick(row) {
				console.log(row);
			},
		},

		data() {
			return {
				tableData: [
					{
						date: "2016-05-02",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1517 弄",
						zip: 200333,
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1519 弄",
						zip: 200333,
					},
					{
						date: "2016-05-03",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1516 弄",
						zip: 200333,
					},
				],
			};
		},
	};
</script>
```

:::

### 固定列和表头

横纵内容过多时，可选择固定列和表头。

:::demo 固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可。

```html
<template>
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
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2016-05-03",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-02",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-08",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-06",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-07",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
				],
			};
		},
	};
</script>
```

:::

### 流体高度

当数据量动态变化时，可以为 Table 设置一个最大高度。

:::demo 通过设置`max-height`属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

```html
<template>
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
			width="80"
		>
			<template slot-scope="scope">
				<tu-button
					@click.native.prevent="deleteRow(scope.$index, tableData)"
					size="mini"
				>
					移除
				</tu-button>
			</template>
		</tu-table-column>
	</tu-table>
</template>

<script>
	export default {
		methods: {
			deleteRow(index, rows) {
				rows.splice(index, 1);
			},
		},
		data() {
			return {
				tableData: [
					{
						date: "2016-05-03",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-02",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-08",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-06",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-07",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
				],
			};
		},
	};
</script>
```

:::

### 多级表头

数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。

:::demo 只需要在 tu-table-column 里面嵌套 tu-table-column，就可以实现多级表头。

```html
<template>
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
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2016-05-03",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-02",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-04",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-01",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-08",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-06",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
					{
						date: "2016-05-07",
						name: "王小虎",
						province: "上海",
						city: "普陀区",
						address: "上海市普陀区金沙江路 1518 弄",
						zip: 200333,
					},
				],
			};
		},
	};
</script>
```

:::

### 单选

选择单行数据时使用色块表示。

:::demo Table 组件提供了单选的支持，只需要配置`highlight-current-row`属性即可实现单选。之后由`current-change`事件来管理选中时触发的事件，它会传入`currentRow`，`oldCurrentRow`。如果需要显示索引，可以增加一列`tu-table-column`，设置`type`属性为`index`即可显示从 1 开始的索引号。

```html
<template>
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
```

:::

### 多选

选择多行数据时使用 Checkbox。

:::demo 实现多选非常简单: 手动添加一个`tu-table-column`，设`type`属性为`selection`即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用`show-overflow-tooltip`属性，它接受一个`Boolean`，为`true`时多余的内容会在 hover 时以 tooltip 的形式显示出来。

```html
<template>
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
```

:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo 在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。可以通过 Table 的`default-sort`属性设置默认的排序列和排序顺序。可以使用`sort-method`或者`sort-by`使用自定义的排序规则。如果需要后端排序，需将`sortable`设置为`custom`，同时在 Table 上监听`sort-change`事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。

```html
<template>
	<tu-table
		:data="tableData"
		style="width: 100%"
		:default-sort="{prop: 'date', order: 'descending'}"
	>
		<tu-table-column
			prop="date"
			label="日期"
			sortable
			width="180"
		>
		</tu-table-column>
		<tu-table-column
			prop="name"
			label="姓名"
			sortable
			width="180"
		>
		</tu-table-column>
		<tu-table-column
			prop="address"
			label="地址"
			:formatter="formatter"
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
		methods: {
			formatter(row, column) {
				return row.address;
			},
		},
	};
</script>
```

:::

### 筛选

对表格进行筛选，可快速查找到自己想看的数据。

:::demo 在列中设置`filters` `filter-method`属性即可开启该列的筛选，filters 是一个数组，`filter-method`是一个方法，它用于决定某些数据是否显示，会传入三个参数：`value`, `row` 和 `column`。

```html
<template>
	<div>
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
				:filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
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
				:filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
				:filter-method="filterTag"
				filter-placement="bottom-end"
			>
				<template slot-scope="scope">
					<tu-tag
						effect="plain"
						:color="scope.row.tag === '家' ? '#6d5dfc' : '#6bc43f'"
						disable-transitions
						>{{scope.row.tag}}</tu-tag
					>
				</template>
			</tu-table-column>
		</tu-table>
		<div style="margin-top: 20px">
			<tu-button @click="resetDateFilter">清除日期过滤器</tu-button>
			<tu-button
				style="margin-left: 4px"
				@click="clearFilter"
				>清除所有过滤器</tu-button
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
```

:::

### 自定义列模板

自定义列的显示内容，可组合其他组件使用。
:::demo 通过 `Scoped slot` 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据，用法参考 demo。

```html
<template>
	<tu-table
		:data="tableData"
		style="width: 100%"
	>
		<tu-table-column label="日期">
			<template slot-scope="scope">
				<i class="tu-icon-time-circle"></i>
				<span style="margin-left: 10px">{{ scope.row.date }}</span>
			</template>
		</tu-table-column>
		<tu-table-column label="姓名">
			<template slot-scope="scope">
				<tu-popover
					trigger="hover"
					placement="top"
				>
					<p>姓名: {{ scope.row.name }}</p>
					<p>住址: {{ scope.row.address }}</p>
					<div
						slot="reference"
						style="display: inline-block"
					>
						<tu-tag size="medium">{{ scope.row.name }}</tu-tag>
					</div>
				</tu-popover>
			</template>
		</tu-table-column>
		<tu-table-column label="操作">
			<template slot-scope="scope">
				<tu-button
					size="mini"
					@click="handleEdit(scope.$index, scope.row)"
					>编辑</tu-button
				>
				<tu-button
					size="mini"
					type="danger"
					style="margin-left: 4px"
					@click="handleDelete(scope.$index, scope.row)"
					>删除</tu-button
				>
			</template>
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
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
		},
	};
</script>
```

:::

### 展开行

当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。
:::demo 通过设置 type="expand" 和 `Scoped slot` 可以开启展开行功能，`tu-table-column` 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 `Scoped slot` 相同。

```html
<template>
	<tu-table
		:data="tableData"
		style="width: 100%"
	>
		<tu-table-column type="expand">
			<template slot-scope="props">
				<tu-form
					labtu-position="left"
					inline
					class="demo-table-expand"
				>
					<tu-form-item label="商品名称">
						<span>{{ props.row.name }}</span>
					</tu-form-item>
					<tu-form-item label="所属店铺">
						<span>{{ props.row.shop }}</span>
					</tu-form-item>
					<tu-form-item label="商品 ID">
						<span>{{ props.row.id }}</span>
					</tu-form-item>
					<tu-form-item label="店铺 ID">
						<span>{{ props.row.shopId }}</span>
					</tu-form-item>
					<tu-form-item label="商品分类">
						<span>{{ props.row.category }}</span>
					</tu-form-item>
					<tu-form-item label="店铺地址">
						<span>{{ props.row.address }}</span>
					</tu-form-item>
					<tu-form-item label="商品描述">
						<span>{{ props.row.desc }}</span>
					</tu-form-item>
				</tu-form>
			</template>
		</tu-table-column>
		<tu-table-column
			label="商品 ID"
			prop="id"
		>
		</tu-table-column>
		<tu-table-column
			label="商品名称"
			prop="name"
		>
		</tu-table-column>
		<tu-table-column
			label="描述"
			prop="desc"
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
						id: "12987122",
						name: "好滋好味鸡蛋仔",
						category: "江浙小吃、小吃零食",
						desc: "荷兰优质淡奶，奶香浓而不腻",
						address: "上海市普陀区真北路",
						shop: "王小虎夫妻店",
						shopId: "10333",
					},
					{
						id: "12987123",
						name: "好滋好味鸡蛋仔",
						category: "江浙小吃、小吃零食",
						desc: "荷兰优质淡奶，奶香浓而不腻",
						address: "上海市普陀区真北路",
						shop: "王小虎夫妻店",
						shopId: "10333",
					},
					{
						id: "12987125",
						name: "好滋好味鸡蛋仔",
						category: "江浙小吃、小吃零食",
						desc: "荷兰优质淡奶，奶香浓而不腻",
						address: "上海市普陀区真北路",
						shop: "王小虎夫妻店",
						shopId: "10333",
					},
					{
						id: "12987126",
						name: "好滋好味鸡蛋仔",
						category: "江浙小吃、小吃零食",
						desc: "荷兰优质淡奶，奶香浓而不腻",
						address: "上海市普陀区真北路",
						shop: "王小虎夫妻店",
						shopId: "10333",
					},
				],
			};
		},
	};
</script>
<style>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #9baacf;
	}
	.demo-table-expand .tu-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
```

:::

### 树形数据与懒加载

:::demo 支持树类型的数据的显示。当 row 中包含 `children` 字段时，被视为树形数据。渲染树形数据时，必须要指定 `row-key`。支持子节点数据异步加载。设置 Table 的 `lazy` 属性为 true 与加载函数 `load` 。通过指定 row 中的 `hasChildren` 字段来指定哪些行是包含子节点。`children` 与 `hasChildren` 都可以通过 `tree-props` 配置。

```html
<template>
	<div>
		<tu-table
			:data="tableData"
			style="width: 100%;margin-bottom: 20px;"
			row-key="id"
			border
			default-expand-all
			:tree-props="{children: 'children', hasChildren: 'hasChildren'}"
		>
			<tu-table-column
				prop="date"
				label="日期"
				sortable
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				sortable
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
			>
			</tu-table-column>
		</tu-table>

		<tu-table
			:data="tableData1"
			style="width: 100%"
			row-key="id"
			border
			lazy
			:load="load"
			:tree-props="{children: 'children', hasChildren: 'hasChildren'}"
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
		data() {
			return {
				tableData: [
					{
						id: 1,
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						id: 2,
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1517 弄",
					},
					{
						id: 3,
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1519 弄",
						children: [
							{
								id: 31,
								date: "2016-05-01",
								name: "王小虎",
								address: "上海市普陀区金沙江路 1519 弄",
							},
							{
								id: 32,
								date: "2016-05-01",
								name: "王小虎",
								address: "上海市普陀区金沙江路 1519 弄",
							},
						],
					},
					{
						id: 4,
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
				],
				tableData1: [
					{
						id: 1,
						date: "2016-05-02",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						id: 2,
						date: "2016-05-04",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1517 弄",
					},
					{
						id: 3,
						date: "2016-05-01",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1519 弄",
						hasChildren: true,
					},
					{
						id: 4,
						date: "2016-05-03",
						name: "王小虎",
						address: "上海市普陀区金沙江路 1516 弄",
					},
				],
			};
		},
		methods: {
			load(tree, treeNode, resolve) {
				setTimeout(() => {
					resolve([
						{
							id: 31,
							date: "2016-05-01",
							name: "王小虎",
							address: "上海市普陀区金沙江路 1519 弄",
						},
						{
							id: 32,
							date: "2016-05-01",
							name: "王小虎",
							address: "上海市普陀区金沙江路 1519 弄",
						},
					]);
				}, 1000);
			},
		},
	};
</script>
```

:::

### 自定义表头

表头支持自定义。

:::demo 通过设置 [Scoped slot](https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD) 来自定义表头。

```html
<template>
	<tu-table
		:data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
		style="width: 100%"
	>
		<tu-table-column
			label="Date"
			prop="date"
		>
		</tu-table-column>
		<tu-table-column
			label="Name"
			prop="name"
		>
		</tu-table-column>
		<tu-table-column align="right">
			<template
				slot="header"
				slot-scope="scope"
			>
				<tu-input
					v-model="search"
					size="mini"
					placeholder="输入关键字搜索"
				/>
			</template>
			<template slot-scope="scope">
				<tu-button
					size="mini"
					@click="handleEdit(scope.$index, scope.row)"
					>编辑</tu-button
				>
				<tu-button
					size="mini"
					type="danger"
					style="margin-left: 4px"
					@click="handleDelete(scope.$index, scope.row)"
					>删除</tu-button
				>
			</template>
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
				search: "",
			};
		},
		methods: {
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
		},
	};
</script>
```

:::

### 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。
:::demo 将`show-summary`设置为`true`就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过`sum-text`配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用`summary-method`并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。

```html
<template>
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
```

:::
