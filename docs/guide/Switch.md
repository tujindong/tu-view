## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。

```html
<tu-switch v-model="value"> </tu-switch>

<script>
	export default {
		data() {
			return {
				value: false,
			};
		},
	};
</script>
```

:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<template>
	<div class="demo-switch">
		<tu-switch v-model="value1" disabled> </tu-switch>
		<tu-switch v-model="value2" disabled> </tu-switch>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: false,
				value2: true,
			};
		},
	};
</script>
```

:::

### 文字描述

:::demo 使用`activeLabel`属性与`inactiveLabel`属性来设置开关的文字描述。

```html
<template>
	<div class="demo-switch">
		<tu-switch v-model="value1" activeLabel="开" inactiveLabel="关"> </tu-switch>
		<tu-switch v-model="value2">
			<i slot="activeLabel" class="tu-icon-check"></i>
			<i slot="inactiveLabel" class="tu-icon-close"></i>
		</tu-switch>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: false,
				value2: false,
			};
		},
	};
</script>
```

:::

### 扩展的 value 类型

:::demo 设置`active-value`和`inactive-value`属性，接受`Boolean`, `String`或`Number`类型的值。

```html
<tu-switch v-model="value" active-value="100" inactive-value="0"> </tu-switch>

<script>
	export default {
		data() {
			return {
				value: "0",
			};
		},
	};
</script>
```

:::

### 尺寸

:::demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 large、medium 和 mini 三种尺寸。

```html
<div class="demo-switch">
	<tu-switch size="small" v-model="value1"> </tu-switch>
	<tu-switch size="medium" v-model="value2"> </tu-switch>
	<tu-switch size="large" v-model="value3"> </tu-switch>
</div>

<script>
	export default {
		data() {
			return {
				value1: false,
				value2: false,
				value3: false,
			};
		},
	};
</script>
```

:::

### Attributes

| 参数            | 说明                                 | 类型                      | 可选值 | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | ------ | ------ |
| value / v-model | 绑定值                               | boolean / string / number | —      | —      |
| disabled        | 是否禁用                             | boolean                   | —      | false  |
| width           | switch 的宽度（像素）                | number                    | —      | 40     |
| active-label    | switch 打开时的文字描述              | string                    | —      | —      |
| inactive-label  | switch 关闭时的文字描述              | string                    | —      | —      |
| active-value    | switch 打开时的值                    | boolean / string / number | —      | true   |
| inactive-value  | switch 关闭时的值                    | boolean / string / number | —      | false  |
| name            | switch 对应的 name 属性              | string                    | —      | —      |
| validate-event  | 改变 switch 状态时是否触发表单的校验 | boolean                   | -      | true   |

### Events

| 事件名称 | 说明                            | 回调参数   |
| -------- | ------------------------------- | ---------- |
| change   | switch 状态发生变化时的回调函数 | 新状态的值 |

### Methods

| 方法名 | 说明               | 参数 |
| ------ | ------------------ | ---- |
| focus  | 使 Switch 获取焦点 | -    |
