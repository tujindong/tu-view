## Button 按钮

常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`round`和`circle`属性来定义 Button 的样式。

```html
<tu-row class="demo-button">
	<tu-button>默认按钮</tu-button>
	<tu-button type="primary">主要按钮</tu-button>
	<tu-button type="success">成功按钮</tu-button>
	<tu-button type="info">信息按钮</tu-button>
	<tu-button type="warning">警告按钮</tu-button>
	<tu-button type="danger">危险按钮</tu-button>
</tu-row>

<tu-row class="demo-button">
	<tu-button round>圆角按钮</tu-button>
	<tu-button
		type="primary"
		round
		>主要按钮</tu-button
	>
	<tu-button
		type="success"
		round
		>成功按钮</tu-button
	>
	<tu-button
		type="info"
		round
		>信息按钮</tu-button
	>
	<tu-button
		type="warning"
		round
		>警告按钮</tu-button
	>
	<tu-button
		type="danger"
		round
		>危险按钮</tu-button
	>
</tu-row>

<tu-row class="demo-button">
	<tu-button
		icon="tu-icon-home-fill"
		circle
	></tu-button>
	<tu-button
		type="primary"
		icon="tu-icon-edit"
		circle
	></tu-button>
	<tu-button
		type="success"
		icon="tu-icon-check"
		circle
	></tu-button>
	<tu-button
		type="info"
		icon="tu-icon-message"
		circle
	></tu-button>
	<tu-button
		type="warning"
		icon="tu-icon-star"
		circle
	></tu-button>
	<tu-button
		type="danger"
		icon="tu-icon-delete"
		circle
	></tu-button>
</tu-row>

<style>
	.demo-button .tu-button + .tu-button {
		margin-left: 10px;
	}
</style>
```

:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<tu-row class="demo-button">
	<tu-button disabled>默认按钮</tu-button>
	<tu-button
		type="primary"
		disabled
		>主要按钮</tu-button
	>
	<tu-button
		type="success"
		disabled
		>成功按钮</tu-button
	>
	<tu-button
		type="info"
		disabled
		>信息按钮</tu-button
	>
	<tu-button
		type="warning"
		disabled
		>警告按钮</tu-button
	>
	<tu-button
		type="danger"
		disabled
		>危险按钮</tu-button
	>
</tu-row>

<tu-row class="demo-button">
	<tu-button
		plain
		disabled
		>朴素按钮</tu-button
	>
	<tu-button
		type="primary"
		plain
		disabled
		>主要按钮</tu-button
	>
	<tu-button
		type="success"
		plain
		disabled
		>成功按钮</tu-button
	>
	<tu-button
		type="info"
		plain
		disabled
		>信息按钮</tu-button
	>
	<tu-button
		type="warning"
		plain
		disabled
		>警告按钮</tu-button
	>
	<tu-button
		type="danger"
		plain
		disabled
		>危险按钮</tu-button
	>
</tu-row>

<style>
	.demo-button .tu-button + .tu-button {
		margin-left: 10px;
	}
</style>
```

:::

### 文字按钮

没有边框和背景色的按钮。

:::demo

```html
<tu-button type="text">文字按钮</tu-button>
<tu-button
	type="text"
	disabled
	>文字按钮</tu-button
>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<tu-row class="demo-button">
	<tu-button icon="tu-icon-edit"></tu-button>
	<tu-button icon="tu-icon-share"></tu-button>
	<tu-button icon="tu-icon-delete"></tu-button>
	<tu-button icon="tu-icon-search">搜索</tu-button>
	<tu-button>上传<i class="tu-icon-upload tu-icon--right"></i></tu-button>
</tu-row>
<style>
	.demo-button .tu-button + .tu-button {
		margin-left: 10px;
	}
</style>
```

:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<tu-row class="demo-button">
	<tu-button :loading="true">加载中</tu-button>
	<tu-button
		type="primary"
		:loading="true"
		>加载中</tu-button
	>
</tu-row>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<tu-button-group>`标签来嵌套你的按钮。

```html
<div class="button-group-block">
	<div>
		<tu-button-group>
			<tu-button icon="tu-icon-left">上一页</tu-button>
			<tu-button>下一页<i class="tu-icon-right"></i></tu-button>
		</tu-button-group>
		<tu-button-group>
			<tu-button icon="tu-icon-edit"></tu-button>
			<tu-button icon="tu-icon-share"></tu-button>
			<tu-button icon="tu-icon-delete"></tu-button>
		</tu-button-group>
	</div>
	<div>
		<tu-button-group type="primary">
			<tu-button icon="tu-icon-left">上一页</tu-button>
			<tu-button>下一页<i class="tu-icon-right"></i></tu-button>
		</tu-button-group>
		<tu-button-group type="primary">
			<tu-button icon="tu-icon-edit"></tu-button>
			<tu-button icon="tu-icon-share"></tu-button>
			<tu-button icon="tu-icon-delete"></tu-button>
		</tu-button-group>
	</div>
</div>
<style>
	.button-group-block .tu-button-group + .tu-button-group {
		margin-left: 15px;
	}
	.button-group-block > div + div {
		margin-top: 20px;
	}
</style>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<tu-row class="demo-button">
	<tu-button size="large">大型按钮</tu-button>
	<tu-button>中等按钮</tu-button>
	<tu-button size="small">小型按钮</tu-button>
	<tu-button size="mini">迷你按钮</tu-button>
</tu-row>
<tu-row class="demo-button">
	<tu-button
		size="large"
		round
		>大型按钮</tu-button
	>
	<tu-button
		size="medium"
		round
		>中等按钮</tu-button
	>
	<tu-button
		size="small"
		round
		>小型按钮</tu-button
	>
	<tu-button
		size="mini"
		round
		>迷你按钮</tu-button
	>
</tu-row>
<tu-row class="demo-button">
	<tu-button
		size="large"
		icon="tu-icon-home-fill"
		circle
	></tu-button>
	<tu-button
		icon="tu-icon-home-fill"
		circle
	></tu-button>
	<tu-button
		size="small"
		icon="tu-icon-home-fill"
		circle
	></tu-button>
	<tu-button
		size="mini"
		icon="tu-icon-home-fill"
		circle
	></tu-button>
</tu-row>
```

:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                                            | 默认值 |
| ----------- | -------------- | ------- | ------------------------------------------------- | ------ |
| size        | 尺寸           | string  | medium / small / mini                             | —      |
| type        | 类型           | string  | primary / success / warning / danger / info /text | —      |
| round       | 是否圆角按钮   | boolean | —                                                 | false  |
| circle      | 是否圆形按钮   | boolean | —                                                 | false  |
| disabled    | 是否禁用状态   | boolean | —                                                 | false  |
| icon        | 图标类名       | string  | —                                                 | —      |
| autofocus   | 是否默认聚焦   | boolean | —                                                 | false  |
| native-type | 原生 type 属性 | string  | button / submit / reset                           | button |
