## Loading 加载

加载数据时显示动效。

### 区域加载

在表格等容器中加载数据时显示。

:::demo 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 DOM 中的 body 上。

```html
<template>
	<div>
		<tu-button
			style="margin-bottom: 20px"
			@click="loading = !loading"
			>切换loading</tu-button
		>
		<tu-table
			v-loading="loading"
			:data="tableData"
			style="width: 100%"
		>
			<tu-table-column
				prop="date"
				label="日期"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
			>
			</tu-table-column>
		</tu-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2022-05-02",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
					{
						date: "2016-05-02",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
					{
						date: "2016-05-04",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
				],
				loading: false,
			};
		},
	};
</script>
```

:::

### 自定义

可自定义加载文案、图标和背景色。

:::demo 在绑定了`v-loading`指令的元素上添加`tu-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`tu-loading-spinner`和`tu-loading-background`属性分别用来设定图标类名和背景色值。

```html
<template>
	<div>
		<tu-button
			style="margin-bottom: 20px"
			@click="loading = !loading"
			>切换loading</tu-button
		>
		<tu-table
			v-loading="loading"
			tu-loading-text="拼命加载中"
			tu-loading-background="rgba(0, 0, 0, 0.8)"
			:data="tableData"
			style="width: 100%"
		>
			<tu-table-column
				prop="date"
				label="日期"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="name"
				label="姓名"
				width="180"
			>
			</tu-table-column>
			<tu-table-column
				prop="address"
				label="地址"
			>
			</tu-table-column>
		</tu-table>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				tableData: [
					{
						date: "2022-05-02",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
					{
						date: "2016-05-02",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
					{
						date: "2016-05-04",
						name: "唐小虎",
						address: "合肥市高新区创新大道 121 号",
					},
				],
				loading: false,
			};
		},
	};
</script>
```

:::

### 整页加载

页面数据加载时显示。

:::demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。

```html
<template>
	<div>
		<tu-button
			style="margin-right: 8px"
			@click="openFullScreen1"
			v-loading.fullscreen.lock="fullscreenLoading"
		>
			指令方式
		</tu-button>
		<tu-button @click="openFullScreen2"> 服务方式 </tu-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				fullscreenLoading: false,
			};
		},
		methods: {
			openFullScreen1() {
				this.fullscreenLoading = true;
				setTimeout(() => {
					this.fullscreenLoading = false;
				}, 2000);
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: "Loading",
					background: "rgba(0, 0, 0, 0.7)",
				});
				setTimeout(() => {
					loading.close();
				}, 2000);
			},
		},
	};
</script>
```

:::

### Options

| 参数        | 说明                                                                                                                                       | 类型          | 可选值 | 默认值        |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------ | ------------- |
| target      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string | —      | document.body |
| body        | 同 `v-loading` 指令中的 `body` 修饰符                                                                                                      | boolean       | —      | false         |
| fullscreen  | 同 `v-loading` 指令中的 `fullscreen` 修饰符                                                                                                | boolean       | —      | true          |
| lock        | 同 `v-loading` 指令中的 `lock` 修饰符                                                                                                      | boolean       | —      | false         |
| text        | 显示在加载图标下方的加载文案                                                                                                               | string        | —      | —             |
| spinner     | 自定义加载图标类名                                                                                                                         | string        | —      | —             |
| background  | 遮罩背景色                                                                                                                                 | string        | —      | —             |
| customClass | Loading 的自定义类名                                                                                                                       | string        | —      | —             |
