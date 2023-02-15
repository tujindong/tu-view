## Checkbox 多选框

一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在`tu-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。

```html
<template>
	<!-- `checked` 为 true 或 false -->
	<tu-checkbox v-model="checked">苹果</tu-checkbox>
</template>
<script>
	export default {
		data() {
			return {
				checked: false,
			};
		},
	};
</script>
```

:::

### 禁用状态

多选框不可用状态。

:::demo 设置`disabled`属性即可。

```html
<template>
	<tu-checkbox
		v-model="checked1"
		disabled
		>苹果</tu-checkbox
	>
	<tu-checkbox
		v-model="checked2"
		disabled
		>香蕉</tu-checkbox
	>
</template>
<script>
	export default {
		data() {
			return {
				checked1: false,
				checked2: true,
			};
		},
	};
</script>
```

:::

### 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。

:::demo `checkbox-group`元素能把多个 checkbox 管理为一组，只需要在 Group 中使用`v-model`绑定`Array`类型的变量即可。 `tu-checkbox` 的 `label`属性是该 checkbox 对应的值，若该标签中无内容，则该属性也充当 checkbox 按钮后的介绍。`label`与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中。

```html
<template>
	<tu-checkbox-group v-model="checkList">
		<tu-checkbox label="复选框 A"></tu-checkbox>
		<tu-checkbox label="复选框 B"></tu-checkbox>
		<tu-checkbox label="复选框 C"></tu-checkbox>
		<tu-checkbox
			label="禁用"
			disabled
		></tu-checkbox>
		<tu-checkbox
			label="选中且禁用"
			disabled
		></tu-checkbox>
	</tu-checkbox-group>
</template>

<script>
	export default {
		data() {
			return {
				checkList: ["选中且禁用", "复选框 A"],
			};
		},
	};
</script>
```

:::

### 可选项目数量的限制

使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。

:::demo

```html
<template>
	<tu-checkbox-group
		v-model="checkedFruits"
		:min="1"
		:max="2"
	>
		<tu-checkbox
			v-for="fruit in fruits"
			:label="fruit"
			:key="fruit"
			>{{fruit}}</tu-checkbox
		>
	</tu-checkbox-group>
</template>
<script>
	const fruitOptions = ["苹果", "香蕉", "西瓜", "橘子"];
	export default {
		data() {
			return {
				checkedFruits: ["苹果", "香蕉"],
				fruits: fruitOptions,
			};
		},
	};
</script>
```

:::

### indeterminate 状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果

:::demo

```html
<template>
	<tu-checkbox
		:indeterminate="isIndeterminate"
		v-model="checkAll"
		@change="handleCheckAllChange"
		>全选</tu-checkbox
	>
	<div style="margin: 15px 0;"></div>
	<tu-checkbox-group
		v-model="checkedFruits"
		@change="handleCheckedFruitsChange"
	>
		<tu-checkbox
			v-for="fruit in fruits"
			:label="fruit"
			:key="fruit"
			>{{fruit}}</tu-checkbox
		>
	</tu-checkbox-group>
</template>
<script>
	const fruitOptions = ["苹果", "香蕉", "西瓜", "橘子"];
	export default {
		data() {
			return {
				checkAll: false,
				checkedFruits: ["苹果", "香蕉"],
				fruits: fruitOptions,
				isIndeterminate: true,
			};
		},
		methods: {
			handleCheckAllChange(val) {
				this.checkedFruits = val ? fruitOptions : [];
				this.isIndeterminate = false;
			},
			handleCheckedFruitsChange(value) {
				let checkedCount = value.length;
				this.checkAll = checkedCount === this.fruits.length;
				this.isIndeterminate = checkedCount > 0 && checkedCount < this.fruits.length;
			},
		},
	};
</script>
```

:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的多选框。

```html
<template>
	<div style="margin-top: 20px">
		<p>超小</p>
		<tu-checkbox-group
			v-model="checkboxGroup1"
			size="mini"
			border
		>
			<tu-checkbox label="苹果"></tu-checkbox>
			<tu-checkbox label="香蕉"></tu-checkbox>
			<tu-checkbox label="西瓜"></tu-checkbox>
		</tu-checkbox-group>
	</div>
	<div style="margin-top: 20px">
		<p>较小</p>
		<tu-checkbox-group
			v-model="checkboxGroup2"
			size="small"
			border
		>
			<tu-checkbox label="苹果"></tu-checkbox>
			<tu-checkbox label="香蕉"></tu-checkbox>
			<tu-checkbox label="西瓜"></tu-checkbox>
		</tu-checkbox-group>
	</div>
	<div style="margin-top: 20px">
		<p>中等</p>
		<tu-checkbox-group
			v-model="checkboxGroup3"
			size="medium"
			border
		>
			<tu-checkbox label="苹果"></tu-checkbox>
			<tu-checkbox label="香蕉"></tu-checkbox>
			<tu-checkbox label="西瓜"></tu-checkbox>
		</tu-checkbox-group>
	</div>
	<div style="margin-top: 20px">
		<p>较大</p>
		<tu-checkbox-group
			v-model="checkboxGroup4"
			size="large"
			border
		>
			<tu-checkbox label="苹果"></tu-checkbox>
			<tu-checkbox label="香蕉"></tu-checkbox>
			<tu-checkbox label="西瓜"></tu-checkbox>
		</tu-checkbox-group>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked1: true,
				checked2: false,
				checked3: false,
				checkboxGroup1: [],
				checkboxGroup2: [],
				checkboxGroup3: [],
				checkboxGroup4: [],
			};
		},
	};
</script>
```

:::

### Checkbox Attributes

| 参数            | 说明                                                                  | 类型                      | 可选值                | 默认值 |
| --------------- | --------------------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                                                                | string / number / boolean | —                     | —      |
| label           | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —                     | —      |
| disabled        | 是否禁用                                                              | boolean                   | —                     | false  |
| border          | 是否显示边框                                                          | boolean                   | —                     | false  |
| size            | Checkbox 的尺寸，仅在 border 为真时有效                               | string                    | medium / small / mini | —      |
| name            | 原生 name 属性                                                        | string                    | —                     | —      |
| checked         | 当前是否勾选                                                          | boolean                   | —                     | false  |

### Checkbox Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes

| 参数            | 说明                                                             | 类型    | 可选值                | 默认值 |
| --------------- | ---------------------------------------------------------------- | ------- | --------------------- | ------ |
| value / v-model | 绑定值                                                           | array   | —                     | —      |
| size            | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —      |
| disabled        | 是否禁用                                                         | boolean | —                     | false  |
| min             | 可被勾选的 checkbox 的最小数量                                   | number  | —                     | —      |
| max             | 可被勾选的 checkbox 的最大数量                                   | number  | —                     | —      |

### Checkbox-group Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 更新后的值 |
