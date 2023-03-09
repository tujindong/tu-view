<template>
	<component
		:is="_tuTag"
		class="tu-radio-group"
		role="radiogroup"
		@keydown="handleKeydown"
	>
		<slot></slot>
	</component>
</template>

<script>
	import Emitter from "@packages/src/mixins/emitter";
	export default {
		name: "TuRadioGroup",

		componentName: "TuRadioGroup",

		mixins: [Emitter],

		inject: {
			tuFormItem: {
				default: "",
			},
		},

		props: {
			value: {},
			size: String,
			border: Boolean,
			disabled: Boolean,
		},

		computed: {
			_tuTag() {
				let { tag = "" } = this.$vnode.data;
				if (!tag || tag === "component") tag = "div";
				return tag;
			},
			radioGroupSize() {
				return this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
			},
		},

		watch: {
			value(value) {
				this.dispatch("TuFormItem", "tu.form.change", [this.value]);
			},
		},

		created() {
			this.$on("handleChange", value => {
				this.$emit("change", value);
			});
		},

		methods: {
			handleKeydown(e) {
				// 左右上下按键 可以在radio组内切换不同选项
				const target = e.target;
				const className = target.nodeName === "INPUT" ? "[type=radio]" : "[role=radio]";
				const radios = this.$el.querySelectorAll(className);
				const length = radios.length;
				const index = [].indexOf.call(radios, target);
				const roleRadios = this.$el.querySelectorAll("[role=radio]");
				switch (e.keyCode) {
					case keyCode.LEFT:
					case keyCode.UP:
						e.stopPropagation();
						e.preventDefault();
						if (index === 0) {
							roleRadios[length - 1].click();
							roleRadios[length - 1].focus();
						} else {
							roleRadios[index - 1].click();
							roleRadios[index - 1].focus();
						}
						break;
					case keyCode.RIGHT:
					case keyCode.DOWN:
						if (index === length - 1) {
							e.stopPropagation();
							e.preventDefault();
							roleRadios[0].click();
							roleRadios[0].focus();
						} else {
							roleRadios[index + 1].click();
							roleRadios[index + 1].focus();
						}
						break;
					default:
						break;
				}
			},
		},
	};
</script>
