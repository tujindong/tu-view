<template>
	<button :class="classSet" @click="handleClick">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "tu-button",
	props: {
		type: {
			type: String,
			default: "primary",
		},
	},
	computed: {
		classSet() {
			let classResult = `cookie-button cookie-button--${this.type}`;
			return classResult;
		},
	},
	methods: {
		handleClick() {
			this.$emit("click");
		},
	},
};
</script>

<style lang="scss"></style>
