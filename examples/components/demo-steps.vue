<template>
	<div>
		<tu-steps
			style="height: 300px"
			:active="active"
			finish-status="success"
			direction="vertical"
		>
			<tu-step title="步骤 1"></tu-step>
			<tu-step title="步骤 2"></tu-step>
			<tu-step title="步骤 3"></tu-step>
		</tu-steps>

		<tu-button
			style="margin-top: 12px"
			@click="next"
			>下一步</tu-button
		>
		<br />
		<br />
		<br />
		<tu-steps
			:space="200"
			:active="active"
			finish-status="success"
		>
			<tu-step title="已完成"></tu-step>
			<tu-step title="进行中"></tu-step>
			<tu-step title="步骤 3"></tu-step>
		</tu-steps>
		<br />
		<br />
		<br />
		<tu-steps :active="1">
			<tu-step
				title="步骤 1"
				description="这是一段很长很长很长的描述性文字"
			></tu-step
			><samp></samp>
			<tu-step
				title="步骤 2"
				description="这是一段很长很长很长的描述性文字"
			></tu-step>
			<tu-step
				title="步骤 3"
				description="这段就没那么长了"
			></tu-step>
		</tu-steps>
		<br />
		<br />
		<br />
		<tu-steps
			:active="2"
			align-center
		>
			<tu-step
				title="步骤1"
				description="这是一段很长很长很长的描述性文字"
			></tu-step>
			<tu-step
				title="步骤2"
				description="这是一段很长很长很长的描述性文字"
			></tu-step>
			<tu-step
				title="步骤3"
				description="这是一段很长很长很长的描述性文字"
			></tu-step>
			<tu-step
				title="步骤4"
				description="这是一段很长很长很长的描述性文字"
			></tu-step>
		</tu-steps>
		<br />
		<br />
		<br />
		<tu-steps :active="1">
			<tu-step
				title="步骤 1"
				icon="tu-icon-edit"
			></tu-step>
			<tu-step
				title="步骤 2"
				icon="tu-icon-upload"
			></tu-step>
			<tu-step
				title="步骤 3"
				icon="tu-icon-picture"
			></tu-step>
		</tu-steps>
		<br />
		<br />
		<br />
		<div style="height: 300px">
			<tu-steps
				direction="vertical"
				:active="1"
			>
				<tu-step title="步骤 1"></tu-step>
				<tu-step title="步骤 2"></tu-step>
				<tu-step
					title="步骤 3"
					description="这是一段很长很长很长的描述性文字"
				></tu-step>
			</tu-steps>
		</div>
		<br />
		<br />
		<br />
		<tu-steps
			:active="1"
			simple
		>
			<tu-step
				title="步骤 1"
				icon="tu-icon-edit"
			></tu-step>
			<tu-step
				title="步骤 2"
				icon="tu-icon-upload"
			></tu-step>
			<tu-step
				title="步骤 3"
				icon="tu-icon-picture"
			></tu-step>
		</tu-steps>

		<tu-steps
			:active="1"
			finish-status="success"
			simple
			style="margin-top: 20px"
		>
			<tu-step title="步骤 1"></tu-step>
			<tu-step title="步骤 2"></tu-step>
			<tu-step title="步骤 3"></tu-step>
		</tu-steps>
	</div>
</template>

<script>
	export default {
		name: "deme-popover",

		data() {
			return {
				active: 0,
			};
		},

		methods: {
			next() {
				if (this.active++ > 2) this.active = 0;
			},
		},
	};
</script>

<style lang="scss" scoped>
	.demo-icon-wrapper {
	}
</style>
