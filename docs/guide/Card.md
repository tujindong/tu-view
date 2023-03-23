## Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

包含标题，内容和操作。

:::demo Card 包含标题、内容、操作区域。可通过设置 size 为 large 或者 small，控制尺寸，默认为中等 medium 尺寸大小。

```html
<div style="width: 300px">
	<tu-card title="卡片名称">
		<tu-icon
			slot="extra"
			name="close"
			style="color: #9baacf"
		></tu-icon>
		<div
			v-for="i in 4"
			:key="i"
		>
			{{ "列表内容 " + i }}
		</div>
	</tu-card>
</div>
```

:::

### 简单卡片

卡片可以只有内容区域。

:::demo

```html
<div style="width: 300px">
	<tu-card>
		<div
			v-for="i in 4"
			:key="i"
			class="text item"
		>
			{{'列表内容 ' + i }}
		</div>
	</tu-card>
</div>
```

:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，此处还使用了布局组件。

```html
<tu-row>
	<tu-col
		:span="7"
		v-for="(i, index) in 2"
		:key="i"
		:offset="index > 0 ? 2 : 0"
	>
		<tu-card :body-style="{ padding: '0px' }">
			<img
				style="width: 250px; height: 300px"
				src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
			/>
			<div style="padding: 14px">
				<span>欧洲风情街</span>
			</div>
		</tu-card>
	</tu-col>
</tu-row>
```

:::

### 不同尺寸

Card 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`，通过设置`size`属性来配置它们。

```html
<tu-row>
	<tu-col
		:span="6"
		:offset="0"
	>
		<tu-card
			title="大型卡片"
			size="large"
		>
			<tu-icon
				slot="extra"
				name="close"
				style="color: #9baacf"
			></tu-icon>
			<div
				v-for="i in 4"
				:key="i"
				class="text item"
			>
				{{ "列表内容 " + i }}
			</div>
		</tu-card>
	</tu-col>
	<tu-col
		:span="6"
		:offset="1"
	>
		<tu-card title="中型卡片">
			<tu-icon
				slot="extra"
				name="close"
				style="color: #9baacf"
			></tu-icon>
			<div
				v-for="i in 4"
				:key="i"
				class="text item"
			>
				{{ "列表内容 " + i }}
			</div>
		</tu-card>
	</tu-col>
	<tu-col
		:span="6"
		:offset="1"
	>
		<tu-card
			title="小型卡片"
			size="small"
		>
			<tu-icon
				slot="extra"
				name="close"
				style="color: #9baacf"
			></tu-icon>
			<div
				v-for="i in 4"
				:key="i"
				class="text item"
			>
				{{ "列表内容 " + i }}
			</div>
		</tu-card>
	</tu-col>
</tu-row>
```

:::

### 卡片阴影

可对阴影的显示进行配置。

:::demo 通过`shadow`属性设置卡片阴影的效果`。

```html
<tu-card
	title="卡片标题"
	shadow="inset"
>
	<div
		v-for="i in 4"
		:key="i"
		class="text item"
	>
		{{'内阴影效果 ' + i }}
	</div>
</tu-card>
```

:::

### Attributes

| 参数       | 说明                 | 类型          | 可选值         | 默认值              |
| ---------- | -------------------- | ------------- | -------------- | ------------------- |
| title      | 卡片标题             | string / slot | —              | —                   |
| extra      | 卡片右上角的操作区域 | string / slot | —              | —                   |
| body-style | 设置 body 的样式     | object        | —              | { padding: '20px' } |
| shadow     | 设置阴影显示方式     | string        | inset / outset | outset              |
