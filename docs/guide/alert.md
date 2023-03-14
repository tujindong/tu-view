## Alert 警告

用于页面中展示重要的提示信息。

### 基本用法

页面中的非浮层元素，不会自动消失。

:::demo Alert 组件提供四种主题，由`type`属性指定，默认值为`info`。

```html
<template>
	<div class="alert-block">
		<tu-alert
			title="成功提示的文案"
			type="success"
		>
		</tu-alert>
		<tu-alert
			title="消息提示的文案"
			type="info"
		>
		</tu-alert>
		<tu-alert
			title="警告提示的文案"
			type="warning"
		>
		</tu-alert>
		<tu-alert
			title="错误提示的文案"
			type="error"
		>
		</tu-alert>
	</div>
</template>
<style>
	.alert-block .tu-alert {
		margin-bottom: 20px;
	}
</style>
```

:::

### 主题

Alert 组件提供了两个不同的主题：`light`和`dark`。

:::demo 通过设置`effect`属性来改变主题，默认为`light`。

```html
<template>
	<div class="alert-block">
		<tu-alert
			title="成功提示的文案"
			type="success"
			effect="dark"
		>
		</tu-alert>
		<tu-alert
			title="消息提示的文案"
			type="info"
			effect="dark"
		>
		</tu-alert>
		<tu-alert
			title="警告提示的文案"
			type="warning"
			effect="dark"
		>
		</tu-alert>
		<tu-alert
			title="错误提示的文案"
			type="error"
			effect="dark"
		>
		</tu-alert>
	</div>
</template>
<style>
	.alert-block .tu-alert {
		margin-bottom: 20px;
	}
</style>
```

:::

### 自定义关闭按钮

自定义关闭按钮为文字或其他符号。

:::demo 在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。`closable`属性决定是否可关闭，接受`boolean`，默认为`true`。你可以设置`close-text`属性来代替右侧的关闭图标，注意：`close-text`必须为文本。设置`close`事件来设置关闭时的回调。

```html
<template>
	<div class="alert-block">
		<tu-alert
			title="不可关闭的 alert"
			type="success"
			:closable="false"
		>
		</tu-alert>
		<tu-alert
			title="自定义 close-text"
			type="info"
			close-text="知道了"
		>
		</tu-alert>
		<tu-alert
			title="设置了回调的 alert"
			type="warning"
			@close="close"
		>
		</tu-alert>
	</div>
</template>

<script>
	export default {
		methods: {
			close() {
				alert("Hello World!");
			},
		},
	};
</script>
<style>
	.alert-block .tu-alert {
		margin-bottom: 20px;
	}
</style>
```

:::

### 带有 icon

表示某种状态时提升可读性。

:::demo 通过设置`show-icon`属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。

```html
<template>
	<div class="alert-block">
		<tu-alert
			title="成功提示的文案"
			type="success"
			show-icon
		>
		</tu-alert>
		<tu-alert
			title="消息提示的文案"
			type="info"
			show-icon
		>
		</tu-alert>
		<tu-alert
			title="警告提示的文案"
			type="warning"
			show-icon
		>
		</tu-alert>
		<tu-alert
			title="错误提示的文案"
			type="error"
			show-icon
		>
		</tu-alert>
	</div>
</template>
```

:::

### 文字居中

使用 `center` 属性让文字水平居中。

:::demo

```html
<template>
	<tu-alert
		title="成功提示的文案"
		type="success"
		center
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="消息提示的文案"
		type="info"
		center
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="警告提示的文案"
		type="warning"
		center
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="错误提示的文案"
		type="error"
		center
		show-icon
	>
	</tu-alert>
</template>
```

:::

### 带有辅助性文字介绍

包含标题和内容，解释更详细的警告。

:::demo 除了必填的`title`属性外，你可以设置`description`属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。

```html
<template>
	<tu-alert
		title="带辅助性文字介绍"
		type="success"
		description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
	>
	</tu-alert>
</template>
```

:::

### 带有 icon 和辅助性文字介绍

:::demo 最后，这是一个同时具有 icon 和辅助性文字的样例。

```html
<template>
	<tu-alert
		title="成功提示的文案"
		type="success"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="消息提示的文案"
		type="info"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="警告提示的文案"
		type="warning"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	>
	</tu-alert>
	<tu-alert
		title="错误提示的文案"
		type="error"
		description="文字说明文字说明文字说明文字说明文字说明文字说明"
		show-icon
	>
	</tu-alert>
</template>
```

:::

### Attributes

| 参数        | 说明                               | 类型    | 可选值                     | 默认值 |
| ----------- | ---------------------------------- | ------- | -------------------------- | ------ |
| title       | 标题                               | string  | —                          | —      |
| type        | 主题                               | string  | success/warning/info/error | info   |
| description | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —      |
| closable    | 是否可关闭                         | boolean | —                          | true   |
| center      | 文字是否居中                       | boolean | —                          | true   |
| close-text  | 关闭按钮自定义文本                 | string  | —                          | —      |
| show-icon   | 是否显示图标                       | boolean | —                          | false  |
| effect      | 选择提供的主题                     | string  | light/dark                 | light  |

### Slot

| Name  | Description |
| ----- | ----------- |
| —     | 描述        |
| title | 标题的内容  |

### Events

| 事件名称 | 说明                    | 回调参数 |
| -------- | ----------------------- | -------- |
| close    | 关闭 alert 时触发的事件 | —        |
