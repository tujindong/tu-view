<template>
	<div>
		<tu-radio-group
			v-model="size"
			style="margin-bottom: 20px"
		>
			<tu-radio label="small">较小</tu-radio>
			<tu-radio label="medium">中等</tu-radio>
			<tu-radio label="large">较大</tu-radio>
		</tu-radio-group>
		<tu-form
			ref="tuForm"
			:model="form"
			label-width="80px"
			:size="size"
		>
			<tu-form-item label="活动名称">
				<tu-input
					v-model="form.name"
					placeholder="请输入活动名称"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动区域">
				<tu-select
					v-model="form.region"
					placeholder="请选择活动区域"
				>
					<tu-option
						label="区域一"
						value="shanghai"
					></tu-option>
					<tu-option
						label="区域二"
						value="beijing"
					></tu-option>
				</tu-select>
			</tu-form-item>
			<tu-form-item label="活动时间">
				<tu-col :span="11">
					<tu-date-picker
						type="date"
						placeholder="选择日期"
						v-model="form.date"
						style="width: 100%"
					></tu-date-picker>
				</tu-col>
				<tu-col
					class="line"
					:span="2"
					>&nbsp</tu-col
				>
				<tu-col :span="11">
					<tu-time-picker
						placeholder="选择时间"
						v-model="form.time"
						style="width: 100%"
					></tu-time-picker>
				</tu-col>
			</tu-form-item>
			<tu-form-item label="活动性质">
				<tu-checkbox-group
					v-model="form.type"
					border
				>
					<tu-checkbox
						label="美食/餐厅线上活动"
						name="type"
					></tu-checkbox>
					<tu-checkbox
						label="地推活动"
						name="type"
					></tu-checkbox>
					<tu-checkbox
						label="线下主题活动"
						name="type"
					></tu-checkbox>
				</tu-checkbox-group>
			</tu-form-item>
			<tu-form-item label="特殊资源">
				<tu-radio-group v-model="form.resource">
					<tu-radio
						border
						label="线上品牌商赞助"
					></tu-radio>
					<tu-radio
						border
						label="线下场地免费"
					></tu-radio>
				</tu-radio-group>
			</tu-form-item>
			<tu-form-item>
				<tu-button
					type="primary"
					@click="submit"
					>立即创建</tu-button
				>
				<tu-button>取消</tu-button>
			</tu-form-item>
		</tu-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				size: "medium",
				form: {
					name: "",
					region: "",
					date: "",
					time: "",
					delivery: false,
					type: [],
					resource: "",
					desc: "",
				},
			};
		},
		methods: {
			submit() {
				console.log("submit!");
			},
		},
	};
</script>
