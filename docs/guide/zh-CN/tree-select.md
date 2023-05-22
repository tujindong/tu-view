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

### 禁用选项

:::demo 使用 disabled 字段禁用选项。。

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
										disabled: true,
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

### 可清空选项

包含清空按钮，可将选择器清空为初始状态

:::demo 为`tu-select-select`设置`clearable`属性，则可将选择器清空。

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>点击节点选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value1"
				clearable
				:data="data"
				@change="handleNodeChange"
			/>
		</tu-col>
		<tu-col :span="12">
			<p>show-checkbox多选</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value2"
				clearable
				show-checkbox
				multiple
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
				value2: [],
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

### 可筛选

可以利用筛选功能快速查找选项

:::demo 为`tu-select-select`设置`filterable`属性即可启用搜索功能，Tree-select 会找出所有`label`属性包含输入值的选项。如果希望使用其他的搜索逻辑，可以通过传入一个`filter-method`来实现。`filter-method`为一个`Function`，它会在输入值发生变化时调用，参数为当前输入值。

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>点击节点选择</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value1"
				:data="data"
				filterable
				@change="handleNodeChange"
			/>
		</tu-col>
		<tu-col :span="12">
			<p>show-checkbox多选</p>
			<tu-tree-select
				placeholder="请选择节点"
				v-model="value2"
				show-checkbox
				filterable
				multiple
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

### 懒加载

树节点懒加载，适合于数据量大的列表。

:::demo 为`tu-select-select`设置`lazy`属性即可开启树节点懒加载，通过 load 方法自定义加载子节点。

```html
<template>
	<tu-tree-select
		:props="props"
		placeholder="请输入节点"
		v-model="value"
		clearable
		filterable
		lazy
		:filterMethod="filterMethod"
		:load="loadNode"
		node-key="id"
	/>
</template>
<script>
	export default {
		data() {
			return {
				value: "",
				props: {
					label: "name",
					children: "zones",
					isLeaf: "leaf",
				},
			};
		},

		methods: {
			loadNode(node, resolve) {
				if (node.level === 0) {
					return resolve([{ id: "0", name: "主干节点" }]);
				}
				if (node.level > 3) return resolve([]);

				setTimeout(() => {
					const data = [
						{
							id: `leaf-${node.level}`,
							name: `叶子节点${node.level}`,
							leaf: true,
						},
						{
							id: `sub-${node.level}`,
							name: `分支节点${node.level}`,
						},
					];
					resolve(data);
				}, 500);
			},

			filterMethod(value, data) {
				if (!value) return true;
				return data.name.indexOf(value) !== -1;
			},
		},
	};
</script>
```

:::

### Attributes

| 参数                  | 说明                                                                                            | 类型                        | 可选值            | 默认值 |
| --------------------- | ----------------------------------------------------------------------------------------------- | --------------------------- | ----------------- | ------ |
| value / v-model       | 绑定值                                                                                          | boolean / string / number   | —                 | —      |
| data                  | 展示数据                                                                                        | array                       | —                 | —      |
| multiple              | 是否多选                                                                                        | boolean                     | —                 | false  |
| disabled              | 是否禁用                                                                                        | boolean                     | —                 | false  |
| size                  | 输入框尺寸                                                                                      | string                      | medium/small/mini | —      |
| clearable             | 是否可以清空选项                                                                                | boolean                     | —                 | false  |
| collapse-tags         | 多选时是否将选中值按文字的形式展示                                                              | boolean                     | —                 | false  |
| name                  | select input 的 name 属性                                                                       | string                      | —                 | —      |
| placeholder           | 占位符                                                                                          | string                      | —                 | 请选择 |
| filterable            | 是否可搜索                                                                                      | boolean                     | —                 | false  |
| empty-text            | 内容为空的时候展示的文本                                                                        | String                      | —                 | —      |
| node-key              | 每个树节点用来作为唯一标识的属性，整棵树应该是唯一的                                            | String                      | —                 | —      |
| props                 | 配置选项，具体看下表                                                                            | object                      | —                 | —      |
| render-after-expand   | 是否在第一次展开某个树节点后才渲染其子节点                                                      | boolean                     | —                 | true   |
| load                  | 加载子树数据的方法，仅当 lazy 属性为 true 时生效                                                | function(node, resolve)     | —                 | —      |
| default-expand-all    | 是否默认展开所有节点                                                                            | boolean                     | —                 | false  |
| auto-expand-parent    | 展开子节点的时候是否自动展开父节点                                                              | boolean                     | —                 | true   |
| show-checkbox         | 节点是否可被选择                                                                                | boolean                     | —                 | false  |
| check-strictly        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false                          | boolean                     | —                 | false  |
| filter-method         | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node) | —                 | —      |
| accordion             | 是否每次只打开一个同级树节点展开                                                                | boolean                     | —                 | false  |
| indent                | 相邻级节点间的水平缩进，单位为像素                                                              | number                      | —                 | 16     |
| icon-class            | 自定义树节点的图标                                                                              | string                      | -                 | -      |
| lazy                  | 是否懒加载子节点，需与 load 方法结合使用                                                        | boolean                     | —                 | false  |
| popper-append-to-body | 是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false                  | boolean                     | -                 | true   |

### props

| 参数     | 说明                                                     | 类型                          | 可选值 | 默认值 |
| -------- | -------------------------------------------------------- | ----------------------------- | ------ | ------ |
| label    | 指定节点标签为节点对象的某个属性值                       | string, function(data, node)  | —      | —      |
| children | 指定子树为节点对象的某个属性值                           | string                        | —      | —      |
| disabled | 指定节点选择框是否禁用为节点对象的某个属性值             | boolean, function(data, node) | —      | —      |
| isLeaf   | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | —      | —      |

### Events

| 事件名称       | 说明                                     | 回调参数                      |
| -------------- | ---------------------------------------- | ----------------------------- |
| change         | 选中值发生变化时触发                     | 目前的选中值                  |
| visible-change | 下拉框出现/隐藏时触发                    | 出现则为 true，隐藏则为 false |
| remove-tag     | 多选模式下移除 tag 时触发                | 移除的 tag 值                 |
| clear          | 可清空的单选模式下用户点击清空按钮时触发 | —                             |
| blur           | 当 input 失去焦点时触发                  | (event: Event)                |
| focus          | 当 input 获得焦点时触发                  | (event: Event)                |

### Methods

| 方法名 | 说明                            | 参数 |
| ------ | ------------------------------- | ---- |
| focus  | 使 input 获取焦点               | -    |
| blur   | 使 input 失去焦点，并隐藏下拉框 | -    |
