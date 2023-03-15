<template>
	<tu-form
		:model="form"
		:rules="rules"
		ref="form"
		label-width="100px"
		size="small"
	>
		<tu-form-item
			label="活动名称"
			prop="name"
		>
			<tu-input
				v-model="form.name"
				placeholder="请输入活动名称"
			></tu-input>
		</tu-form-item>
		<tu-form-item
			label="活动区域"
			prop="region"
		>
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
		<tu-form-item
			label="活动时间"
			required
		>
			<tu-row>
				<tu-col :span="11">
					<tu-form-item prop="date">
						<tu-date-picker
							type="date"
							placeholder="请选择日期"
							v-model="form.date"
						></tu-date-picker>
					</tu-form-item>
				</tu-col>
				<tu-col :span="2">&nbsp</tu-col>
				<tu-col :span="11">
					<tu-form-item prop="time">
						<tu-time-picker
							placeholder="请选择时间"
							v-model="form.time"
						></tu-time-picker>
					</tu-form-item>
				</tu-col>
			</tu-row>
		</tu-form-item>
		<tu-form-item
			label="即时配送"
			prop="delivery"
		>
			<tu-switch v-model="form.delivery"></tu-switch>
		</tu-form-item>
		<tu-form-item
			label="活动性质"
			prop="type"
		>
			<tu-checkbox-group v-model="form.type">
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
				<tu-checkbox
					label="单纯品牌曝光"
					name="type"
				></tu-checkbox>
			</tu-checkbox-group>
		</tu-form-item>
		<tu-form-item
			label="特殊资源"
			prop="resource"
		>
			<tu-radio-group v-model="form.resource">
				<tu-radio label="线上品牌商赞助"></tu-radio>
				<tu-radio label="线下场地免费"></tu-radio>
			</tu-radio-group>
		</tu-form-item>
		<tu-form-item
			label="活动形式"
			prop="desc"
		>
			<tu-textarea
				v-model="form.desc"
				placeholder="请输入活动形式"
			></tu-textarea>
		</tu-form-item>
		<tu-form-item>
			<tu-button
				type="primary"
				@click="submit"
				>立即创建</tu-button
			>
			<tu-button
				@click="reset"
				style="margin-left: 8px"
				>重置</tu-button
			>
		</tu-form-item>
	</tu-form>
</template>

<script>
	export default {
		data() {
			return {
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
				rules: {
					name: [
						{ required: true, message: "请输入活动名称", trigger: "change" },
						{ min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
					],
					region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
					date: [{ type: "date", required: true, message: "请选择日期", trigger: "change" }],
					time: [{ type: "date", required: true, message: "请选择时间", trigger: "change" }],
					type: [
						{ type: "array", required: true, message: "请至少选择一个活动性质", trigger: "change" },
					],
					resource: [{ required: true, message: "请选择活动资源", trigger: "change" }],
					desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
				},
			};
		},
		methods: {
			submit() {
				this.$refs.form.validate(valid => {
					if (valid) {
						console.log("submit", this.form);
					} else {
						console.log("error submit!!");
						return false;
					}
				});
			},
			reset() {
				this.$refs.form.resetFields();
			},
		},
	};
</script>
