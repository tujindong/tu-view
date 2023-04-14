## Divider 分割线

区隔内容的分割线。

### 基础用法

对不同章节的文本段落进行分割。

:::demo

```html
<template>
	<div class="divider-block">
		<p>某天下班，所有的云以张扬肆意的姿态在天空中燃烧。</p>
		<tu-divider></tu-divider>
		<p>一时间令我怅然若失，因为我想不起来，上一次看到这么壮美的火烧云是什么时候。</p>
	</div>
</template>
<style>
	.divider-block p {
		color: #8394be;
	}
</style>
```

:::

### 设置文案

可以在分割线上自定义文案内容。

:::demo

```html
<template>
	<div class="divider-block">
		<p>看天气预报的时候，会先看你住的地方，今天好像会变得暖和</p>
		<tu-divider content-position="left">异地</tu-divider>
		<p>天气预报说你的城市会下雪，月夜的彼方，我与你相隔甚远，叹息一下子化作了一片小小的云</p>
		<tu-divider><i class="tu-icon-cloud"></i></tu-divider>
		<p>已经不再增加关于你的记忆，采摘了一片在手中摆弄着，叹息着，你现在过得还好吗</p>
		<tu-divider content-position="right">失恋</tu-divider>
	</div>
</template>
<style>
	.divider-block p {
		color: #8394be;
	}
</style>
```

:::

### 垂直分割

:::demo

```html
<template>
	<div class="divider-block">
		<span>雨纷纷</span>
		<tu-divider direction="vertical"></tu-divider>
		<span>旧故里</span>
		<tu-divider direction="vertical"></tu-divider>
		<span>草木深</span>
	</div>
</template>
<style>
	.divider-block span {
		color: #8394be;
		font-size: 14px;
	}
</style>
```

:::

### Divider Attributes

| 参数             | 说明                   | 类型    | 可选值                | 默认值     |
| ---------------- | ---------------------- | ------- | --------------------- | ---------- |
| direction        | 设置分割线方向         | string  | horizontal / vertical | horizontal |
| content-position | 设置分割线文案的位置   | string  | left / right / center | center     |
| shadow           | 设置分割线是否显示阴影 | boolean | ——                    |
