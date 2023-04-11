## TreeSelect 树形选择

含有下拉菜单的树形选择器，结合了 tu-tree 和 tu-select 两个组件的功能。

### 基础单选

:::demo `v-model`的值为当前被选中的`tu-tree-select`的 value 属性值，node-key 定义节点唯一 key 值（不设置默认值为`value`），`tu-tree-select`默认选择叶子节点。

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>点击节点选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				node-key="value"
				v-model="value1"
				:data="data"
				@change="handleNodeChange"
			/>
		</tu-col>
		<tu-col :span="12">
			<p>show-checkbox选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value2"
				show-checkbox
				:data="data"
				@change="handleNodeChange"
			/>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
				value2: "",
				data: [
					{
						value: "1",
						label: "一级 1",
						children: [
							{
								value: "1-1",
								label: "二级 1-1",
								children: [
									{
										value: "1-1-1",
										label: "三级 1-1-1",
									},
								],
							},
						],
					},
					{
						value: "2",
						label: "一级 2",
						children: [
							{
								value: "2-1",
								label: "二级 2-1",
								children: [
									{
										value: "2-1-1",
										label: "三级 2-1-1",
									},
								],
							},
							{
								value: "2-2",
								label: "二级 2-2",
								children: [
									{
										value: "2-2-1",
										label: "三级 2-2-1",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "一级 3",
						children: [
							{
								value: "3-1",
								label: "二级 3-1",
								children: [
									{
										value: "3-1-1",
										label: "三级 3-1-1",
									},
								],
							},
							{
								value: "3-2",
								label: "二级 3-2",
								children: [
									{
										value: "3-2-1",
										label: "三级 3-2-1",
									},
								],
							},
						],
					},
				],
			};
		},

		methods: {
			handleNodeChange(e) {
				console.log(e);
			},
		},
	};
</script>
```

:::

### 选择任意级别

:::demo 当属性 check-strictly=true 时，任何节点都可以被选择，否则只有子节点可被选择。

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>点击节点选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value1"
				:check-strictly="true"
				:data="data"
				@change="handleNodeChange"
			/>
		</tu-col>
		<tu-col :span="12">
			<p>show-checkbox选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value2"
				show-checkbox
				:check-strictly="true"
				:data="data"
				@change="handleNodeChange"
			/>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
				value2: "",
				data: [
					{
						value: "1",
						label: "一级 1",
						children: [
							{
								value: "1-1",
								label: "二级 1-1",
								children: [
									{
										value: "1-1-1",
										label: "三级 1-1-1",
									},
								],
							},
						],
					},
					{
						value: "2",
						label: "一级 2",
						children: [
							{
								value: "2-1",
								label: "二级 2-1",
								children: [
									{
										value: "2-1-1",
										label: "三级 2-1-1",
									},
								],
							},
							{
								value: "2-2",
								label: "二级 2-2",
								children: [
									{
										value: "2-2-1",
										label: "三级 2-2-1",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "一级 3",
						children: [
							{
								value: "3-1",
								label: "二级 3-1",
								children: [
									{
										value: "3-1-1",
										label: "三级 3-1-1",
									},
								],
							},
							{
								value: "3-2",
								label: "二级 3-2",
								children: [
									{
										value: "3-2-1",
										label: "三级 3-2-1",
									},
								],
							},
						],
					},
				],
			};
		},

		methods: {
			handleNodeChange(e) {
				console.log(e);
			},
		},
	};
</script>
```

:::

### 多选

:::demo 为`tu-tree-select`设置`multiple`属性即可启用多选，通过点击节点或者复选框来选择多个选项。

```html
<template>
	<div>
		<tu-row :gutter="20">
			<tu-col :span="12">
				<p>点击节点多选</p>
				<tu-tree-select
					placeholder="请选择节点"
					multiple
					v-model="value1"
					:data="data"
					@change="handleNodeChange"
				/>
			</tu-col>
			<tu-col :span="12">
				<p>show-checkbox多选</p>
				<tu-tree-select
					placeholder="请选择节点"
					multiple
					v-model="value2"
					show-checkbox
					:data="data"
					@change="handleNodeChange"
				/>
			</tu-col>
		</tu-row>
		<tu-row :gutter="20">
			<tu-col :span="12">
				<p>点击节点多选（check-strictly 为 true）</p>
				<tu-tree-select
					placeholder="请选择节点"
					multiple
					v-model="value3"
					:data="data"
					:check-strictly="true"
					@change="handleNodeChange"
				/>
			</tu-col>
			<tu-col :span="12">
				<p>show-checkbox多选（check-strictly 为 true）</p>
				<tu-tree-select
					placeholder="请选择节点"
					multiple
					v-model="value4"
					show-checkbox
					:data="data"
					:check-strictly="true"
					@change="handleNodeChange"
				/>
			</tu-col>
		</tu-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: "",
				value2: "",
				value3: "",
				value4: "",
				data: [
					{
						value: "1",
						label: "一级 1",
						children: [
							{
								value: "1-1",
								label: "二级 1-1",
								children: [
									{
										value: "1-1-1",
										label: "三级 1-1-1",
									},
								],
							},
						],
					},
					{
						value: "2",
						label: "一级 2",
						children: [
							{
								value: "2-1",
								label: "二级 2-1",
								children: [
									{
										value: "2-1-1",
										label: "三级 2-1-1",
									},
								],
							},
							{
								value: "2-2",
								label: "二级 2-2",
								children: [
									{
										value: "2-2-1",
										label: "三级 2-2-1",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "一级 3",
						children: [
							{
								value: "3-1",
								label: "二级 3-1",
								children: [
									{
										value: "3-1-1",
										label: "三级 3-1-1",
									},
								],
							},
							{
								value: "3-2",
								label: "二级 3-2",
								children: [
									{
										value: "3-2-1",
										label: "三级 3-2-1",
									},
								],
							},
						],
					},
				],
			};
		},

		methods: {
			handleNodeChange(e) {
				console.log(e);
			},
		},
	};
</script>
```

:::
