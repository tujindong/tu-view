<template>
	<div
		class="tu-collapse-item"
		:class="{ 'is-active': isActive, 'is-disabled': disabled }"
	>
		<div
			role="tab"
			:aria-expanded="isActive"
			:aria-controls="`tu-collapse-content-${id}`"
			:aria-describedby="`tu-collapse-content-${id}`"
		>
			<div
				class="tu-collapse-item__header"
				role="button"
				:id="`tu-collapse-head-${id}`"
				:tabindex="disabled ? undefined : 0"
				:class="{
					focusing: focusing,
					'is-active': isActive,
				}"
				@click.stop="handleHeaderClick"
				@keyup.space.enter.stop="handleEnterClick"
				@focus="handleFocus"
				@blur="focusing = false"
			>
				<i
					class="tu-collapse-item__arrow tu-icon-caret-right"
					:class="{ 'is-active': isActive }"
				>
				</i>
				<slot name="title">{{ title }}</slot>
				<div class="tu-collapse-item__extra">
					<slot name="extra"></slot>
				</div>
			</div>
		</div>
		<tu-collapse-transition>
			<div
				class="tu-collapse-item__wrap"
				v-show="isActive"
				role="tabpanel"
				:aria-hidden="!isActive"
				:aria-labelledby="`tu-collapse-head-${id}`"
				:id="`tu-collapse-content-${id}`"
			>
				<div class="tu-collapse-item__content">
					<slot></slot>
				</div>
			</div>
		</tu-collapse-transition>
	</div>
</template>

<script>
	import TuCollapseTransition from "@packages/src/transitions/collapse-transition";
	import Emitter from "@packages/src/mixins/emitter";
	import { generateId } from "@packages/src/utils/util";

	export default {
		name: "TuCollapseItem",

		componentName: "TuCollapseItem",

		mixins: [Emitter],

		components: { TuCollapseTransition },

		inject: ["collapse"],

		props: {
			title: String,
			name: {
				type: [String, Number],
				default() {
					return this._uid;
				},
			},
			disabled: Boolean,
		},

		data() {
			return {
				contentWrapStyle: {
					height: "auto",
					display: "block",
				},
				contentHeight: 0,
				focusing: false,
				isClick: false,
				id: generateId(),
			};
		},

		computed: {
			isActive() {
				return this.collapse.activeNames.indexOf(this.name) > -1;
			},
		},

		methods: {
			handleFocus() {
				setTimeout(() => {
					if (!this.isClick) {
						this.focusing = true;
					} else {
						this.isClick = false;
					}
				}, 50);
			},

			handleHeaderClick(e) {
				if (this.disabled) return;
				this.dispatch("TuCollapse", "item-click", this);
				this.focusing = false;
				this.isClick = true;
			},

			handleEnterClick() {
				this.dispatch("TuCollapse", "item-click", this);
			},
		},
	};
</script>

<style></style>
