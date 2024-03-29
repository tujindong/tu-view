## Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

### 基础布局

使用单一分栏创建基础的栅格布局。

:::demo 通过 row 和 col 组件，并通过 col 组件的 `span` 属性就可以自由地组合布局。

```html
<tu-row>
	<tu-col :span="24"><div class="grid-content bg-purple-dark"></div></tu-col>
</tu-row>
<tu-row>
	<tu-col :span="12"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="12"><div class="grid-content bg-purple-light"></div></tu-col>
</tu-row>
<tu-row>
	<tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="8"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
</tu-row>
<tu-row>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple-light"></div></tu-col>
</tu-row>

<style>
	.tu-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		border-radius: 1px;
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
	}
</style>
```

:::

### 分栏间隔

分栏之间存在间隔。

:::demo Row 组件 提供 `gutter` 属性来指定每一栏之间的间隔，默认间隔为 0。

```html
<tu-row :gutter="20">
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>

<style>
	.tu-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
	}
</style>
```

:::

### 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

:::demo

```html
<tu-row :gutter="20">
	<tu-col :span="16"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row :gutter="20">
	<tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row :gutter="20">
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="16"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>

<style>
	.tu-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background: #e4ebf5;
	}
</style>
```

:::

### 分栏偏移

支持偏移指定的栏数。

:::demo 通过制定 col 组件的 `offset` 属性可以指定分栏偏移的栏数。

```html
<tu-row :gutter="20">
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col
		:span="6"
		:offset="6"
		><div class="grid-content bg-purple"></div
	></tu-col>
</tu-row>
<tu-row :gutter="20">
	<tu-col
		:span="6"
		:offset="6"
		><div class="grid-content bg-purple"></div
	></tu-col>
	<tu-col
		:span="6"
		:offset="6"
		><div class="grid-content bg-purple"></div
	></tu-col>
</tu-row>
<tu-row :gutter="20">
	<tu-col
		:span="12"
		:offset="6"
		><div class="grid-content bg-purple"></div
	></tu-col>
</tu-row>

<style>
	.tu-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
		background: #e4ebf5;
	}
</style>
```

:::

### 对齐方式

通过 `flex` 布局来对分栏进行灵活的对齐。

:::demo 将 `type` 属性赋值为 'flex'，可以启用 flex 布局，并可通过 `justify` 属性来指定 start, center, end, space-between, space-around 其中的值来定义子元素的排版方式。

```html
<tu-row
	type="flex"
	class="row-bg"
>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row
	type="flex"
	class="row-bg"
	justify="center"
>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row
	type="flex"
	class="row-bg"
	justify="end"
>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row
	type="flex"
	class="row-bg"
	justify="space-between"
>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>
<tu-row
	type="flex"
	class="row-bg"
	justify="space-around"
>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple-light"></div></tu-col>
	<tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
</tu-row>

<style>
	.tu-row {
		margin-bottom: 20px;
		&:last-child {
			margin-bottom: 0;
		}
	}
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		min-height: 36px;
	}
	.row-bg {
		padding: 10px 0;
	}
</style>
```

:::

### 响应式布局

参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：`xs`、`sm`、`md`、`lg` 和 `xl`。

:::demo

```html
<tu-row :gutter="10">
	<tu-col
		:xs="8"
		:sm="6"
		:md="4"
		:lg="3"
		:xl="1"
		><div class="grid-content bg-purple"></div
	></tu-col>
	<tu-col
		:xs="4"
		:sm="6"
		:md="8"
		:lg="9"
		:xl="11"
		><div class="grid-content bg-purple-light"></div
	></tu-col>
	<tu-col
		:xs="4"
		:sm="6"
		:md="8"
		:lg="9"
		:xl="11"
		><div class="grid-content bg-purple"></div
	></tu-col>
	<tu-col
		:xs="8"
		:sm="6"
		:md="4"
		:lg="3"
		:xl="1"
		><div class="grid-content bg-purple-light"></div
	></tu-col>
</tu-row>

<style>
	.bg-purple-dark {
		background: #99a9bf;
	}
	.bg-purple {
		background: #9baacf;
	}
	.bg-purple-light {
		background: #bec8e4;
	}
	.grid-content {
		min-height: 36px;
	}
</style>
```

:::

### Row Attributes

| 参数    | 说明                                  | 类型   | 可选值                                      | 默认值 |
| ------- | ------------------------------------- | ------ | ------------------------------------------- | ------ |
| gutter  | 栅格间隔                              | number | —                                           | 0      |
| type    | 布局模式，可选 flex，现代浏览器下有效 | string | —                                           | —      |
| justify | flex 布局下的水平排列方式             | string | start/end/center/space-around/space-between | start  |
| align   | flex 布局下的垂直排列方式             | string | top/middle/bottom                           | —      |
| tag     | 自定义元素标签                        | string | \*                                          | div    |

### Col Attributes

| 参数   | 说明                                   | 类型                                        | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------------------------------------------- | ------ | ------ |
| span   | 栅格占据的列数                         | number                                      | —      | 24     |
| offset | 栅格左侧的间隔格数                     | number                                      | —      | 0      |
| push   | 栅格向右移动格数                       | number                                      | —      | 0      |
| pull   | 栅格向左移动格数                       | number                                      | —      | 0      |
| xs     | `<768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| sm     | `≥768px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| md     | `≥992px` 响应式栅格数或者栅格属性对象  | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| lg     | `≥1200px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| xl     | `≥1920px` 响应式栅格数或者栅格属性对象 | number/object (例如： {span: 4, offset: 4}) | —      | —      |
| tag    | 自定义元素标签                         | string                                      | \*     | div    |
