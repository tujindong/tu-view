## Clock 时钟

模拟表盘的时钟，显示当前时间

### 基础用法

表盘宽度和高度皆为自适应，需要指定父级或当前表盘的宽高。

:::demo Clock 可通过设置 time 值指定一个固定的时间。

```html
<div class="clock-demo">
	<div class="clock">
		<p>当前时间</p>
		<tu-clock></tu-clock>
	</div>
	<div class="clock">
		<p>固定时间</p>
		<tu-clock time="09:20:30:"></tu-clock>
	</div>
</div>
<style>
	.clock-demo {
		display: flex;
		height: 300px;
	}
	.clock-demo .clock {
		text-align: center;
		width: 200px;
		height: 200px;
		margin-right: 80px;
	}
</style>
```

:::

### Attributes

| 参数 | 说明         | 类型   | 可选值 | 默认值 |
| ---- | ------------ | ------ | ------ | ------ |
| time | 指定固定时间 | string | —      | —      |
