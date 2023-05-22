## Input 输入框

通过鼠标或键盘输入字符

:::warning
Input 为受控组件，它**总会显示 Vue 绑定值**。

通常情况下，应当处理 `input` 事件，并更新组件的绑定值（或使用`v-model`）。否则，输入框内显示的值将不会改变。

不支持 `v-model` 修饰符。
:::

### 基础用法

:::demo

```html
<tu-input
	v-model="input"
	placeholder="请输入内容"
></tu-input>

<script>
	export default {
		data() {
			return {
				input: "",
			};
		},
	};
</script>
```

:::

### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件

```html
<tu-input
	placeholder="请输入内容"
	v-model="input"
	:disabled="true"
>
</tu-input>

<script>
	export default {
		data() {
			return {
				input: "",
			};
		},
	};
</script>
```

:::

### 可清空

:::demo 使用`clearable`属性即可得到一个可清空的输入框

```html
<tu-input
	placeholder="请输入内容"
	v-model="input"
	clearable
>
</tu-input>

<script>
	export default {
		data() {
			return {
				input: "",
			};
		},
	};
</script>
```

:::

### 密码框

:::demo 使用`show-password`属性即可得到一个可切换显示隐藏的密码框

```html
<tu-input
	placeholder="请输入密码"
	v-model="input"
	show-password
></tu-input>

<script>
	export default {
		data() {
			return {
				input: "",
			};
		},
	};
</script>
```

:::

### 带 icon 的输入框

带有图标标记输入类型

:::demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

```html
<div class="demo-input-suffix">
	<span> 属性方式： </span>
	<tu-input
		placeholder="请选择日期"
		suffix-icon="tu-icon-calendar"
		v-model="input1"
	>
	</tu-input>
	<tu-input
		placeholder="请输入内容"
		prefix-icon="tu-icon-search"
		v-model="input2"
	>
	</tu-input>
</div>
<div class="demo-input-suffix">
	<span> slot 方式：</span>
	<tu-input
		placeholder="请选择日期"
		v-model="input3"
	>
		<i
			slot="suffix"
			class="tu-icon-calendar"
		></i>
	</tu-input>
	<tu-input
		placeholder="请输入内容"
		v-model="input4"
	>
		<i
			slot="prefix"
			class="tu-icon-search"
		></i>
	</tu-input>
</div>

<script>
	export default {
		data() {
			return {
				input1: "",
				input2: "",
				input3: "",
				input4: "",
			};
		},
	};
</script>
```

:::

### 尺寸

:::demo 可通过 `size` 属性指定输入框的尺寸，除了默认的大小外，还提供了 medium、small 和 mini 三种尺寸。

```html
<div class="demo-input-size">
	<p>超小</p>
	<tu-input
		size="mini"
		placeholder="请输入内容"
		suffix-icon="tu-icon-date"
		v-model="input1"
	>
	</tu-input>
	<p>较小</p>
	<tu-input
		size="small"
		placeholder="请输入内容"
		suffix-icon="tu-icon-date"
		v-model="input2"
	>
	</tu-input>
	<p>中等</p>
	<tu-input
		size="medium"
		placeholder="请输入内容"
		suffix-icon="tu-icon-date"
		v-model="input3"
	>
	</tu-input>
	<p>较大</p>
	<tu-input
		size="large"
		placeholder="请输入内容"
		suffix-icon="tu-icon-date"
		v-model="input4"
	>
	</tu-input>
</div>

<script>
	export default {
		data() {
			return {
				input1: "",
				input2: "",
				input3: "",
				input4: "",
			};
		},
	};
</script>
```

:::

### 输入长度限制

:::demo `maxlength` 和 `minlength` 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 `text` 的输入框，在使用 `maxlength` 属性限制最大输入长度的同时，可通过设置 `show-word-limit` 属性来展示字数统计。

```html
<tu-input
	type="text"
	placeholder="请输入内容"
	v-model="text"
	maxlength="10"
	show-word-limit
>
</tu-input>
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

### Input Attributes

| 参数            | 说明                                                                     | 类型            | 可选值                | 默认值 |
| --------------- | ------------------------------------------------------------------------ | --------------- | --------------------- | ------ | --- | --- | --- | ----- |
| type            | 类型                                                                     | string          | 和其他                | text   |
| value / v-model | 绑定值                                                                   | string / number | —                     | —      |
| maxlength       | 原生属性，最大输入长度                                                   | number          | —                     | —      |
| minlength       | 原生属性，最小输入长度                                                   | number          | —                     | —      |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean         | —                     | false  |
| placeholder     | 输入框占位文本                                                           | string          | —                     | —      |
| clearable       | 是否可清空                                                               | boolean         | —                     | false  |
| show-password   | 是否显示切换密码图标                                                     | boolean         | —                     | false  |
| disabled        | 禁用                                                                     | boolean         | —                     | false  |
| size            | 输入框尺寸，只在 `type!="textarea"` 时有效                               | string          | medium / small / mini | —      |
| prefix-icon     | 输入框头部图标                                                           | string          | —                     | —      |
| suffix-icon     | 输入框尾部图标                                                           | string          | —                     | —      | —   | 2   | —   | false |

### Input Slots

| name    | 说明                                    |
| ------- | --------------------------------------- |
| prefix  | 输入框头部内容，只对 `type="text"` 有效 |
| suffix  | 输入框尾部内容，只对 `type="text"` 有效 |
| prepend | 输入框前置内容，只对 `type="text"` 有效 |
| append  | 输入框后置内容，只对 `type="text"` 有效 |

### Input Events

| 事件名称 | 说明                                          | 回调参数                  |
| -------- | --------------------------------------------- | ------------------------- |
| blur     | 在 Input 失去焦点时触发                       | (event: Event)            |
| focus    | 在 Input 获得焦点时触发                       | (event: Event)            |
| change   | 仅在输入框失去焦点或用户按下回车时触发        | (value: string \| number) |
| input    | 在 Input 值改变时触发                         | (value: string \| number) |
| clear    | 在点击由 `clearable` 属性生成的清空按钮时触发 | —                         |

### Input Methods

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| focus  | 使 input 获取焦点   | —    |
| blur   | 使 input 失去焦点   | —    |
| select | 选中 input 中的文字 | —    |
