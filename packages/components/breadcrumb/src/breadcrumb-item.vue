<template>
	<span class="tu-breadcrumb__item">
		<span
			:class="['tu-breadcrumb__inner', to ? 'is-link' : '']"
			ref="link"
			role="link"
		>
			<slot></slot>
		</span>
		<i
			v-if="separatorClass"
			class="tu-breadcrumb__separator"
			:class="separatorClass"
		></i>
		<span
			v-else
			class="tu-breadcrumb__separator"
			role="presentation"
			>{{ separator }}</span
		>
	</span>
</template>

<script>
	export default {
		name: "TuBreadcrumbItem",

		inject: ["tuBreadcrumb"],

		props: {
			to: {},
			replace: Boolean,
		},

		data() {
			return {
				separator: "",
				separatorClass: "",
			};
		},

		mounted() {
			this.separator = this.tuBreadcrumb.separator;
			this.separatorClass = this.tuBreadcrumb.separatorClass;
			const link = this.$refs.link;
			link.setAttribute("role", "link");
			link.addEventListener("click", _ => {
				const { to, $router } = this;
				if (!to || !$router) return;
				this.replace ? $router.replace(to) : $router.push(to);
			});
		},
	};
</script>

<style></style>
