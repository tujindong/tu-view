## Collapse 折叠面板

通过折叠面板收纳内容区域

### 基础用法

可同时展开多个面板，面板之间不影响

:::demo

```html
<template>
	<tu-collapse
		v-model="activeNames"
		@change="handleChange"
	>
		<tu-collapse-item
			title="面板标题一"
			name="1"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>

<script>
	export default {
		data() {
			return {
				activeNames: [""],
			};
		},
		methods: {
			handleChange(val) {
				console.log(val);
			},
		},
	};
</script>
```

:::

### 手风琴效果

每次只能展开一个面板

:::demo 通过 `accordion` 属性来设置是否以手风琴模式显示。

```html
<template>
	<tu-collapse
		v-model="activeName"
		accordion
	>
		<tu-collapse-item
			title="面板标题一"
			name="1"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>

<script>
	export default {
		data() {
			return {
				activeName: "",
			};
		},
	};
</script>
```

:::

### 自定义面板标题

除了可以通过 `title` 属性以外，还可以通过具名 `slot` 来实现自定义面板的标题内容，以实现增加图标等效果。

:::demo

```html
<template>
	<tu-collapse accordion>
		<tu-collapse-item name="1">
			<template slot="title">
				<div class="panel-header">
					<span>面板标题一</span>
					<tu-icon
						style="color: #f56c6c; margin-left: 4px"
						name="message"
					></tu-icon>
				</div>
			</template>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>
<script>
	export default {
		methods: {
			handleSetting() {
				console.log("setting!");
			},
		},
	};
</script>
<style>
	.panel-header {
		width: 100%;
		display: flex;
		align-items: center;
	}
</style>
```

:::

### 额外节点

设置额外节点可进行一些操作。

:::demo 通过 extra 可以设置额外节点。extra 单击可以以设置 stop 修饰符，以阻止当前项目展开。。

```html
<template>
	<tu-collapse>
		<tu-collapse-item
			title="面板标题一"
			name="1"
		>
			<template slot="extra">
				<tu-icon
					name="setting"
					@click.native.stop="handleSetting"
				></tu-icon>
			</template>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>

<script>
	export default {
		methods: {
			handleSetting() {
				this.$message("setting!");
			},
		},
	};
</script>
```

### 额外节点

通过 extra 可以设置额外节点。extra 单击可以以设置 stop 修饰符，以阻止当前项目展开。

:::demo

```html
<template>
	<tu-collapse>
		<tu-collapse-item
			title="面板标题一"
			name="1"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>
```

:::

### 带有边框

:::demo 设置`border`属性可以渲染为带有边框的折叠面板。

```html
<template>
	<tu-collapse border>
		<tu-collapse-item
			title="面板标题一"
			name="1"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题二"
			name="2"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
		<tu-collapse-item
			title="面板标题三"
			name="3"
		>
			金色的朝阳照亮了每一颗草叶上的露珠，路边的风景依旧是清朗的高速和苍茫的大海，还有永远嬉皮笑脸的云朵，我已经能够跟着车载音响里的每一首歌哼唱。
		</tu-collapse-item>
	</tu-collapse>
</template>
```

:::

### Collapse Attributes

| 参数            | 说明                                                                      | 类型           | 可选值 | 默认值 |
| --------------- | ------------------------------------------------------------------------- | -------------- | ------ | ------ |
| value / v-model | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | string / array | —      | —      |
| accordion       | 是否手风琴模式                                                            | boolean        | —      | false  |
| border          | 是否显示边框                                                              | boolean        | —      | false  |

### Collapse Events

| 事件名称 | 说明                                                                                       | 回调参数                      |
| -------- | ------------------------------------------------------------------------------------------ | ----------------------------- |
| change   | 当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`) | (activeNames: array / string) |

### Collapse Item Attributes

| 参数     | 说明       | 类型          | 可选值 | 默认值 |
| -------- | ---------- | ------------- | ------ | ------ |
| name     | 唯一标志符 | string/number | —      | —      |
| title    | 面板标题   | string        | —      | —      |
| disabled | 是否禁用   | boolean       | —      | —      |
