## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `tu-icon-iconName` 来使用即可。例如：

:::demo

```html
<template>
	<div class="icon-block-demo">
		<i class="tu-icon-edit"></i>
		<i class="tu-icon-share"></i>
		<i class="tu-icon-delete"></i>
	</div>
</template>

<style>
	.icon-block-demo [class*="tu-icon-"] {
		margin: 0 20px;
		font-size: 1.2em;
		vertical-align: middle;
		color: #9baacf;
	}
</style>
```

:::

### 图标集合

<div class="icon-block">
    <p style="font-weight: bold;">{{$icon.line.name}}</p>
    <div class="icon-block-item" v-for="line in $icon.line.children">
        <p>{{line.name}}</p>
        <div class="icon-list">
            <div class="icon-item" v-for="icon in line.icons">
                <i :class="`tu-icon-${icon}`"></i>
                <span class="icon-item-name">{{`tu-icon-${icon}`}}</span>
            </div>
        </div>
    </div>
    <p style="font-weight: bold;">{{$icon.fill.name}}</p>
    <div class="icon-block-item" v-for="fill in $icon.fill.children">
        <p>{{fill.name}}</p>
    </div>
</div>
