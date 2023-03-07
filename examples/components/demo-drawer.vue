<template>
	<div class="demo-icon-wrapper">
		<h2>drawer</h2>
		<br />
		<p>基本配置</p>
		<tu-radio-group v-model="direction">
			<tu-radio label="ltr">从左往右开</tu-radio>
			<tu-radio label="rtl">从右往左开</tu-radio>
			<tu-radio label="ttb">从上往下开</tu-radio>
			<tu-radio label="btt">从下往上开</tu-radio>
		</tu-radio-group>
		<tu-button
			@click="drawer = true"
			type="primary"
			style="margin-left: 16px"
		>
			点我打开
		</tu-button>

		<tu-drawer
			title="我是标题"
			:visible.sync="drawer"
			:direction="direction"
			:before-close="handleClose"
		>
			<span>我来啦!</span>
		</tu-drawer>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				drawer: false,
				direction: "rtl",
			};
		},
		methods: {
			handleClose(done) {
				done();
			},
		},
	};
</script>
