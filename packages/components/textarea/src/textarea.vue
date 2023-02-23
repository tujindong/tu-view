<template>
	<div :class="['tu-textarea', { 'is-disabled': isDisabled }]">
		<textarea
			ref="textarea"
			class="tu-textarea__inner"
			v-bind="$attrs"
			:tabindex="tabindex"
			:disabled="isDisabled"
			:readonly="readonly"
			:aria-label="label"
			:style="textareaStyle"
			@compositionstart="handleCompositionStart"
			@compositionupdate="handleCompositionUpdate"
			@compositionend="handleCompositionEnd"
			@change="handleChange"
			@input="handleInput"
			@focus="handleFocus"
			@blur="handleBlur"
		></textarea>
		<span
			v-if="isWordLimitVisible"
			class="tu-textarea__count"
		>
			{{ textLength }}/{{ upperLimit }}
		</span>
	</div>
</template>

<script>
	import calcTextareaHeight from "./calcTextareaHeight";
	import merge from "@packages/src/utils/merge.js";
	export default {
		name: "TuTextarea",

		componentName: "TuTextarea",

		inheritAttrs: false,

		props: {
			value: [String, Number],
			disabled: Boolean,
			readonly: Boolean,
			label: String,
			tabindex: String,
			resize: String,
			clearable: {
				type: Boolean,
				default: false,
			},
			showWordLimit: {
				type: Boolean,
				default: false,
			},
			autosize: {
				type: [Boolean, Object],
				default: false,
			},
		},

		data() {
			return {
				hovering: false,
				focused: false,
				isComposing: false,
				textareaCalcStyle: {},
			};
		},

		computed: {
			nativeInputValue() {
				this.$nextTick(this.resizeTextarea);
				return this.value !== null || this.value !== undefined ? String(this.value) : "";
			},
			isDisabled() {
				return this.disabled;
			},
			textareaStyle() {
				return merge({}, this.textareaCalcStyle, { resize: this.resize });
			},
			isWordLimitVisible() {
				return (
					this.showWordLimit &&
					this.$attrs.maxlength &&
					!this.isDisabled &&
					!this.readonly &&
					!this.showPassword
				);
			},
			upperLimit() {
				return this.$attrs.maxlength;
			},
			textLength() {
				return typeof this.value === "number"
					? String(this.value).length
					: (this.value || "").length;
			},
		},

		watch: {
			nativeInputValue() {
				this.setNativeInputValue();
			},
		},

		mounted() {
			this.setNativeInputValue();
			this.resizeTextarea();
		},

		methods: {
			getInput() {
				return this.$refs.textarea;
			},

			setNativeInputValue() {
				const input = this.getInput();
				if (!input) return;
				if (input.value === this.nativeInputValue) return;
				input.value = this.nativeInputValue;
			},

			handleCompositionStart(evt) {
				this.$emit("compositionstart", evt);
				this.isComposing = true;
			},

			handleCompositionUpdate(evt) {
				this.$emit("compositionupdate", evt);
			},

			handleCompositionEnd(evt) {
				this.$emit("compositionend", evt);
				if (this.isComposing) {
					this.isComposing = false;
					this.handleInput(evt);
				}
			},

			handleInput(evt) {
				if (this.isComposing) return;
				this.$emit("input", evt.target.value);
				this.$nextTick(this.setNativeInputValue);
			},

			handleChange(evt) {
				this.$emit("change", evt.target.value);
			},

			handleFocus(evt) {
				this.focused = true;
				this.$emit("focus", evt);
			},

			handleBlur(evt) {
				this.focused = false;
				this.$emit("blur", evt);
			},

			handleClear() {
				this.$emit("input", "");
				this.$emit("change", "");
			},

			resizeTextarea() {
				if (this.$isServer) return;
				if (!this.autosize) {
					this.textareaCalcStyle = {
						minHeight: calcTextareaHeight(this.$refs.textarea).minHeight,
					};
					return;
				}
				const minRows = this.autosize.minRows;
				const maxRows = this.autosize.maxRows;
				this.textareaCalcStyle = calcTextareaHeight(this.$refs.textarea, minRows, maxRows);
			},
		},
	};
</script>
