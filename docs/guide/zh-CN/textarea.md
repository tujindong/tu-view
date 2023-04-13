## Textarea 多行输入

通过鼠标或键盘输入字符

:::warning
Textarea 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `textarea` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo

```html
<tu-textarea
	v-model="textarea"
	placeholder="请输入内容"
></tu-textarea>

<script>
	export default {
		data() {
			return {
				textarea: "",
			};
		},
	};
</script>
```

:::

### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 textarea 组件

```html
<tu-textarea
	placeholder="请输入内容"
	v-model="textarea"
	:disabled="true"
>
</tu-textarea>

<script>
	export default {
		data() {
			return {
				textarea: "",
			};
		},
	};
</script>
```

:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框

```html
<tu-textarea
	placeholder="请输入内容"
	v-model="textarea"
	clearable
>
</tu-textarea>

<script>
	export default {
		data() {
			return {
				textarea: "",
			};
		},
	};
</script>
```

:::

### 可自适应文本高度的文本域

通过设置 `autosize` 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 `autosize` 还可以设定为一个对象，指定最小行数和最大行数。

:::demo

```html
<tu-textarea
	autosize
	placeholder="请输入内容"
	v-model="textarea1"
>
</tu-textarea>
<div style="margin: 20px 0;"></div>
<tu-textarea
	:autosize="{ minRows: 2, maxRows: 4}"
	placeholder="请输入内容"
	v-model="textarea2"
>
</tu-textarea>

<script>
	export default {
		data() {
			return {
				textarea1: "",
				textarea2: "",
			};
		},
	};
</script>
```

:::

### 输入长度限制

:::demo `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 `text` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

```html
<tu-textarea
	type="text"
	placeholder="请输入内容"
	v-model="text"
	maxlength="10"
	show-word-limit
>
</tu-textarea>
<div style="margin: 20px 0;"></div>

<script>
	export default {
		data() {
			return {
				text: "",
			};
		},
	};
</script>
```

:::

### textarea Attributes

| 参数            | 说明                                                                     | 类型            | 可选值 | 默认值 |
| --------------- | ------------------------------------------------------------------------ | --------------- | ------ | ------ |
| value / v-model | 绑定值                                                                   | string / number | —      | —      |
| maxlength       | 原生属性，最大输入长度                                                   | number          | —      | —      |
| minlength       | 原生属性，最小输入长度                                                   | number          | —      | —      |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean         | —      | false  |
| placeholder     | 输入框占位文本                                                           | string          | —      | —      |
| clearable       | 是否可清空                                                               | boolean         | —      | false  |
| disabled        | 禁用                                                                     | boolean         | —      | false  |

### textarea Events

| 事件名称 | 说明                                          | 回调参数                  |
| -------- | --------------------------------------------- | ------------------------- |
| blur     | 在 textarea 失去焦点时触发                    | (event: Event)            |
| focus    | 在 textarea 获得焦点时触发                    | (event: Event)            |
| change   | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| textarea | 在 textarea 值改变时触发                      | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### textarea Methods

| 方法名 | 说明                   | 参数 |
| ------ | ---------------------- | ---- |
| focus  | 使 textarea 获取焦点   | —    |
| blur   | 使 textarea 失去焦点   | —    |
| select | 选中 textarea 中的文字 | —    |
