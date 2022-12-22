## Tag 标签

用于标记和选择。

### 基础用法

:::demo 可以通过`color`属性来自定义标签颜色。

```html
<tu-tag>默认</tu-tag>
<tu-tag color="#67c23a">绿色</tu-tag>
<tu-tag color="#409eff">蓝色</tu-tag>
<tu-tag color="#f56c6c">红色</tu-tag>
<tu-tag color="#e6a23c">橙色</tu-tag>
```

:::

### 可移除标签

:::demo 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。

```html
<tu-tag v-for="(tag, index) in tags" :key="tag.name" :closable="tags.length !== 1" :color="tag.color" effect="plain" @close="handleClose(index)"> {{tag.name}} </tu-tag>

<script>
	export default {
		data() {
			return {
				tags: [
					{ name: "默认", color: "" },
					{ name: "绿色", color: "#67c23a" },
					{ name: "蓝色", color: "#409eff" },
					{ name: "红色", color: "#f56c6c" },
					{ name: "橙色", color: "#e6a23c" },
				],
			};
		},

		methods: {
			handleClose(index) {
				this.tags.splice(index, 1);
			},
		},
	};
</script>
```

:::

### 不同尺寸

Tag 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`large`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<tu-row>
	<tu-tag size="large">大型标签</tu-tag>
	<tu-tag size="medium">中等标签</tu-tag>
	<tu-tag size="small">小型标签</tu-tag>
	<tu-tag size="mini">超小标签</tu-tag>
</tu-row>
```

:::

### 不同主题

Tag 组件提供了四个不同的主题：`light` 、`dark`、`plain` 和 `shadow`

:::demo 通过设置`effect`属性来改变主题，默认为 `light`

```html
<tu-row>
	<tu-tag>默认</tu-tag>
	<tu-tag color="#67c23a">绿色</tu-tag>
	<tu-tag color="#409eff">蓝色</tu-tag>
	<tu-tag color="#f56c6c">红色</tu-tag>
	<tu-tag color="#e6a23c">橙色</tu-tag>
</tu-row>
<tu-row>
	<tu-tag effect="dark">默认</tu-tag>
	<tu-tag effect="dark" color="#67c23a">绿色</tu-tag>
	<tu-tag effect="dark" color="#409eff">蓝色</tu-tag>
	<tu-tag effect="dark" color="#f56c6c">红色</tu-tag>
	<tu-tag effect="dark" color="#e6a23c">橙色</tu-tag>
</tu-row>
<tu-row>
	<tu-tag effect="plain">默认</tu-tag>
	<tu-tag effect="plain" color="#67c23a">绿色</tu-tag>
	<tu-tag effect="plain" color="#409eff">蓝色</tu-tag>
	<tu-tag effect="plain" color="#f56c6c">红色</tu-tag>
	<tu-tag effect="plain" color="#e6a23c">橙色</tu-tag>
</tu-row>
<tu-row>
	<tu-tag effect="shadow">默认</tu-tag>
	<tu-tag effect="shadow" color="#67c23a">绿色</tu-tag>
	<tu-tag effect="shadow" color="#409eff">蓝色</tu-tag>
	<tu-tag effect="shadow" color="#f56c6c">红色</tu-tag>
	<tu-tag effect="shadow" color="#e6a23c">橙色</tu-tag>
</tu-row>
```

:::

### Attributes

| 参数                | 说明             | 类型    | 可选值                        | 默认值 |
| ------------------- | ---------------- | ------- | ----------------------------- | ------ |
| closable            | 是否可关闭       | boolean | —                             | false  |
| disable-transitions | 是否禁用渐变动画 | boolean | —                             | false  |
| color               | 背景色           | string  | —                             | —      |
| size                | 尺寸             | string  | large / medium / small        | —      |
| effect              | 主题             | string  | dark / light / plain / shadow | light  |

### Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| click    | 点击 Tag 时触发的事件 | —        |
| close    | 关闭 Tag 时触发的事件 | —        |
