<template>
	<div>
		<tu-radio-group
			v-model="labelPosition"
			style="margin-bottom: 20px"
		>
			<tu-radio label="left">左对齐</tu-radio>
			<tu-radio label="right">右对齐</tu-radio>
			<tu-radio label="top">顶部对齐</tu-radio>
		</tu-radio-group>
		<tu-form
			:label-position="labelPosition"
			label-width="80px"
			:model="formLabelAlign"
		>
			<tu-form-item label="名称">
				<tu-input
					placeholder="请输入名称"
					v-model="formLabelAlign.name"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动区域">
				<tu-input
					placeholder="请输入活动区域"
					v-model="formLabelAlign.region"
				></tu-input>
			</tu-form-item>
			<tu-form-item label="活动形式">
				<tu-input
					placeholder="请输入活动形式"
					v-model="formLabelAlign.type"
				></tu-input>
			</tu-form-item>
		</tu-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelPosition: "right",
				formLabelAlign: {
					name: "",
					region: "",
					type: "",
				},
			};
		},
	};
</script>
