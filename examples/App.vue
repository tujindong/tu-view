<template>
	<div class="container">
		<div class="demo-image__preview">
			<tu-image
				style="width: 100px; height: 100px"
				:src="url"
				:preview-src-list="srcList"
			>
			</tu-image>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				url: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
				srcList: [
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp",
					"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp",
				],
			};
		},

		methods: {},
	};
</script>

<style lang="scss">
	.container {
		min-height: 100vh;
		font-family: "Poppins", sans-serif;
		background: #e4ebf5;
		padding: 10px 10px 500px;
	}
	.demo-image__preview {
		width: 100px;
		height: 100px;
	}
</style>
