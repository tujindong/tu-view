## Image 图片

图片容器，在保留原生 img 的特性下，支持懒加载，自定义占位、加载失败等

### 基础用法

:::demo 可通过`fit`确定图片如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)。

```html
<template>
	<div class="image-block">
		<div
			class="block"
			v-for="fit in fits"
			:key="fit"
		>
			<p class="demonstration">{{ fit }}</p>
			<tu-image
				style="width: 100px; height: 100px"
				:src="url"
				:fit="fit"
			></tu-image>
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
	.image-block {
		display: flex;
		text-align: center;
		justify-content: space-between;
	}
	.image-block .block {
		flex: 1;
		display: flex;
		flex-direction: column;
		flex-grow: 0;
	}
</style>
```

:::

### 占位内容

:::demo 可通过`slot = placeholder`可自定义占位内容

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p class="demonstration">默认</p>
			<tu-image :src="src"></tu-image>
		</tu-col>
		<tu-col :span="12">
			<p class="demonstration">自定义</p>
			<tu-image :src="src">
				<div
					slot="placeholder"
					class="image-slot"
				>
					加载中<span class="dot">...</span>
				</div>
			</tu-image>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		data() {
			return {
				src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
			};
		},
	};
</script>
```

:::

### 加载失败

:::demo 可通过`slot = error`可自定义加载失败内容

```html
<template>
	<tu-row
		:gutter="20"
		class="demo-image__error"
	>
		<tu-col :span="12">
			<p class="demonstration">默认</p>
			<tu-image></tu-image>
		</tu-col>
		<tu-col :span="12">
			<p class="demonstration">自定义</p>
			<tu-image>
				<div
					slot="error"
					class="image-slot"
				>
					<i class="tu-icon-image"></i>
				</div>
			</tu-image>
		</tu-col>
	</tu-row>
</template>
<style>
	.demo-image__error .tu-image,
	.image-slot {
		width: 300px;
		height: 200px;
	}
	.demo-image__error .image-slot {
		display: flex;
		justify-content: center;
		align-items: center;
		background: rgb(223, 226, 231);
		font-size: 20px;
		color: "#8394be";
	}
</style>
```

:::

### 懒加载

:::demo 可通过`lazy`开启懒加载功能，当图片滚动到可视范围内才会加载。可通过`scroll-container`来设置滚动容器，若未定义，则为最近一个`overflow`值为`auto`或`scroll`的父元素。

```html
<template>
	<div class="demo-image__lazy">
		<tu-image
			v-for="url in urls"
			:key="url"
			:src="url"
			lazy
		></tu-image>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				urls: [
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp",
				],
			};
		},
	};
</script>
<style>
	.demo-image__lazy {
		height: 300px;
		overflow-y: auto;
	}
	.demo-image__lazy .tu-image {
		display: block;
		min-height: 200px;
		margin-bottom: 10px;
	}
</style>
```

:::

### 大图预览

:::demo 可通过 `previewSrcList` 开启预览大图的功能。

```html
<template>
	<div class="demo-image__preview">
		<tu-image
			style="width: 100px; height: 100px"
			:src="url"
			:preview-src-list="srcList"
		>
		</tu-image>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				url: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
				srcList: [
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
				],
			};
		},
	};
</script>
<style>
	.demo-image__preview {
		width: 100px;
		height: 100px;
	}
</style>
```

:::

### Attributes

| 参数             | 说明                                                                                                     | 类型                 | 可选值                                     | 默认值                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------- | -------------------- | ------------------------------------------ | ---------------------------------------------- |
| src              | 图片源，同原生                                                                                           | string               | —                                          | -                                              |
| fit              | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) | string               | fill / contain / cover / none / scale-down | -                                              |
| alt              | 原生 alt                                                                                                 | string               | -                                          | -                                              |
| referrer-policy  | 原生 referrerPolicy                                                                                      | string               | -                                          | -                                              |
| lazy             | 是否开启懒加载                                                                                           | boolean              | —                                          | false                                          |
| scroll-container | 开启懒加载后，监听 scroll 事件的容器                                                                     | string / HTMLElement | —                                          | 最近一个 overflow 值为 auto 或 scroll 的父元素 |
| preview-src-list | 开启图片预览功能                                                                                         | Array                | —                                          | -                                              |
| z-index          | 设置图片预览的 z-index                                                                                   | Number               | —                                          | 2000                                           |

### Events

| 事件名称 | 说明             | 回调参数   |
| -------- | ---------------- | ---------- |
| load     | 图片加载成功触发 | (e: Event) |
| error    | 图片加载失败触发 | (e: Error) |

### Slots

| 名称        | 说明                 |
| ----------- | -------------------- |
| placeholder | 图片未加载的占位内容 |
| error       | 加载失败的内容       |
