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
					:type="scope.row.tag === '家' ? 'primary' : 'success'"
					disable-transitions
					>{{scope.row.tag}}</tu-tag
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
