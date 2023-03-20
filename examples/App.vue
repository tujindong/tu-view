<template>
	<div class="container">
		<tu-skeleton />
		<p>1</p>
		<tu-skeleton :rows="6" />
		<p>1</p>
		<tu-skeleton
			:rows="6"
			animated
		/>
		<p>1</p>
		<tu-skeleton style="width: 240px">
			<template slot="template">
				<tu-skeleton-item
					variant="image"
					style="width: 240px; height: 240px"
				/>
				<div style="padding: 14px">
					<tu-skeleton-item
						variant="p"
						style="width: 50%"
					/>
					<div style="display: flex; align-items: center; justify-items: space-between">
						<tu-skeleton-item
							variant="text"
							style="margin-right: 16px"
						/>
						<tu-skeleton-item
							variant="text"
							style="width: 30%"
						/>
					</div>
				</div>
			</template>
		</tu-skeleton>
	</div>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				size: "",
			};
		},
	};
</script>

<style lang="scss">
	.container {
		min-height: 100vh;
		font-family: "Poppins", sans-serif;
		background: #e4ebf5;
		padding: 10px 10px 500px;
	}
</style>
