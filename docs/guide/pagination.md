## Pagination 分页

当数据量过多时，使用分页分解数据。

### 基础用法

:::demo 设置`layout`，表示需要显示的内容，用逗号分隔，布局元素会依次显示。`prev`表示上一页，`next`为下一页，`pager`表示页码列表，除此以外还提供了`jumper`和`total`，`size`和特殊的布局符号`->`，`->`后的元素会靠右显示，`jumper`表示跳页元素，`total`表示总条目数，`size`用于设置每页显示的页码数量。

```html
<div class="block">
	<p>页数较少时的效果</p>
	<tu-pagination
		layout="prev, pager, next"
		:total="50"
	>
	</tu-pagination>
</div>
<div class="block">
	<p>大于7 页时的效果</p>
	<tu-pagination
		layout="prev, pager, next"
		:total="1000"
	>
	</tu-pagination>
</div>
```

:::

### 设置最大页码按钮数

:::demo 默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过`pager-count`属性可以设置最大页码按钮数。

```html
<tu-pagination
	:page-size="20"
	:pager-count="11"
	layout="prev, pager, next"
	:total="1000"
>
</tu-pagination>
```

:::

### 按钮类型的分页

:::demo 设置`button`属性可以设置按钮类型的分页。

```html
<tu-pagination
	button
	layout="prev, pager, next"
	:total="1000"
>
</tu-pagination>
```

:::

### 小型分页

在空间有限的情况下，可以使用简单的小型分页。

:::demo 只需要一个`small`属性，它接受一个`Boolean`，默认为`false`，设为`true`即可启用。

```html
<tu-pagination
	small
	layout="prev, pager, next"
	:total="50"
>
</tu-pagination>
```

:::
