## Statistic 统计数值

用于突出某个或某组数字时，如显示数值，如金额，排名等。

倒计时模式

### 基础用法

组件提供千分位的展示，不过可以通过 rate 来设置相应万分位等
:::demo

```html
<template>
	<div>
		<tu-row :gutter="20">
			<tu-col :span="6">
				<div>
					<tu-statistic
						group-separator=","
						:precision="2"
						:value="value2"
						:title="title"
					></tu-statistic>
				</div>
			</tu-col>
			<tu-col :span="6">
				<div>
					<tu-statistic title="男女比">
						<template slot="formatter"> 456/2 </template>
					</tu-statistic>
				</div>
			</tu-col>
			<tu-col :span="6">
				<div>
					<tu-statistic
						group-separator=","
						:precision="2"
						decimal-separator="."
						:value="value1"
						:title="title"
					>
						<template slot="prefix">
							<i
								class="tu-icon-user-delete"
								style="color: #f56c6c"
							></i>
						</template>
						<template slot="suffix">
							<i
								class="tu-icon-user-add"
								style="color: #6d5dfc"
							></i>
						</template>
					</tu-statistic>
				</div>
			</tu-col>
			<tu-col :span="6">
				<div>
					<tu-statistic
						:value="like ? 521 : 520"
						title="点赞"
					>
						<template slot="suffix">
							<span
								@click="like = !like"
								class="like"
							>
								<i
									class="tu-icon-star-on"
									style="color:red"
									v-show="!!like"
								></i>
								<i
									class="tu-icon-star-off"
									v-show="!like"
								></i>
							</span>
						</template>
					</tu-statistic>
				</div>
			</tu-col>
		</tu-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				like: true,
				value1: 4154.564,
				value2: 2222,
				title: "今年的增长",
			};
		},
	};
</script>
<style lang="scss">
	.like {
		cursor: pointer;
		font-size: 25px;
		display: inline-block;
	}
</style>
```

:::

### 倒计时

:::warning
如果需要在原基础上添加时间，请注意：整体的时间（添加的时间量和原定时间）必须是**未来**的时间节点，否则依旧是倒计时结束
:::
:::demo 通过 `value` 提供未来的时间，将开启倒计时功能

```html
<template>
	<div>
		<tu-row :gutter="20">
			<tu-col :span="14">
				<div style="width: 100%; display: inline-block; ">
					<tu-statistic
						:value="deadline2"
						time-indices
						title="商品降价"
					>
						<template slot="suffix"> 抢购即将开始 </template>
					</tu-statistic>
				</div>
				<div style="width: 100%; display: inline-block; margin-top: 50px; ">
					<tu-statistic
						@finish="hilarity"
						:value="deadline3"
						time-indices
						title="添加时间"
					>
						<template slot="suffix">
							<tu-button
								style="margin-left: 8px;"
								size="small"
								@click="add"
								>增加10秒</tu-button
							>
						</template>
					</tu-statistic>
				</div>
			</tu-col>
			<tu-col :span="10">
				<tu-card
					shadow="inset"
					style="width: 100%;"
					title="《明日歌》"
				>
					<tu-button
						slot="extra"
						size="mini"
						@click="handlePause"
						>{{stop ? '暂停' : '开始'}}</tu-button
					>
					<div style="font-size: 14px;text-align: center; ">明日复明日，我生待明日</div>
					<div style="font-size: 14px;text-align: center;">万事成蹉跎，明日何其多</div>
					<div style="margin-top: 16px;"></div>
					<tu-statistic
						ref="statistic"
						@finish="hilarity"
						format="HH:mm:ss"
						:value="deadline4"
						title="距离明日："
						time-indices
					>
					</tu-statistic>
				</tu-card>
			</tu-col>
		</tu-row>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				deadline2: Date.now() + 1000 * 60 * 60 * 8,
				deadline3: Date.now() + 1000 * 60 * 30,
				deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
				stop: true,
			};
		},
		methods: {
			hilarity() {
				this.$notify({
					title: "提示",
					message: "寸金难买寸光阴",
					duration: 0,
				});
			},
			handlePause() {
				this.$refs.statistic.suspend(this.stop);
				this.stop = !this.stop;
			},
			add() {
				this.deadline3 = this.deadline3 + 1000 * 10;
			},
		},
	};
</script>
```

:::

### Statistic Attributes

| 参数              | 说明             | 类型                        | 可选值 | 默认值 |
| ----------------- | ---------------- | --------------------------- | ------ | ------ |
| value             | 数值内容         | string \| number            | —      | —      |
| decimal-separator | 设置小数点       | string                      | —      | .      |
| formatter         | 自定义数值展示   | v-slot \|({value}) => VNode | —      | —      |
| group-separator   | 设置千分位标识符 | string                      | —      | ,      |
| precision         | 数值精度         | number                      | —      | 0      |
| prefix            | 设置数值的前缀   | string \| v-slot            | —      | —      |
| suffix            | 设置数值的后缀   | string \| v-slot            | —      | —      |
| title             | 数值的标题       | string \| v-slot            | —      | —      |
| value-style       | 设置数值的样式   | object                      | —      | —      |
| rate              | 设置倍率         | number                      | —      | 1000   |

### Statistic Slots

| name      | 说明       |
| --------- | ---------- |
| prefix    | 数值的前缀 |
| suffix    | 数值的后缀 |
| formatter | 数值内容   |
| title     | 数值的标题 |

### Statistic.Countdown Attributes

| 参数         | 说明               | 类型    | 可选值      | 默认值     |
| ------------ | ------------------ | ------- | ----------- | ---------- |
| time-indices | 是否开启倒计时功能 | boolean | true\|false | false      |
| value        | 必填值，输入绑定值 | string  | —           | —          |
| format       | 格式化倒计时展示   | string  | —           | 'HH:mm:ss' |

### Statistic.Countdown Events

| 事件名称 | 说明                   | 回调参数         |
| -------- | ---------------------- | ---------------- |
| change   | 在`倒计时`的功能中开启 | (value: Date)    |
| finish   | 在`倒计时` 完成后启动  | (value: boolean) |

### Statistic Methods

| 方法名  | 说明       | 参数            | 回调参数      |
| ------- | ---------- | --------------- | ------------- |
| suspend | 暂停倒计时 | (value:boolean) | (value: Date) |
