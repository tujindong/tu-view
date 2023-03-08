<template>
	<tu-row :gutter="20">
		<tu-col :span="12">
			<tu-select
				v-model="value1"
				multiple
				placeholder="请选择"
			>
				<tu-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</tu-option>
			</tu-select>
		</tu-col>
		<tu-col :span="12">
			<tu-select
				v-model="value2"
				multiple
				collapse-tags
				placeholder="请选择"
			>
				<tu-option
					v-for="item in options"
					:key="item.value"
					:label="item.label"
					:value="item.value"
				>
				</tu-option>
			</tu-select>
		</tu-col>
	</tu-row>
</template>

<script>
	export default {
		data() {
			return {
				options: [
					{
						value: "banana",
						label: "香蕉",
					},
					{
						value: "apple",
						label: "苹果",
					},
					{
						value: "orange",
						label: "橙子",
					},
					{
						value: "watermelon",
						label: "西瓜",
					},
					{
						value: "durian",
						label: "榴莲",
					},
				],
				value1: [],
				value2: [],
			};
		},
	};
</script>
