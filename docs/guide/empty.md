## Empty 空状态

空状态时的占位提示。

### 基础用法

:::demo

```html
<template>
	<tu-empty description="描述文字"></tu-empty>
</template>
```

:::

### 其他 Icon

:::demo

```html
<template>
	<div>
		<tu-row :gutter="20">
			<tu-col :span="6">
				<tu-empty description="默认图标"></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="404"
					icon="404"
				></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="暂无收藏"
					icon="collect-empty"
				></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="网络不给力"
					icon="connect-failed"
				></tu-empty>
			</tu-col>
		</tu-row>
		<tu-row :gutter="20">
			<tu-col :span="6">
				<tu-empty
					description="列表为空"
					icon="list-empty"
				></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="加载失败"
					icon="load-failed"
				></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="暂无消息"
					icon="message-empty"
				></tu-empty>
			</tu-col>
			<tu-col :span="6">
				<tu-empty
					description="无搜索结果"
					icon="search-empty"
				></tu-empty>
			</tu-col>
		</tu-row>
	</div>
</template>
```

:::

### 自定义图片

通过设置 `image` 属性传入图片 URL。

:::demo

```html
<template>
	<tu-empty
		image="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp"
	></tu-empty>
</template>
```

:::

### 图片尺寸

通过设置 `image-size` 属性来控制图片大小。

:::demo

```html
<tu-empty :image-size="200"></tu-empty>
```

:::

### 底部内容

使用默认插槽可在底部插入内容。

:::demo

```html
<template>
	<tu-empty>
		<tu-button>按钮</tu-button>
	</tu-empty>
</template>
```

:::

### Empty Attributes

| 参数        | 说明             | 类型   | 可选值                                                                                                 | 默认值 |
| ----------- | ---------------- | ------ | ------------------------------------------------------------------------------------------------------ | ------ |
| image       | 图片地址         | string | —                                                                                                      | —      |
| image-size  | 图片大小（宽度） | number | —                                                                                                      | —      |
| icon        | 其他图标         | string | empty / 404 / collect-empty / connect-failed / list-empty / load-failed / message-empty / search-empty | empty  |
| description | 文本描述         | string | —                                                                                                      | —      |

### Empty Slots

| Name        | 说明           |
| ----------- | -------------- |
| default     | 自定义底部内容 |
| image       | 自定义图片     |
| description | 自定义描述文字 |
