## Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

在这里提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

:::demo 使用`content`属性来决定`hover`时的提示信息。由`placement`属性决定展示效果：`placement`属性值为：`方向-对齐位置`；四个方向：`top`、`left`、`right`、`bottom`；三种对齐位置：`start`, `end`，默认为空。如`placement="left-end"`，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<div class="box">
	<div class="top">
		<tu-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
			<tu-button>上左</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
			<tu-button>上边</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Top Right 提示文字" placement="top-end">
			<tu-button>上右</tu-button>
		</tu-tooltip>
	</div>
	<div class="left">
		<tu-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
			<tu-button>左上</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
			<tu-button>左边</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
			<tu-button>左下</tu-button>
		</tu-tooltip>
	</div>

	<div class="right">
		<tu-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
			<tu-button>右上</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
			<tu-button>右边</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
			<tu-button>右下</tu-button>
		</tu-tooltip>
	</div>
	<div class="bottom">
		<tu-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
			<tu-button>下左</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Bottom Center 提示文字" placement="bottom">
			<tu-button>下边</tu-button>
		</tu-tooltip>
		<tu-tooltip class="item" effect="dark" content="Bottom Right 提示文字" placement="bottom-end">
			<tu-button>下右</tu-button>
		</tu-tooltip>
	</div>
</div>

<style>
	.box {
		width: 400px;
	}
	.top {
		text-align: center;
	}

	.left {
		float: left;
		width: 60px;
	}

	.right {
		float: right;
		width: 60px;
	}

	.bottom {
		clear: both;
		text-align: center;
	}

	.item {
		margin: 4px;
	}

	.left .tu-tooltip__popper,
	.right .tu-tooltip__popper {
		padding: 8px 10px;
	}
</style>
```

:::

### 更多 Content

展示多行文本或者是设置文本内容的格式

:::demo 用具名 slot 分发`content`，替代`tooltip`中的`content`属性。

```html
<tu-tooltip placement="top">
	<div slot="content">多行信息<br />第二行信息</div>
	<tu-button>Top center</tu-button>
</tu-tooltip>
```

:::

### 高级扩展

除了这些基本设置外，还有一些属性可以让使用者更好的定制自己的效果：

`transition` 属性可以定制显隐的动画效果，默认为`fade-in-linear`。
如果需要关闭 `tooltip` 功能，`disabled` 属性可以满足这个需求，它接受一个`Boolean`，设置为`true`即可。

:::demo

```html
<template>
	<tu-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
		<tu-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</tu-button>
	</tu-tooltip>
</template>
<script>
	export default {
		data() {
			return {
				disabled: false,
			};
		},
	};
</script>
```

:::

### Attributes

| 参数            | 说明                                                                                                    | 类型    | 可选值                                                                                                    | 默认值                                                |
| --------------- | ------------------------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| content         | 显示的内容，也可以通过 `slot#content` 传入 DOM                                                          | String  | —                                                                                                         | —                                                     |
| placement       | Tooltip 的出现位置                                                                                      | String  | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom                                                |
| value / v-model | 状态是否可见                                                                                            | Boolean | —                                                                                                         | false                                                 |
| disabled        | Tooltip 是否可用                                                                                        | Boolean | —                                                                                                         | false                                                 |
| offset          | 出现位置的偏移量                                                                                        | Number  | —                                                                                                         | 0                                                     |
| transition      | 定义渐变动画                                                                                            | String  | —                                                                                                         | el-fade-in-linear                                     |
| visible-arrow   | 是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper)        | Boolean | —                                                                                                         | true                                                  |
| popper-options  | [popper.js](https://popper.js.org/documentation.html) 的参数                                            | Object  | 参考 [popper.js](https://popper.js.org/documentation.html) 文档                                           | { boundariesElement: 'body', gpuAcceleration: false } |
| open-delay      | 延迟出现，单位毫秒                                                                                      | Number  | —                                                                                                         | 0                                                     |
| manual          | 手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效                                   | Boolean | —                                                                                                         | false                                                 |
| popper-class    | 为 Tooltip 的 popper 添加类名                                                                           | String  | —                                                                                                         | —                                                     |
| enterable       | 鼠标是否可进入到 tooltip 中                                                                             | Boolean | —                                                                                                         | true                                                  |
| hide-after      | Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏                                               | number  | —                                                                                                         | 0                                                     |
| tabindex        | Tooltip 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) | number  | —                                                                                                         | 0                                                     |
