## TreeSelect 树形选择

含有下拉菜单的树形选择器，结合了 tu-tree 和 tu-select 两个组件的功能。

### 基础单选

:::demo `v-model`的值为当前被选中的`tu-tree-select`的 value 属性值

```html
<template>
	<tu-tree-select
		placeholder="请选择节点"
		node-key="value"
		v-model="value"
		:data="data"
		@change="handleNodeChange"
	/>
</template>

<script>
	export default {
		data() {
			return {
				value: "",
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
								disabled: true,
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
