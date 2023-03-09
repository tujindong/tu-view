<template>
	<div class="tu-button-group">
		<slot></slot>
	</div>
</template>
<script>
	import Emitter from "@packages/src/mixins/emitter";
	export default {
		name: "TuButtonGroup",

		componentName: "TuButtonGroup",

		mixins: [Emitter],

		inject: {
			tuFormItem: {
				default: "",
			},
		},

		props: {
			size: String,
		},

		computed: {
			_tuFormItemSize() {
				return (this.tuFormItem || {}).tuFormItemSize;
			},
			buttonGroupSize() {
				return this.size || this._tuFormItemSize || (this.$TUVIEW || {}).size;
			},
		},
	};
</script>
