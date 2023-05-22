## Descriptions 描述列表

列表形式展示多个字段。

### 基础用法

:::demo

```html
<template>
	<tu-descriptions title="用户信息">
		<tu-descriptions-item label="用户名">唐小虎</tu-descriptions-item>
		<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
		<tu-descriptions-item label="居住地">合肥市</tu-descriptions-item>
		<tu-descriptions-item label="备注">
			<tu-tag size="small">学校</tu-tag>
		</tu-descriptions-item>
		<tu-descriptions-item label="联系地址">安徽省合肥市高新区创新大道 121 号</tu-descriptions-item>
	</tu-descriptions>
</template>
```

:::

### 不同尺寸

:::demo

```html
<template>
	<div>
		<tu-radio-group
			v-model="size"
			style="margin-bottom: 20px"
		>
			<tu-radio label="large">较大</tu-radio>
			<tu-radio label="medium">中等</tu-radio>
			<tu-radio label="small">较小</tu-radio>
			<tu-radio label="mini">超小</tu-radio>
		</tu-radio-group>

		<tu-descriptions
			title="带边框列表"
			:column="3"
			:size="size"
			border
			style="margin-bottom: 30px"
		>
			<template slot="extra">
				<tu-button size="mini">操作</tu-button>
			</template>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-user"></i>
					用户名
				</template>
				唐小虎
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-mobile-phone"></i>
					手机号
				</template>
				18100000000
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-location-outline"></i>
					居住地
				</template>
				合肥市
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-tickets"></i>
					备注
				</template>
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-office-building"></i>
					联系地址
				</template>
				安徽省合肥市高新区创新大道 121 号
			</tu-descriptions-item>
		</tu-descriptions>

		<tu-descriptions
			title="无边框列表"
			:column="3"
			:size="size"
		>
			<template slot="extra">
				<tu-button size="mini">操作</tu-button>
			</template>
			<tu-descriptions-item label="用户名">唐小虎</tu-descriptions-item>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item label="居住地">合肥市</tu-descriptions-item>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item label="联系地址"
				>安徽省合肥市高新区创新大道 121 号</tu-descriptions-item
			>
		</tu-descriptions>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				size: "medium",
			};
		},
	};
</script>
```

:::

### 垂直列表

:::demo

```html
<template>
	<div>
		<tu-descriptions
			title="垂直带边框列表"
			direction="vertical"
			:column="4"
			border
			style="margin-bottom: 30px"
		>
			<tu-descriptions-item label="用户名">唐小虎</tu-descriptions-item>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item
				label="居住地"
				:span="2"
				>合肥市</tu-descriptions-item
			>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item label="联系地址"
				>安徽省合肥市高新区创新大道 121 号</tu-descriptions-item
			>
		</tu-descriptions>

		<tu-descriptions
			class="margin-top"
			title="垂直无边框列表"
			:column="4"
			direction="vertical"
		>
			<tu-descriptions-item label="用户名">唐小虎</tu-descriptions-item>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item
				label="居住地"
				:span="2"
				>合肥市</tu-descriptions-item
			>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item label="联系地址"
				>安徽省合肥市高新区创新大道 121 号</tu-descriptions-item
			>
		</tu-descriptions>
	</div>
</template>
```

:::

### 自定义样式

:::demo

```html
<template>
	<div>
		<tu-descriptions
			title="自定义样式列表"
			:column="3"
			border
		>
			<tu-descriptions-item
				label="用户名"
				label-class-name="my-label"
				content-class-name="my-content"
				>唐小虎</tu-descriptions-item
			>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item label="居住地">合肥市</tu-descriptions-item>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item
				label="联系地址"
				:contentStyle="{'text-align': 'right'}"
				>安徽省合肥市高新区创新大道 121 号</tu-descriptions-item
			>
		</tu-descriptions>
	</div>
</template>

<style>
	.my-label {
		color: #6bc43f;
	}

	.my-content {
		color: #f56c6c;
	}
</style>
```

:::

### Descriptions Attributes

| 参数             | 说明                            | 类型    | 可选值                | 默认值     |
| ---------------- | ------------------------------- | ------- | --------------------- | ---------- |
| border           | 是否带有边框                    | boolean | —                     | false      |
| column           | 一行 `Descriptions Item` 的数量 | number  | —                     | 3          |
| direction        | 排列的方向                      | string  | vertical / horizontal | horizontal |
| size             | 列表的尺寸                      | string  | medium / small / mini | —          |
| title            | 标题文本，显示在左上方          | string  | —                     | —          |
| extra            | 操作区文本，显示在右上方        | string  | —                     | —          |
| colon            | 是否显示冒号                    | boolean | —                     | true       |
| labelClassName   | 自定义标签类名                  | string  | —                     | —          |
| contentClassName | 自定义内容类名                  | string  | —                     | —          |
| labelStyle       | 自定义标签样式                  | object  | —                     | —          |
| contentStyle     | 自定义内容样式                  | object  | —                     | —          |

### Descriptions Slots

| Name  | 说明                       |
| ----- | -------------------------- |
| title | 自定义标题，显示在左上方   |
| extra | 自定义操作区，显示在右上方 |

### Descriptions Item Attributes

| 参数             | 说明           | 类型   | 可选值 | 默认值 |
| ---------------- | -------------- | ------ | ------ | ------ |
| label            | 标签文本       | string | —      | —      |
| span             | 列的数量       | number | —      | 1      |
| labelClassName   | 自定义标签类名 | string | —      | —      |
| contentClassName | 自定义内容类名 | string | —      | —      |
| labelStyle       | 自定义标签样式 | object | —      | —      |
| contentStyle     | 自定义内容样式 | object | —      | —      |

### Descriptions Item Slots

| Name  | 说明           |
| ----- | -------------- |
| label | 自定义标签文本 |
