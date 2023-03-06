<template>
	<div class="demo-icon-wrapper">
		<h2>popover</h2>
		<br />
		<p>基本配置</p>
		<tu-popover
			placement="top-start"
			title="标题"
			width="200"
			trigger="click"
			content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
		>
			<tu-button slot="reference">hover 激活</tu-button>
		</tu-popover>
		<tu-popover
			placement="top-start"
			title="标题"
			width="200"
			trigger="click"
			content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
		>
			<tu-button
				type="primary"
				slot="reference"
				>hover 激活</tu-button
			>
		</tu-popover>
		<tu-popover
			placement="top-start"
			title="标题"
			width="200"
			trigger="click"
			content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
		>
		</tu-popover>
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
