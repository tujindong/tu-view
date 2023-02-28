<template>
	<label
		class="tu-checkbox"
		:class="[
			isBorder && checkboxSize ? `tu-checkbox--${checkboxSize}` : '',
			{ 'is-disabled': isDisabled },
			{ 'is-checked': isChecked },
			{ 'is-bordered': isBorder },
			{ 'is-indeterminate': indeterminate },
		]"
	>
		<span
			class="tu-checkbox__input"
			:tabindex="indeterminate ? 0 : false"
			:role="indeterminate ? 'checkbox' : false"
			:aria-checked="indeterminate ? 'mixed' : false"
		>
			<span class="tu-checkbox__inner"></span>
			<input
				class="tu-checkbox__original"
				type="checkbox"
				:aria-hidden="indeterminate ? 'true' : 'false'"
				:name="name"
				:disabled="isDisabled"
				:value="label"
				v-model="model"
				@change="handleChange"
				@focus="focus = true"
				@blur="focus = false"
			/>
		</span>
		<span
			class="tu-checkbox__label"
			v-if="$slots.default || label"
		>
			<slot></slot>
			<template v-if="!$slots.default">{{ label }}</template>
		</span>
	</label>
</template>

<script>
	import Emitter from "@packages/src/mixins/emitter";
	export default {
		name: "TuCheckbox",

		componentName: "TuCheckbox",

		mixins: [Emitter],

		inject: {
			tuForm: {
				default: "",
			},
			tuFormItem: {
				default: "",
			},
		},

		props: {
			value: {},
			label: {},
			indeterminate: Boolean,
			disabled: Boolean,
			checked: Boolean,
			name: String,
			id: String,
			trueLabel: [String, Number],
			falseLabel: [String, Number],
			border: Boolean,
			size: String,
			controls: String,
		},

		data() {
			return {
				selfModel: false,
				focus: false,
				isLimitExceeded: false,
			};
		},

		computed: {
			model: {
				get() {
					return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
				},
				set(val) {
					if (this.isGroup) {
						this.isLimitExceeded = false;
						this._checkboxGroup.min !== undefined &&
							val.length < this._checkboxGroup.min &&
							(this.isLimitExceeded = true);

						this._checkboxGroup.max !== undefined &&
							val.length > this._checkboxGroup.max &&
							(this.isLimitExceeded = true);

						this.isLimitExceeded === false && this.dispatch("TuCheckboxGroup", "input", [val]);
					} else {
						this.$emit("input", val);
						this.selfModel = val;
					}
				},
			},

			checkboxSize() {
				return this.isGroup ? this._checkboxGroup.checkboxGroupSize : this.size;
			},

			isChecked() {
				if ({}.toString.call(this.model) === "[object Boolean]") {
					return this.model;
				} else if (Array.isArray(this.model)) {
					return this.model.indexOf(this.label) > -1;
				} else if (this.model !== null && this.model !== undefined) {
					return this.model === this.trueLabel;
				}
			},

			isBorder() {
				return this.isGroup ? this._checkboxGroup.border : this.border;
			},

			isGroup() {
				let parent = this.$parent;
				while (parent) {
					if (parent.$options.componentName !== "TuCheckboxGroup") {
						parent = parent.$parent;
					} else {
						this._checkboxGroup = parent;
						return true;
					}
				}
				return false;
			},

			isLimitDisabled() {
				const { max, min } = this._checkboxGroup;
				if (!!(max || min)) {
					return (
						(this.model.length >= max && !this.isChecked) ||
						(this.model.length <= min && this.isChecked)
					);
				}
			},

			isDisabled() {
				return this.isGroup
					? this._checkboxGroup.disabled ||
							this.disabled ||
							(this.tuForm || {}).disabled ||
							this.isLimitDisabled
					: this.disabled || (this.tuForm || {}).disabled;
			},

			store() {
				return this._checkboxGroup ? this._checkboxGroup.value : this.value;
			},
		},

		watch: {
			value(value) {
				this.dispatch("TuFormItem", "tu.form.change", value);
			},
		},

		created() {
			this.checked && this.addToStore();
		},

		mounted() {
			if (this.indeterminate) {
				this.$el.setAttribute("aria-controls", this.controls);
			}
		},

		methods: {
			addToStore() {
				if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
					this.model.push(this.label);
				} else {
					this.model = this.trueLabel || true;
				}
			},

			handleChange(evt) {
				if (this.isLimitExceeded) return;
				let value;
				if (evt.target.checked) {
					value = this.trueLabel === undefined ? true : this.trueLabel;
				} else {
					value = this.falseLabel === undefined ? false : this.falseLabel;
				}
				this.$emit("change", value, evt);
				this.$nextTick(() => {
					if (this.isGroup) {
						this.dispatch("TuCheckboxGroup", "change", [this._checkboxGroup.value]);
					}
				});
			},
		},
	};
</script>
