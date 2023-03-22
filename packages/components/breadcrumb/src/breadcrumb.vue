<template>
	<div
		class="tu-breadcrumb"
		aria-label="Breadcrumb"
		role="navigation"
	>
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "TuBreadcrumb",

		provide() {
			return {
				tuBreadcrumb: this,
			};
		},

		props: {
			separator: {
				type: String,
				default: "/",
			},
			separatorClass: {
				type: String,
				default: "",
			},
		},

		mounted() {
			const items = this.$el.querySelectorAll(".tu-breadcrumb__item");
			if (items.length) {
				items[items.length - 1].setAttribute("aria-current", "page");
			}
		},
	};
</script>

<style></style>
