<template>
	<div
		:class="[
			'tu-badge',
			{ 'is-single': !$slots.default && !text },
			{ 'is-status': !$slots.default && text },
		]"
	>
		<slot></slot>
		<span
			v-if="dotColor && !$slots.default"
			class="tu-badge__status-dot"
			:style="{ background: dotColor }"
		></span>
		<span
			v-if="text"
			class="tu-badge__status-text"
			>{{ text }}</span
		>
		<transition name="tu-zoom-in-center">
			<sup
				v-show="!hidden && (content || content === 0 || isDot)"
				v-text="content"
				class="tu-badge__content"
				:class="[
					type ? 'tu-badge__content--' + type : null,
					{
						'is-fixed': $slots.default,
						'is-dot': isDot,
					},
				]"
				:style="numberStyle"
			>
			</sup>
		</transition>
	</div>
</template>

<script>
	export default {
		name: "TuBadge",

		components: {},

		props: {
			value: [String, Number],
			max: Number,
			isDot: Boolean,
			hidden: Boolean,
			type: {
				type: String,
				validator(val) {
					return ["primary", "success", "warning", "info", "danger"].indexOf(val) > -1;
				},
			},
			numberStyle: Object,
			color: String,
			text: String,
		},

		computed: {
			dotColor() {
				return this.color;
			},

			content() {
				if (this.isDot) return;

				const value = this.value;
				const max = this.max;

				if (typeof value === "number" && typeof max === "number") {
					return max < value ? `${max}+` : value;
				}

				return value;
			},
		},
	};
</script>
