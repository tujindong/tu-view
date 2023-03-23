<template>
	<div class="container">
		<ul
			class="infinite-list"
			v-infinite-scroll="load"
			style="overflow: auto"
		>
			<li
				v-for="i in count"
				class="infinite-list-item"
			>
				{{ i }}
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		components: {},

		data() {
			return {
				count: 0,
			};
		},

		methods: {
			load() {
				this.count += 2;
			},
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
	.infinite-list {
		height: 300px;
		padding: 0;
		margin: 0;
		list-style: none;
	}
	.infinite-list-item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 50px;
		background: #e8f3fe;
		margin: 10px;
		color: #7dbcfc;
	}
</style>
