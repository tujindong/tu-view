<template>
	<div
		ref="dropdown"
		class="tu-select-dropdown tu-popper"
		:class="[{ 'is-multiple': $parent.multiple }, popperClass]"
		:style="{ minWidth: minWidth }"
	>
		<slot></slot>
	</div>
</template>

<script>
	import Popper from "@packages/src/utils/vue-popper";
	import { getBackground } from "@packages/src/utils/get-background";

	export default {
		name: "TuSelectDropdown",

		componentName: "TuSelectDropdown",

		mixins: [Popper],

		props: {
			placement: {
				default: "bottom-start",
			},

			boundariesPadding: {
				default: 0,
			},

			popperOptions: {
				default() {
					return {
						gpuAcceleration: false,
					};
				},
			},

			visibleArrow: {
				default: false,
			},

			appendToBody: {
				type: Boolean,
				default: true,
			},
		},

		data() {
			return {
				minWidth: "",
			};
		},

		computed: {
			popperClass() {
				return this.$parent.popperClass;
			},
		},

		watch: {
			"$parent.inputWidth"() {
				this.minWidth = this.$parent.$el.getBoundingClientRect().width + "px";
			},
		},

		mounted() {
			this.referenceElm = this.$parent.$refs.reference.$el;
			this.$parent.popperElm = this.popperElm = this.$el;
			this.$on("updatePopper", () => {
				if (this.$parent.visible) this.updatePopper();
				this.setBackgroundColor();
			});
			this.$on("destroyPopper", this.destroyPopper);
		},

		methods: {
			setBackgroundColor() {
				const backgroundColor = getBackground(this.referenceElm);
				if (backgroundColor) this.$refs.dropdown.style.backgroundColor = backgroundColor;
			},
		},
	};
</script>
