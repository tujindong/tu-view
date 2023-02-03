## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

```html
<template>
	<tu-radio v-model="radio" label="1">苹果</tu-radio>
	<tu-radio v-model="radio" label="2">香蕉</tu-radio>
	<tu-radio v-model="radio" label="3">西瓜</tu-radio>
</template>

<script>
	export default {
		data() {
			return {
				radio: "1",
			};
		},
	};
</script>
```

:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`tu-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```html
<template>
	<tu-radio disabled v-model="radio" label="禁用">禁用</tu-radio>
	<tu-radio disabled v-model="radio" label="选中且禁用">选中且禁用</tu-radio>
</template>

<script>
	export default {
		data() {
			return {
				radio: "选中且禁用",
			};
		},
	};
</script>
```

:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`tu-radio-group`元素和子元素`tu-radio`可以实现单选组，在`tu-radio-group`中绑定`v-model`，在`tu-radio`中设置好`label`即可，无需再给每一个`tu-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
	<tu-radio-group v-model="radio">
		<tu-radio :label="1">苹果</tu-radio>
		<tu-radio :label="2">香蕉</tu-radio>
		<tu-radio :label="3">西瓜</tu-radio>
	</tu-radio-group>
</template>

<script>
	export default {
		data() {
			return {
				radio: 1,
			};
		},
	};
</script>
```

:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的单选框，此外，TuView 还提供了`size`属性。

```html
<template>
	<div style="margin-top: 20px">
		<p>超小</p>
		<tu-radio-group v-model="radio1" border size="mini">
			<tu-radio label="1">苹果</tu-radio>
			<tu-radio label="2">香蕉</tu-radio>
			<tu-radio label="3">西瓜</tu-radio>
		</tu-radio-group>
	</div>
	<div style="margin-top: 20px">
		<p>较小</p>
		<tu-radio-group v-model="radio2" border size="small">
			<tu-radio label="1">苹果</tu-radio>
			<tu-radio label="2">香蕉</tu-radio>
			<tu-radio label="3">西瓜</tu-radio>
		</tu-radio-group>
	</div>
	<div style="margin-top: 20px">
		<p>中等</p>
		<tu-radio-group v-model="radio3" border size="medium">
			<tu-radio label="1">苹果</tu-radio>
			<tu-radio label="2">香蕉</tu-radio>
			<tu-radio label="3">西瓜</tu-radio>
		</tu-radio-group>
	</div>
	<div style="margin-top: 20px">
		<p>较大</p>
		<tu-radio-group v-model="radio4" border size="large">
			<tu-radio label="1">苹果</tu-radio>
			<tu-radio label="2">香蕉</tu-radio>
			<tu-radio label="3">西瓜</tu-radio>
		</tu-radio-group>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				radio1: "1",
				radio2: "1",
				radio3: "1",
				radio4: "1",
			};
		},
	};
</script>
```

:::

### Radio Attributes

| 参数            | 说明                                 | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                               | string / number / boolean | —                     | —      |
| label           | Radio 的 value                       | string / number / boolean | —                     | —      |
| disabled        | 是否禁用                             | boolean                   | —                     | false  |
| border          | 是否显示边框                         | boolean                   | —                     | false  |
| size            | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name            | 原生 name 属性                       | string                    | —                     | —      |

### Radio Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### Radio-group Attributes

| 参数            | 说明                                                       | 类型                      | 可选值                | 默认值 |
| --------------- | ---------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| value / v-model | 绑定值                                                     | string / number / boolean | —                     | —      |
| size            | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string                    | medium / small / mini | —      |
| disabled        | 是否禁用                                                   | boolean                   | —                     | false  |

### Radio-group Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |
