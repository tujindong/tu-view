## Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息。

### 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。

:::demo

```html
<template>
	<tu-row>
		<tu-col :span="12">
			<p style="text-align: center">圆形</p>
			<div class="demo-basic--circle">
				<div class="block">
					<tu-avatar
						:size="50"
						:src="circleUrl"
					></tu-avatar>
				</div>
				<div
					class="block"
					v-for="size in sizeList"
					:key="size"
				>
					<tu-avatar
						:size="size"
						:src="circleUrl"
					></tu-avatar>
				</div>
			</div>
		</tu-col>
		<tu-col :span="12">
			<p style="text-align: center">方形</p>
			<div class="demo-basic--circle">
				<div class="block">
					<tu-avatar
						shape="square"
						:size="50"
						:src="squareUrl"
					></tu-avatar>
				</div>
				<div
					class="block"
					v-for="size in sizeList"
					:key="size"
				>
					<tu-avatar
						shape="square"
						:size="size"
						:src="squareUrl"
					></tu-avatar>
				</div>
			</div>
		</tu-col>
	</tu-row>
</template>
<script>
	export default {
		data() {
			return {
				circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
				sizeList: ["large", "medium", "small"],
			};
		},
	};
</script>
<style>
	.demo-basic--circle {
		display: flex;
		align-items: center;
	}
	.demo-basic--circle .block {
		flex: 1;
		border-right: 1px solid rgb(224, 230, 237);
		text-align: center;
	}
</style>
```

:::

### 展示类型

支持三种类型：图标、图片和字符

:::demo

```html
<template>
	<div class="demo-type">
		<tu-avatar icon="tu-icon-user"></tu-avatar>
		<tu-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></tu-avatar>
		<tu-avatar> user </tu-avatar>
	</div>
</template>
<style>
	.demo-type {
		display: flex;
	}
	.demo-type .tu-avatar {
		margin-right: 20px;
	}
</style>
```

:::

### 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

:::demo

```html
<template>
	<div class="demo-type">
		<tu-avatar
			:size="60"
			src="https://empty"
			@error="errorHandler"
		>
			<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
		</tu-avatar>
	</div>
</template>
<script>
	export default {
		methods: {
			errorHandler() {
				return true;
			},
		},
	};
</script>
```

:::

### 图片如何适应容器框

当展示类型为图片的时候，使用 `fit` 属性定义图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

:::demo

```html
<template>
	<div class="demo-fit">
		<div
			class="block"
			v-for="fit in fits"
			:key="fit"
		>
			<p class="title">{{ fit }}</p>
			<tu-avatar
				shape="square"
				:size="100"
				:fit="fit"
				:src="url"
			></tu-avatar>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				fits: ["fill", "contain", "cover", "none", "scale-down"],
				url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
			};
		},
	};
</script>
<style>
	.demo-fit {
		display: flex;
		text-align: center;
		justify-content: space-between;
	}
	.demo-fit .block {
		flex: 1;
		display: flex;
		flex-direction: column;
		flex-grow: 0;
	}
</style>
```

:::

### Attributes

| 参数   | 说明                                                               | 类型          | 可选值                                     | 默认值 |
| ------ | ------------------------------------------------------------------ | ------------- | ------------------------------------------ | ------ |
| icon   | 设置头像的图标类型，参考 Icon 组件                                 | string        |                                            |        |
| size   | 设置头像的大小                                                     | number/string | number / large / medium / small            | large  |
| shape  | 设置头像的形状                                                     | string        | circle / square                            | circle |
| src    | 图片头像的资源地址                                                 | string        |                                            |        |
| srcSet | 以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像 | string        |                                            |        |
| alt    | 描述图像的替换文本                                                 | string        |                                            |        |
| fit    | 当展示类型为图片的时候，设置图片如何适应容器框                     | string        | fill / contain / cover / none / scale-down | cover  |

### Events

| 事件名 | 说明                                                                 | 回调参数   |
| ------ | -------------------------------------------------------------------- | ---------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 | (e: Event) |

### Slot

| 名称    | 说明               |
| ------- | ------------------ |
| default | 自定义头像展示内容 |
