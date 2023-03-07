<template>
	<tu-button @click="open">点击打开 Message Box</tu-button>
</template>

<script>
	export default {
		methods: {
			open() {
				this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
					confirmButtonText: "确定",
					cancelButtonText: "取消",
					type: "warning",
					center: true,
				})
					.then(() => {
						this.$message({
							type: "success",
							message: "删除成功!",
						});
					})
					.catch(() => {
						this.$message({
							type: "info",
							message: "已取消删除",
						});
					});
			},
		},
	};
</script>
