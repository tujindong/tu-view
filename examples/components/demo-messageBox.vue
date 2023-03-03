<template>
	<div class="demo-icon-wrapper">
		<h2>messageBox</h2>
		<br />
		<p>基本配置</p>
		<tu-button
			type="text"
			@click="open"
			>点击打开 Message Box</tu-button
		>
	</div>
</template>

<script>
	export default {
		methods: {
			open() {
				this.$alert("这是一段内容", "标题名称", {
					confirmButtonText: "确定",
					callback: action => {
						this.$message({
							type: "info",
							message: `action: ${action}`,
						});
					},
				});
			},
		},
	};
</script>
