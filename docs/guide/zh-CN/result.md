## Result 结果

用于对用户的操作结果或者异常状态做反馈。

### 基础用法

:::demo

```html
<template>
	<tu-row>
		<tu-col
			:sm="12"
			:lg="6"
		>
			<tu-result
				icon="success"
				title="成功提示"
				subTitle="请根据提示进行操作"
			>
				<template slot="extra">
					<tu-button size="medium">返回</tu-button>
				</template>
			</tu-result>
		</tu-col>
		<tu-col
			:sm="12"
			:lg="6"
		>
			<tu-result
				icon="warning"
				title="警告提示"
				subTitle="请根据提示进行操作"
			>
				<template slot="extra">
					<tu-button size="medium">返回</tu-button>
				</template>
			</tu-result>
		</tu-col>
		<tu-col
			:sm="12"
			:lg="6"
		>
			<tu-result
				icon="error"
				title="错误提示"
				subTitle="请根据提示进行操作"
			>
				<template slot="extra">
					<tu-button size="medium">返回</tu-button>
				</template>
			</tu-result>
		</tu-col>
		<tu-col
			:sm="12"
			:lg="6"
		>
			<tu-result
				icon="info"
				title="信息提示"
				subTitle="请根据提示进行操作"
			>
				<template slot="extra">
					<tu-button size="medium">返回</tu-button>
				</template>
			</tu-result>
		</tu-col>
	</tu-row>
</template>
```

:::

### 自定义内容

:::demo

```html
<template>
	<tu-result
		title="404"
		subTitle="抱歉，请求错误"
	>
		<template slot="icon">
			<tu-image
				style="width: 300px"
				src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp"
			></tu-image>
		</template>
		<template slot="extra">
			<tu-button>返回</tu-button>
		</template>
	</tu-result>
</template>
```

:::

### Result Attributes

| 参数      | 说明     | 类型   | 可选值                           | 默认值 |
| --------- | -------- | ------ | -------------------------------- | ------ |
| title     | 标题     | string | —                                | —      |
| sub-title | 二级标题 | string | —                                | —      |
| icon      | 图标类型 | string | success / warning / info / error | info   |

### Result Slots

| Name     | 说明               |
| -------- | ------------------ |
| icon     | 自定义图标         |
| title    | 自定义标题         |
| subTitle | 自定义二级标题     |
| extra    | 自定义底部额外区域 |
