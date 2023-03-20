<template>
	<div class="container">
		<tu-radio-group v-model="size">
			<tu-radio label="">默认</tu-radio>
			<tu-radio label="medium">中等</tu-radio>
			<tu-radio label="small">小型</tu-radio>
			<tu-radio label="mini">超小</tu-radio>
		</tu-radio-group>

		<tu-descriptions
			class="margin-top"
			title="带边框列表"
			:column="3"
			:size="size"
			border
		>
			<template slot="extra">
				<tu-button
					type="primary"
					size="small"
					>操作</tu-button
				>
			</template>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-user"></i>
					用户名
				</template>
				kooriookami
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-mobile-phone"></i>
					手机号
				</template>
				18100000000
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-location-outline"></i>
					居住地
				</template>
				苏州市
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-tickets"></i>
					备注
				</template>
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item>
				<template slot="label">
					<i class="tu-icon-office-building"></i>
					联系地址
				</template>
				江苏省苏州市吴中区吴中大道 1188 号
			</tu-descriptions-item>
		</tu-descriptions>

		<tu-descriptions
			class="margin-top"
			title="无边框列表"
			:column="3"
			:size="size"
		>
			<template slot="extra">
				<tu-button
					type="primary"
					size="small"
					>操作</tu-button
				>
			</template>
			<tu-descriptions-item label="用户名">kooriookami</tu-descriptions-item>
			<tu-descriptions-item label="手机号">18100000000</tu-descriptions-item>
			<tu-descriptions-item label="居住地">苏州市</tu-descriptions-item>
			<tu-descriptions-item label="备注">
				<tu-tag size="small">学校</tu-tag>
			</tu-descriptions-item>
			<tu-descriptions-item label="联系地址"
				>江苏省苏州市吴中区吴中大道 1188 号</tu-descriptions-item
			>
		</tu-descriptions>
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
