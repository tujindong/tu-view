<template>
	<div class="demo-wrapper">
		<h2>TreeSelect</h2>
		<br />
		<p>基本配置</p>
		<tu-badge
			:value="12"
			class="item"
		>
			<tu-button size="small">评论</tu-button>
		</tu-badge>
		<tu-badge
			:value="3"
			class="item"
		>
			<tu-button size="small">回复</tu-button>
		</tu-badge>
		<tu-badge
			:value="1"
			class="item"
			type="primary"
		>
			<tu-button size="small">评论</tu-button>
		</tu-badge>
		<tu-badge
			:value="2"
			class="item"
			type="warning"
		>
			<tu-button size="small">回复</tu-button>
		</tu-badge>

		<tu-badge
			:value="12"
			class="badge-badge-item"
		>
		</tu-badge>

		<tu-badge
			:value="12"
			class="badge-badge-item"
			:number-style="{
				backgroundColor: '#fff',
				color: '#999',
				boxShadow: '0 0 0 1px #d9d9d9 inset',
			}"
		>
		</tu-badge>

		<tu-badge
			color="red"
			class="badge-badge-item"
			text="测试"
		>
		</tu-badge>
	</div>
</template>

<script>
	export default {
		name: "deme-treeSelect",

		data() {
			return {};
		},
	};
</script>

<style scoped>
	.item {
		margin-top: 10px;
		margin-right: 40px;
	}
</style>
