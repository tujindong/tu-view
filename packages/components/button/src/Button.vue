<template>
	<button
		class="tu-button"
		:disabled="buttonDisabled"
		:class="[
			type ? `tu-button--${type}` : '',
			buttonSize ? `tu-button--${buttonSize}` : '',
			{
				'is-disabled': buttonDisabled,
				'is-round': round,
				'is-circle': circle,
				'is-loading': loading,
			},
		]"
		type="button"
		@click="handleClick"
	>
		<tu-icon
			class="tu-icon__loading"
			name="loading"
			v-if="loading"
		></tu-icon>
		<i
			:class="`${icon}`"
			v-if="icon"
		></i>
		<template v-if="$slots.default"><slot></slot></template>
	</button>
</template>

<script>
	/**
	 * button 按钮
	 * @description Button 按钮
	 * @property {String} type: default | primary | success | info | warning | danger 按钮类型
	 * @property {String} size: small | medium | large 按钮的大小
	 * @property {Boolean} round: 是否圆角按钮
	 * @property {Boolean} disabled: 是否禁用
	 * @property {Boolean} circle: 是否圆形按钮
	 */
	export default {
		name: "TuButton",

		inject: {
			tuForm: {
				default: "",
			},
			tuFormItem: {
				default: "",
			},
		},

		props: {
			type: {
				type: String,
				default: "default",
			},
			size: String,
			icon: {
				type: String,
				default: "",
			},
			loading: Boolean,
			round: Boolean,
			circle: Boolean,
			disabled: Boolean,
		},

		computed: {
			buttonDisabled() {
				return this.disabled;
			},

			isGroup() {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options.componentName !== "TuButtonGroup") {
						parent = parent.$parent;
					} else {
						this._buttonGroup = parent;
						return true;
					}
				}
				return false;
			},

			_tuFormItemSize() {
				return (this.tuFormItem || {}).tuFormItemSize;
			},

			buttonSize() {
				const temButtonSize = this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
				return this.isGroup ? this._buttonGroup.checkboxGroupSize || temButtonSize : temButtonSize;
			},
		},

		methods: {
			handleClick(evt) {
				this.$emit("click", evt);
			},
		},
	};
</script>
