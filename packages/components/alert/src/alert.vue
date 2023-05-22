<template>
	<transition name="tu-alert-fade">
		<div
			class="tu-alert"
			:class="[typeClass, center ? 'is-center' : '', 'is-' + effect]"
			v-show="visible"
			role="alert"
		>
			<i
				class="tu-alert__icon"
				:class="[iconClass, isBigIcon]"
				v-if="showIcon"
			></i>
			<div class="tu-alert__content">
				<span
					class="tu-alert__title"
					:class="[isBoldTitle]"
					v-if="title || $slots.title"
				>
					<slot name="title">{{ title }}</slot>
				</span>
				<p
					class="tu-alert__description"
					v-if="$slots.default && !description"
				>
					<slot></slot>
				</p>
				<p
					class="tu-alert__description"
					v-if="description && !$slots.default"
				>
					{{ description }}
				</p>
				<i
					class="tu-alert__closebtn"
					:class="{ 'is-customed': closeText !== '', 'tu-icon-close': closeText === '' }"
					v-show="closable"
					@click="close()"
					>{{ closeText }}</i
				>
			</div>
		</div>
	</transition>
</template>

<script>
	const TYPE_CLASSES_MAP = {
		success: "tu-icon-check-circle-fill",
		info: "tu-icon-info-circle-fill",
		warning: "tu-icon-warning-circle-fill",
		error: "tu-icon-close-circle-fill",
	};

	export default {
		name: "TuAlert",

		props: {
			title: {
				type: String,
				default: "",
			},
			description: {
				type: String,
				default: "",
			},
			type: {
				type: String,
				default: "default",
			},
			closable: {
				type: Boolean,
				default: true,
			},
			closeText: {
				type: String,
				default: "",
			},
			showIcon: Boolean,
			center: Boolean,
			effect: {
				type: String,
				default: "light",
				validator: function (value) {
					return ["light", "dark"].indexOf(value) !== -1;
				},
			},
		},

		data() {
			return {
				visible: true,
			};
		},

		computed: {
			typeClass() {
				return `tu-alert--${this.type}`;
			},

			iconClass() {
				return TYPE_CLASSES_MAP[this.type] || "tu-icon-info-circle-fill";
			},

			isBigIcon() {
				return this.description || this.$slots.default ? "is-big" : "";
			},

			isBoldTitle() {
				return this.description || this.$slots.default ? "is-bold" : "";
			},
		},

		methods: {
			close() {
				this.visible = false;
				this.$emit("close");
			},
		},
	};
</script>

<style></style>
