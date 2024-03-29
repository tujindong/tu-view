## Calendar 日历

显示日期

### 基本

:::demo 设置 `value` 来指定当前显示的月份。如果 `value` 未指定，则显示当月。`value` 支持 `v-model` 双向绑定。

```html
<template>
	<tu-calendar v-model="value"> </tu-calendar>
</template>

<script>
	export default {
		data() {
			return {
				value: new Date(),
			};
		},
	};
</script>
```

:::

### 自定义内容

:::demo 通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。

```html
<template>
	<tu-calendar>
		<template
			slot="dateCell"
			slot-scope="{date, data}"
		>
			<p :class="data.isSelected ? 'is-selected' : ''">
				{{ data.day.split('-').slice(1).join('-') }}
				<i
					v-if="data.isSelected"
					class="tu-icon-gift"
				></i>
			</p>
		</template>
	</tu-calendar>
</template>

<style>
	.is-selected {
		color: #1989fa;
	}
</style>
```

:::

### 自定义范围

:::demo 设置 `range` 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。

```html
<tu-calendar :range="['2019-03-04', '2019-03-24']"> </tu-calendar>
```

:::

### 卡片格式

:::demo 用于嵌套在空间有限的容器中。。

```html
<template>
	<div style="width: 300px">
		<tu-calendar type="card"> </tu-calendar>
	</div>
</template>
```

:::

### Attributes

| 参数              | 说明                                                                                                 | 类型               | 可选值 | 默认值 |
| ----------------- | ---------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------ |
| value / v-model   | 绑定值                                                                                               | Date/string/number | —      | —      |
| range             | 时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。 | Array              | —      | —      |
| first-day-of-week | 周起始日                                                                                             | Number             | 1 到 7 | 1      |
| type              | 类型，可以切换日历显示为卡片格式                                                                     | string             | 'card' | —      |

### dateCell scoped slot 参数

| 参数 | 说明                                                                                                                                                                              | 类型   | 可选值 | 默认值 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------ | ------ |
| date | 单元格代表的日期                                                                                                                                                                  | Date   | —      | —      |
| data | { type, isSelected, day}，`type` 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；`isSelected` 标明该日期是否被选中；`day` 是格式化的日期，格式为 yyyy-MM-dd | Object | —      | —      |
