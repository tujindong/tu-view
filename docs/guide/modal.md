## Modal 模态框

在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Modal 弹出一个模态框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Modal。Modal 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。

```html
<template>
	<div>
		<tu-button @click="visible = true">点击打开 Modal</tu-button>

		<tu-modal
			title="提示"
			:visible.sync="visible"
			width="30%"
		>
			<span>这是一段信息</span>
			<span
				slot="footer"
				class="modal-footer"
			>
				<tu-button @click="visible = false">取 消</tu-button>
				<tu-button
					type="primary"
					@click="visible = false"
					>确 定</tu-button
				>
			</span>
		</tu-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
			};
		},
	};
</script>
<style>
	.modal-footer .tu-button {
		margin-left: 10px;
	}
</style>
```

:::

### 自定义内容

Modal 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 TuView Table 和 Form 组件的两个样例。

:::demo

```html
<!-- Table -->
<template>
	<div>
		<tu-button @click="tableVisible = true">打开嵌套表格的 Modal</tu-button>

		<tu-modal
			title="收货地址"
			:visible.sync="tableVisible"
		>
			<tu-table :data="gridData">
				<tu-table-column
					property="date"
					label="日期"
					width="150"
				></tu-table-column>
				<tu-table-column
					property="name"
					label="姓名"
					width="200"
				></tu-table-column>
				<tu-table-column
					property="address"
					label="地址"
				></tu-table-column>
			</tu-table>
		</tu-modal>

		<!-- Form -->
		<tu-button
			style="margin-left: 10px"
			@click="formVisible = true"
			>打开嵌套表单的 Modal</tu-button
		>

		<tu-modal
			title="收货地址"
			:visible.sync="formVisible"
		>
			<tu-form :model="form">
				<tu-form-item
					label="活动名称"
					:labtu-width="formLabelWidth"
				>
					<tu-input
						v-model="form.name"
						placeholder="请选择活动名称"
						autocomplete="off"
					></tu-input>
				</tu-form-item>
				<tu-form-item
					label="活动区域"
					:labtu-width="formLabelWidth"
				>
					<tu-select
						v-model="form.region"
						placeholder="请选择活动区域"
					>
						<tu-option
							label="区域一"
							value="shanghai"
						></tu-option>
						<tu-option
							label="区域二"
							value="beijing"
						></tu-option>
					</tu-select>
				</tu-form-item>
			</tu-form>
			<div
				slot="footer"
				class="modal-footer"
			>
				<tu-button @click="formVisible = false">取 消</tu-button>
				<tu-button
					type="primary"
					@click="formVisible = false"
					>确 定</tu-button
				>
			</div>
		</tu-modal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				gridData: [
					{
						date: "2022-05-02",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-04",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-01",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2022-05-03",
						name: "唐小虎",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				],
				tableVisible: false,
				formVisible: false,
				form: {
					name: "",
					region: "",
					date1: "",
					date2: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
				formLabelWidth: "100px",
			};
		},
	};
</script>
```

:::

### 嵌套的模态框

如果需要在一个 Modal 内部嵌套另一个 Modal，需要使用 `append-to-body` 属性。
:::demo 正常情况下，我们不建议使用嵌套的 Modal，如果需要在页面上同时显示多个 Modal，可以将它们平级放置。对于确实需要嵌套 Modal 的场景，我们提供了`append-to-body`属性。将内层 Modal 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Modal 和遮罩层级关系的正确。

```html
<template>
	<tu-button @click="outerVisible = true">点击打开外层 Modal</tu-button>

	<tu-Modal
		title="外层 Modal"
		:visible.sync="outerVisible"
	>
		这是一段外层信息
		<tu-Modal
			width="30%"
			title="内层 Modal"
			:visible.sync="innerVisible"
			append-to-body
		>
			这是一段内层信息
		</tu-Modal>
		<div
			slot="footer"
			class="modal-footer"
		>
			<tu-button @click="outerVisible = false">取 消</tu-button>
			<tu-button
				type="primary"
				@click="innerVisible = true"
				>打开内层 Modal</tu-button
			>
		</div>
	</tu-Modal>
</template>

<script>
	export default {
		data() {
			return {
				outerVisible: false,
				innerVisible: false,
			};
		},
	};
</script>
<style>
	.modal-footer .tu-button {
		margin-left: 10px;
	}
</style>
```

:::

### 居中布局

标题和底部可水平居中

:::demo 将`center`设置为`true`即可使标题和底部居中。`center`仅影响标题和底部区域。Modal 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。

```html
<tu-button @click="visible = true">点击打开 Modal</tu-button>

<tu-modal
	title="提示"
	:visible.sync="visible"
	width="30%"
	center
>
	<span>需要注意的是内容是默认不居中的</span>
	<span
		slot="footer"
		class="modal-footer"
	>
		<tu-button @click="visible = false">取 消</tu-button>
		<tu-button
			type="primary"
			@click="visible = false"
			>确 定</tu-button
		>
	</span>
</tu-modal>

<script>
	export default {
		data() {
			return {
				visible: false,
			};
		},
	};
</script>
```

:::

:::tip
Modal 的内容是懒渲染的，即在第一次被打开之前，传入的默认 slot 不会被渲染到 DOM 上。因此，如果需要执行 DOM 操作，或通过 `ref` 获取相应组件，请在 `open` 事件回调中进行。
:::

:::tip
如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Modal 的 `open` 和 `close` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。
:::

### Attributes

| 参数                  | 说明                                                                        | 类型                                | 可选值 | 默认值 |
| --------------------- | --------------------------------------------------------------------------- | ----------------------------------- | ------ | ------ |
| visible               | 是否显示 Dialog，支持 .sync 修饰符                                          | boolean                             | —      | false  |
| title                 | Modal 的标题，也可通过具名 slot （见下表）传入                              | string                              | —      | —      |
| width                 | Modal 的宽度                                                                | string                              | —      | 50%    |
| fullscreen            | 是否为全屏 Modal                                                            | boolean                             | —      | false  |
| top                   | Modal CSS 中的 margin-top 值                                                | string                              | —      | 15vh   |
| modal                 | 是否需要遮罩层                                                              | boolean                             | —      | true   |
| modal-append-to-body  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Modal 的父元素上 | boolean                             | —      | true   |
| append-to-body        | Modal 自身是否插入至 body 元素上。嵌套的 Modal 必须指定该属性并赋值为 true  | boolean                             | —      | false  |
| lock-scroll           | 是否在 Modal 出现时将 body 滚动锁定                                         | boolean                             | —      | true   |
| custom-class          | Modal 的自定义类名                                                          | string                              | —      | —      |
| close-on-click-modal  | 是否可以通过点击 modal 关闭 Modal                                           | boolean                             | —      | true   |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Modal                                             | boolean                             | —      | true   |
| show-close            | 是否显示关闭按钮                                                            | boolean                             | —      | true   |
| before-close          | 关闭前的回调，会暂停 Modal 的关闭                                           | function(done)，done 用于关闭 Modal | —      | —      |
| center                | 是否对头部和底部采用居中布局                                                | boolean                             | —      | false  |
| destroy-on-close      | 关闭时销毁 Modal 中的元素                                                   | boolean                             | —      | false  |

### Slot

| name   | 说明                   |
| ------ | ---------------------- |
| —      | Modal 的内容           |
| title  | Modal 标题区的内容     |
| footer | Modal 按钮操作区的内容 |

### Events

| 事件名称 | 说明                       | 回调参数 |
| -------- | -------------------------- | -------- |
| open     | Modal 打开的回调           | —        |
| opened   | Modal 打开动画结束时的回调 | —        |
| close    | Modal 关闭的回调           | —        |
| closed   | Modal 关闭动画结束时的回调 | —        |
