## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法

展示新消息数量。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<template>
	<div>
		<tu-badge
			:value="12"
			class="badge-badge-item"
		>
			<tu-button size="small">评论</tu-button>
		</tu-badge>
		<tu-badge
			:value="3"
			class="badge-badge-item"
		>
			<tu-button size="small">回复</tu-button>
		</tu-badge>
		<tu-badge
			:value="1"
			class="badge-badge-item"
			type="primary"
		>
			<tu-button size="small">评论</tu-button>
		</tu-badge>
		<tu-badge
			:value="2"
			class="badge-badge-item"
			type="warning"
		>
			<tu-button size="small">回复</tu-button>
		</tu-badge>
	</div>
</template>

<style>
	.badge-badge-item {
		margin-right: 40px;
	}
</style>
```

:::

### 独立使用

不包裹任何元素既是独立使用，可以定义样式展现。

:::demo 定义`value`属性，它接受`Number`或者`String`。

```html
<template>
	<div>
		<tu-badge
			:value="12"
			class="badge-badge-item"
		>
		</tu-badge>
		<tu-badge
			:value="12"
			class="badge-badge-item"
			:number-style="{
        backgroundColor: 'transparent',
        color: '#9baacf',
        boxShadow: '0 0 0 1px #9baacf inset',
      }"
		></tu-badge>
		<tu-badge
			:value="109"
			:number-style="{ backgroundColor: '#52c41a' }"
		></tu-badge>
	</div>
</template>
<style>
	.badge-badge-item {
		margin-right: 40px;
	}
</style>
```

:::

### 最大值

可自定义最大值。

:::demo 由`max`属性定义，它接受一个`Number`，需要注意的是，只有当`value`为`Number`时，它才会生效。

```html
<template>
	<tu-badge
		:value="200"
		:max="99"
		class="badge-item"
	>
		<tu-button size="small">评论</tu-button>
	</tu-badge>
	<tu-badge
		:value="100"
		:max="10"
		class="badge-item"
	>
		<tu-button size="small">回复</tu-button>
	</tu-badge>
</template>

<style>
	.badge-item {
		margin-right: 40px;
	}
</style>
```

:::

### 自定义内容

可以显示数字以外的文本内容。

:::demo 定义`value`为`String`类型是时可以用于显示自定义文本。

```html
<template>
	<tu-badge
		value="new"
		class="badge-item"
	>
		<tu-button size="small">评论</tu-button>
	</tu-badge>
	<tu-badge
		value="hot"
		class="badge-item"
	>
		<tu-button size="small">回复</tu-button>
	</tu-badge>
</template>

<style>
	.badge-item {
		margin-right: 40px;
	}
</style>
```

:::

### 多彩标记

可以用来标识状态的小圆点。

:::demo 定义`text`为`String`类型以及`color`为`String`颜色值标识状态。

```html
<template>
	<div>
		<tu-badge
			text="蓝色"
			color="#6d5dfc"
			class="badge-item"
		>
		</tu-badge>
		<tu-badge
			text="红色"
			color="#f56c6c"
			class="badge-item"
		>
		</tu-badge>
		<tu-badge
			text="绿色"
			color="#6bc43f"
			class="badge-item"
		>
		</tu-badge>
		<tu-badge
			text="黄色"
			color="#e6a23c"
			class="badge-item"
		>
		</tu-badge>
		<tu-badge
			text="粉色"
			color="pink"
			class="badge-item"
		>
		</tu-badge>
	</div>
</template>

<style>
	.badge-item {
		margin-right: 40px;
	}
</style>
```

:::

### Attributes

| 参数   | 说明                                                         | 类型           | 可选值                                      | 默认值 |
| ------ | ------------------------------------------------------------ | -------------- | ------------------------------------------- | ------ |
| value  | 显示值                                                       | string, number | —                                           | —      |
| max    | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number         | —                                           | —      |
| is-dot | 小圆点                                                       | boolean        | —                                           | false  |
| hidden | 隐藏 badge                                                   | boolean        | —                                           | false  |
| type   | 类型                                                         | string         | primary / success / warning / danger / info | —      |
| color  | 自定义小圆点的颜色                                           | string         | —                                           | —      |
| text   | 在设置了 color 的前提下有效，设置状态点的文本                | string         | —                                           | —      |
