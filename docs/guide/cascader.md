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
