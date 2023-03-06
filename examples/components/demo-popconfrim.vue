<template>
	<div class="demo-icon-wrapper">
		<h2>Popconfrim</h2>
		<br />
		<p>基本配置</p>
		<tu-popconfirm title="这是一段内容确定删除吗？">
			<tu-button slot="reference">删除</tu-button>
		</tu-popconfirm>
		<tu-popconfirm title="这是一段内容确定删除吗？">
			<tu-button
				type="primary"
				slot="reference"
				>删除</tu-button
			>
		</tu-popconfirm>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
