## DatePicker 日期选择器

用于选择或输入日期

### 选择日

以「日」为基本单位，基础的日期选择控件

:::demo 基本单位由`type`属性指定。快捷选项需配置`picker-options`对象中的`shortcuts`，禁用日期通过 `disabledDate` 设置，传入函数

```html
<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<p>默认</p>
			<tu-date-picker v-model="value1" type="date" placeholder="选择日期"> </tu-date-picker>
		</tu-col>
		<tu-col :span="12">
			<p>带快捷选项</p>
			<tu-date-picker v-model="value2" type="date" placeholder="选择日期" :picker-options="pickerOptions"> </tu-date-picker>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		data() {
			return {
				pickerOptions: {
					disabledDate(time) {
						return time.getTime() > Date.now();
					},
					shortcuts: [
						{
							text: "今天",
							onClick(picker) {
								picker.$emit("pick", new Date());
							},
						},
						{
							text: "昨天",
							onClick(picker) {
								const date = new Date();
								date.setTime(date.getTime() - 3600 * 1000 * 24);
								picker.$emit("pick", date);
							},
						},
						{
							text: "一周前",
							onClick(picker) {
								const date = new Date();
								date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
								picker.$emit("pick", date);
							},
						},
					],
				},
				value1: "",
				value2: "",
			};
		},
	};
</script>
```

:::
