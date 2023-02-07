## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `tu-icon-iconName` 来使用即可。例如：

:::demo

```html
<template>
	<div class="icon-block">
		<i class="tu-icon-edit"></i>
		<i class="tu-icon-share"></i>
		<i class="tu-icon-delete"></i>
	</div>
</template>

<style>
	.icon-block [class*="tu-icon-"] {
		color: #555555;
		margin: 0 20px;
		font-size: 1.2em;
		vertical-align: middle;
	}
</style>
```

:::

### 图标集合

<div class="icon-block">
    <p style="font-weight: bold;">线框风格</p>
    <div class="icon-block-item" v-for="name in $icon.line"></div>
</div>
