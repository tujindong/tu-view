<template>
	<div class="demo-wrapper">
		<h2>Dialog</h2>
		<br />
		<p>基本配置</p>
		<tu-button
			type="text"
			@click="dialogVisible = true"
			>点击打开 Dialog</tu-button
		>

		<tu-dialog
			title="提示"
			:visible.sync="dialogVisible"
			width="30%"
		>
			<span>这是一段信息</span>
			<span
				slot="footer"
				class="dialog-footer"
			>
				<tu-button @click="dialogVisible = false">取 消</tu-button>
				<tu-button
					type="primary"
					@click="dialogVisible = false"
					>确 定</tu-button
				>
			</span>
		</tu-dialog>
	</div>
</template>

<script>
	export default {
		name: "deme-dialog",

		data() {
			return {
				dialogVisible: false,
			};
		},

		methods: {},
	};
</script>

<style scoped>
	.demo-wrapper {
	}
</style>
