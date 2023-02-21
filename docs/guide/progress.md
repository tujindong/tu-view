## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

### 线形进度条

:::demo Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容。

```html
<div class="progress-block">
	<tu-progress :percentage="50"></tu-progress>
	<tu-progress
		:percentage="100"
		:format="format"
	></tu-progress>
	<tu-progress
		:percentage="100"
		status="success"
	></tu-progress>
	<tu-progress
		:percentage="100"
		status="warning"
	></tu-progress>
	<tu-progress
		:percentage="100"
		status="exception"
	></tu-progress>
</div>

<script>
	export default {
		methods: {
			format(percentage) {
				return percentage === 100 ? "满" : `${percentage}%`;
			},
		},
	};
</script>
<style>
	.progress-block .tu-progress {
		margin-bottom: 20px;
	}
</style>
```

:::

### 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

:::demo Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```html
<div class="progress-block">
	<tu-progress
		:text-inside="true"
		:stroke-width="20"
		:percentage="70"
	></tu-progress>
	<tu-progress
		:text-inside="true"
		:stroke-width="20"
		:percentage="100"
		status="success"
	></tu-progress>
	<tu-progress
		:text-inside="true"
		:stroke-width="20"
		:percentage="80"
		status="warning"
	></tu-progress>
	<tu-progress
		:text-inside="true"
		:stroke-width="20"
		:percentage="50"
		status="exception"
	></tu-progress>
</div>
<style>
	.progress-block .tu-progress {
		margin-bottom: 20px;
	}
</style>
```

:::

### 自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

:::demo

```html
<div class="progress-block">
	<tu-progress
		:percentage="percentage"
		:color="customColor"
	></tu-progress>

	<tu-progress
		:percentage="percentage"
		:color="customColorMethod"
	></tu-progress>

	<tu-progress
		:percentage="percentage"
		:color="customColors"
	></tu-progress>
</div>

<div>
	<tu-button-group size="mini">
		<tu-button
			icon="tu-icon-minus"
			@click="decrease"
		></tu-button>
		<tu-button
			icon="tu-icon-plus"
			@click="increase"
		></tu-button>
	</tu-button-group>
</div>

<script>
	export default {
		data() {
			return {
				percentage: 20,
				customColor: "#409eff",
				customColors: [
					{ color: "#f56c6c", percentage: 20 },
					{ color: "#e6a23c", percentage: 40 },
					{ color: "#5cb87a", percentage: 60 },
					{ color: "#1989fa", percentage: 80 },
					{ color: "#6f7ad3", percentage: 100 },
				],
			};
		},
		methods: {
			customColorMethod(percentage) {
				if (percentage < 30) {
					return "#909399";
				} else if (percentage < 70) {
					return "#e6a23c";
				} else {
					return "#67c23a";
				}
			},
			increase() {
				this.percentage += 10;
				if (this.percentage > 100) {
					this.percentage = 100;
				}
			},
			decrease() {
				this.percentage -= 10;
				if (this.percentage < 0) {
					this.percentage = 0;
				}
			},
		},
	};
</script>
```

:::
