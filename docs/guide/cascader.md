## Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。

### 基础用法

有两种触发子菜单的方式

:::demo 只需为 Cascader 的`options`属性指定选项数组即可渲染出一个级联选择器。通过`props.expandTrigger`可以定义展开子级菜单的触发方式。

```html
<div class="block">
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>默认 click 触发子菜单</p>
			<tu-cascader
				v-model="value"
				:options="options"
				@change="handleChange"
			></tu-cascader>
		</tu-col>
		<tu-col :span="12">
			<p>hover 触发子菜单</p>
			<tu-cascader
				v-model="value"
				:options="options"
				:props="{ expandTrigger: 'hover' }"
				@change="handleChange"
			></tu-cascader>
		</tu-col>
	</tu-row>
</div>

<script>
	export default {
		data() {
			return {
				value: [],
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
		},
	};
</script>
```

:::

### 禁用选项

通过在数据源中设置 `disabled` 字段来声明该选项是禁用的

:::demo 本例中，`options`指定的数组中的第一个元素含有`disabled: true`键值对，因此是禁用的。在默认情况下，Cascader 会检查数据中每一项的`disabled`字段是否为`true`，如果你的数据中表示禁用含义的字段名不为`disabled`，可以通过`props.disabled`属性来指定（详见下方 API 表格）。当然，`value`、`label`和`children`这三个字段名也可以通过同样的方式指定。

```html
<tu-cascader :options="options"></tu-cascader>

<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "1",
						label: "上海",
						disabled: true,
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
	};
</script>
```

:::

### 可清空

通过 `clearable` 设置输入框可清空

:::demo

```html
<tu-cascader
	:options="options"
	clearable
></tu-cascader>
<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
	};
</script>
```

:::

### 仅显示最后一级

可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。

:::demo 属性`show-all-levels`定义了是否显示完整的路径，将其赋值为`false`则仅显示最后一级

```html
<tu-cascader
	:options="options"
	:show-all-levels="false"
></tu-cascader>
<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
	};
</script>
```

:::

### 多选

可通过 `props.multiple = true` 来开启多选模式

:::demo 在开启多选模式后，默认情况下会展示所有已选中的选项的 Tag，你可以使用`collapse-tags`来折叠 Tag

```html
<tu-row :gutter="20">
	<tu-col :span="12">
		<p>默认显示所有Tag</p>
		<tu-cascader
			:options="options"
			:props="{multiple: true}"
			clearable
		></tu-cascader>
	</tu-col>
	<tu-col :span="12">
		<p>折叠展示Tag</p>
		<tu-cascader
			:options="options"
			:props="{multiple: true}"
			collapse-tags
			clearable
		></tu-cascader>
	</tu-col>
</tu-row>
<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
	};
</script>
```

:::

### 选择任意一级选项

在单选模式下，你只能选择叶子节点；而在多选模式下，勾选父节点真正选中的都是叶子节点。启用该功能后，可让父子节点取消关联，选择任意一级选项。

:::demo 可通过 `props.checkStrictly = true` 来设置父子节点取消选中关联，从而达到选择任意一级选项的目的。

```html
<tu-row :gutter="20">
	<tu-col :span="12">
		<p>单选选择任意一级选项</p>
		<tu-cascader
			:options="options"
			:props="{ checkStrictly: true }"
			clearable
		></tu-cascader>
	</tu-col>
	<tu-col :span="12">
		<p>多选选择任意一级选项</p>
		<tu-cascader
			:options="options"
			:props="{ multiple: true, checkStrictly: true }"
			clearable
		></tu-cascader>
	</tu-col>
</tu-row>
<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
	};
</script>
```

:::

### 动态加载

当选中某一级时，动态加载该级下的选项。

:::demo 通过`lazy`开启动态加载，并通过`lazyload`来设置加载数据源的方法。`lazyload`方法有两个参数，第一个参数`node`为当前点击的节点，第二个`resolve`为数据加载完成的回调(必须调用)。为了更准确的显示节点的状态，还可以对节点数据添加是否为叶子节点的标志位 (默认字段为`leaf`，可通过`props.leaf`修改)，否则会简单的以有无子节点来判断是否为叶子节点。

```html
<tu-cascader :props="props"></tu-cascader>
<script>
	let id = 0;

	export default {
		data() {
			return {
				props: {
					lazy: true,
					lazyLoad(node, resolve) {
						const { level } = node;
						setTimeout(() => {
							const nodes = Array.from({ length: level + 1 }).map(item => ({
								value: ++id,
								label: `选项${id}`,
								leaf: level >= 2,
							}));
							// 通过调用resolve将子节点数据返回，通知组件数据加载完成
							resolve(nodes);
						}, 1000);
					},
				},
			};
		},
	};
</script>
```

:::

### 可搜索

可以快捷地搜索选项并选择。

:::demo 将`filterable`赋值为`true`即可打开搜索功能，默认会匹配节点的`label`或所有父节点的`label`(由`show-all-levels`决定)中包含输入值的选项。你也可以用`filter-method`自定义搜索逻辑，接受一个函数，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中。

```html
<tu-row :gutter="20">
	<tu-col :span="12">
		<p>单选可搜索</p>
		<tu-cascader
			placeholder="试试搜索：姑苏区"
			:options="options"
			filterable
		></tu-cascader>
	</tu-col>
	<tu-col :span="12">
		<p>多选可搜索</p>
		<tu-cascader
			placeholder="试试搜索：姑苏区"
			:options="options"
			:props="{ multiple: true }"
			filterable
			clearable
		></tu-cascader>
	</tu-col>
</tu-row>
<script>
	export default {
		data() {
			return {
				value: [],
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
		},
	};
</script>
```

:::

### 自定义节点内容

可以自定义备选项的节点内容

:::demo 可以通过`scoped slot`对级联选择器的备选项的节点内容进行自定义，scoped slot 会传入两个字段 `node` 和 `data`，分别表示当前节点的 Node 对象和数据。

```html
<tu-cascader :options="options">
	<template slot-scope="{ node, data }">
		<span>{{ data.label }}</span>
		<span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
	</template>
</tu-cascader>
<script>
	export default {
		data() {
			return {
				value: [],
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
		},
	};
</script>
```

:::

### 级联面板

级联面板是级联选择器的核心组件，与级联选择器一样，有单选、多选、动态加载等多种功能。

:::demo 和级联选择器一样，通过`options`来指定选项，也可通过`props`来设置多选、动态加载等功能，具体详情见下方 API 表格。

```html
<tu-cascader-panel :options="options"></tu-cascader-panel>
<script>
	export default {
		data() {
			return {
				value: [],
				options: [
					{
						value: "1",
						label: "上海",
						children: [
							{
								value: "1-1",
								label: "普陀区",
							},
							{
								value: "1-2",
								label: "黄埔区",
							},
							{
								value: "1-3",
								label: "徐汇区",
							},
						],
					},
					{
						value: "2",
						label: "江苏",
						children: [
							{
								value: "2-1",
								label: "南京",
								children: [
									{
										value: "2-1-1",
										label: "玄武区",
									},
									{
										value: "2-1-2",
										label: "秦淮区",
									},
									{
										value: "2-1-3",
										label: "建邺区",
									},
									{
										value: "2-1-4",
										label: "鼓楼区",
									},
									{
										value: "2-1-5",
										label: "浦口区",
									},
									{
										value: "2-1-6",
										label: "栖霞区",
									},
									{
										value: "2-1-7",
										label: "雨花台区",
									},
									{
										value: "2-1-8",
										label: "江宁区",
									},
									{
										value: "2-1-9",
										label: "六合区",
									},
								],
							},
							{
								value: "2-2",
								label: "苏州",
								children: [
									{
										value: "2-2-1",
										label: "姑苏区",
									},
									{
										value: "2-2-2",
										label: "相城区",
									},
								],
							},
							{
								value: "2-3",
								label: "扬州",
								children: [
									{
										value: "2-3-1",
										label: "江都区",
									},
								],
							},
						],
					},
					{
						value: "3",
						label: "浙江",
						children: [
							{
								value: "3-1",
								label: "杭州",
								children: [
									{
										value: "3-1-1",
										label: "西湖区",
									},
									{
										value: "3-1-2",
										label: "上城区",
									},
									{
										value: "3-1-3",
										label: "余杭区",
									},
									{
										value: "3-1-4",
										label: "拱墅区",
									},
									{
										value: "3-1-5",
										label: "滨江区",
									},
								],
							},
							{
								value: "3-2",
								label: "宁波",
								children: [
									{
										value: "3-2-1",
										label: "海曙区",
									},
								],
							},
						],
					},
				],
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			},
		},
	};
</script>
```

:::

### Cascader Attributes

| 参数            | 说明                                                                                                | 类型                    | 可选值                | 默认值    |
| --------------- | --------------------------------------------------------------------------------------------------- | ----------------------- | --------------------- | --------- |
| value / v-model | 选中项绑定值                                                                                        | -                       | —                     | —         |
| options         | 可选项数据源，键名可通过 `Props` 属性配置                                                           | array                   | —                     | —         |
| props           | 配置选项，具体见下表                                                                                | object                  | —                     | —         |
| size            | 尺寸                                                                                                | string                  | medium / small / mini | —         |
| placeholder     | 输入框占位文本                                                                                      | string                  | —                     | 请选择    |
| disabled        | 是否禁用                                                                                            | boolean                 | —                     | false     |
| clearable       | 是否支持清空选项                                                                                    | boolean                 | —                     | false     |
| show-all-levels | 输入框中是否显示选中值的完整路径                                                                    | boolean                 | —                     | true      |
| collapse-tags   | 多选模式下是否折叠 Tag                                                                              | boolean                 | -                     | false     |
| separator       | 选项分隔符                                                                                          | string                  | —                     | 斜杠' / ' |
| filterable      | 是否可搜索选项                                                                                      | boolean                 | —                     | —         |
| filter-method   | 自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中 | function(node, keyword) | -                     | -         |
| debounce        | 搜索关键词输入的去抖延迟，毫秒                                                                      | number                  | —                     | 300       |
| before-filter   | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选               | function(value)         | —                     | —         |
| popper-class    | 自定义浮层类名                                                                                      | string                  | —                     | —         |

### Cascader Events

| 事件名称       | 说明                          | 回调参数                      |
| -------------- | ----------------------------- | ----------------------------- |
| change         | 当选中节点变化时触发          | 选中节点的值                  |
| expand-change  | 当展开节点发生变化时触发      | 各父级选项值组成的数组        |
| blur           | 当失去焦点时触发              | (event: Event)                |
| focus          | 当获得焦点时触发              | (event: Event)                |
| visible-change | 下拉框出现/隐藏时触发         | 出现则为 true，隐藏则为 false |
| remove-tag     | 在多选模式下，移除 Tag 时触发 | 移除的 Tag 对应的节点的值     |

### Cascader Methods

| 方法名          | 说明           | 参数                                          |
| --------------- | -------------- | --------------------------------------------- |
| getCheckedNodes | 获取选中的节点 | (leafOnly) 是否只是叶子节点，默认值为 `false` |

### Cascader Slots

| 名称  | 说明                                                                            |
| ----- | ------------------------------------------------------------------------------- |
| -     | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |
| empty | 无匹配选项时的内容                                                              |

### CascaderPanel Attributes

| 参数            | 说明                                      | 类型   | 可选值 | 默认值 |
| --------------- | ----------------------------------------- | ------ | ------ | ------ |
| value / v-model | 选中项绑定值                              | -      | —      | —      |
| options         | 可选项数据源，键名可通过 `Props` 属性配置 | array  | —      | —      |
| props           | 配置选项，具体见下表                      | object | —      | —      |

### CascaderPanel Events

| 事件名称      | 说明                     | 回调参数               |
| ------------- | ------------------------ | ---------------------- |
| change        | 当选中节点变化时触发     | 选中节点的值           |
| expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |

### CascaderPanel Methods

| 方法名            | 说明               | 参数                                          |
| ----------------- | ------------------ | --------------------------------------------- |
| getCheckedNodes   | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 `false` |
| clearCheckedNodes | 清空选中的节点     | -                                             |

### CascaderPanel Slots

| 名称 | 说明                                                                            |
| ---- | ------------------------------------------------------------------------------- |
| -    | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 |

### Props

| 参数          | 说明                                                                                               | 类型                                                                                     | 可选值        | 默认值     |
| ------------- | -------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------- | ---------- |
| expandTrigger | 次级菜单的展开方式                                                                                 | string                                                                                   | click / hover | 'click'    |
| multiple      | 是否多选                                                                                           | boolean                                                                                  | -             | false      |
| checkStrictly | 是否严格的遵守父子节点不互相关联                                                                   | boolean                                                                                  | -             | false      |
| emitPath      | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean                                                                                  | -             | true       |
| lazy          | 是否动态加载子节点，需与 lazyLoad 方法结合使用                                                     | boolean                                                                                  | -             | false      |
| lazyLoad      | 加载动态数据的方法，仅在 lazy 为 true 时有效                                                       | function(node, resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用) | -             | -          |
| value         | 指定选项的值为选项对象的某个属性值                                                                 | string                                                                                   | —             | 'value'    |
| label         | 指定选项标签为选项对象的某个属性值                                                                 | string                                                                                   | —             | 'label'    |
| children      | 指定选项的子选项为选项对象的某个属性值                                                             | string                                                                                   | —             | 'children' |
| disabled      | 指定选项的禁用为选项对象的某个属性值                                                               | string                                                                                   | —             | 'disabled' |
| leaf          | 指定选项的叶子节点的标志位为选项对象的某个属性值                                                   | string                                                                                   | —             | 'leaf'     |
