## Scrollbar

可滚动视图区域。

### 基础用法

:::demo 虚拟滚动条效果，使用区域滚动时，需要给定 tu-scrollbar 高度和宽度。

```html
<tu-scrollbar style="height: 120px; width: 380px; background: #f0f0f0">
	<div style="width: 500px; padding: 0 16px">
		<p v-for="i in 20" :key="i">列表项{{ i }}</p>
	</div>
</tu-scrollbar>
```

:::

### Attributes

| 参数      | 说明                                                    | 类型           | 可选值 | 默认值 |
| --------- | ------------------------------------------------------- | -------------- | ------ | ------ |
| native    | 是否使用原生滚动条样式                                  | Boolean        | —      | false  |
| wrapStyle | 设置外层 wrap 的内联样式                                | Array / String | —      | —      |
| wrapClass | 设置外层 wrap 的类名                                    | string         | —      | —      |
| viewStyle | 设置滚动区域 view 的内联样式                            | Array / String | —      | —      |
| viewClass | 设置滚动区域 view 的类名                                | string         | —      | —      |
| noresize  | 如果 container 尺寸不会发生变化，最好设置它可以优化性能 | Boolean        | —      | false  |
