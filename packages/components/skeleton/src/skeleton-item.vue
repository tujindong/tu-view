<template>
	<div :class="['tu-skeleton__item', `tu-skeleton__${variant}`]">
		<img-placeholder v-if="variant === 'image'" />
	</div>
</template>

<script>
	import ImgPlaceholder from "./img-placeholder";

	export default {
		name: "TuSkeletonItem",

		components: {
			[ImgPlaceholder.name]: ImgPlaceholder,
		},

		props: {
			variant: {
				type: String,
				default: "text",
			},
		},
	};
</script>
