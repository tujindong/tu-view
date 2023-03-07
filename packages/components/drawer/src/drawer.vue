<template>
	<transition
		name="tu-drawer-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div
			class="tu-drawer__wrapper"
			tabindex="-1"
			v-show="visible"
			ref="drawerWrapper"
		>
			<div
				class="tu-drawer__container"
				:class="visible && 'tu-drawer__open'"
				@click.self="handleWrapperClick"
				role="document"
				tabindex="-1"
			>
				<div
					aria-modal="true"
					aria-labelledby="tu-drawer__title"
					:aria-label="title"
					class="tu-drawer"
					:class="[direction, customClass]"
					:style="isHorizontal ? `width: ${drawerSize}` : `height: ${drawerSize}`"
					ref="drawer"
					role="dialog"
					tabindex="-1"
				>
					<header
						class="tu-drawer__header"
						id="tu-drawer__title"
						v-if="withHeader"
					>
						<slot name="title">
							<span
								role="heading"
								:title="title"
								>{{ title }}</span
							>
						</slot>
						<button
							:aria-label="`close ${title || 'drawer'}`"
							class="tu-drawer__close-btn"
							type="button"
							v-if="showClose"
							@click="closeDrawer"
						>
							<i class="tu-dialog__close tu-icon tu-icon-close"></i>
						</button>
					</header>
					<section
						class="tu-drawer__body"
						v-if="rendered"
					>
						<slot></slot>
					</section>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Popup from "@packages/src/utils/popup";
	import emitter from "@packages/src/mixins/emitter";
	import { getBackground } from "@packages/src/utils/get-background";
	export default {
		name: "TuDrawer",

		mixins: [Popup, emitter],

		props: {
			appendToBody: {
				type: Boolean,
				default: false,
			},
			beforeClose: {
				type: Function,
			},
			customClass: {
				type: String,
				default: "",
			},
			closeOnPressEscape: {
				type: Boolean,
				default: true,
			},
			destroyOnClose: {
				type: Boolean,
				default: false,
			},
			modal: {
				type: Boolean,
				default: true,
			},
			direction: {
				type: String,
				default: "rtl",
				validator(val) {
					return ["ltr", "rtl", "ttb", "btt"].indexOf(val) !== -1;
				},
			},
			modalAppendToBody: {
				type: Boolean,
				default: true,
			},
			showClose: {
				type: Boolean,
				default: true,
			},
			size: {
				type: [Number, String],
				default: "30%",
			},
			title: {
				type: String,
				default: "",
			},
			visible: {
				type: Boolean,
			},
			wrapperClosable: {
				type: Boolean,
				default: true,
			},
			withHeader: {
				type: Boolean,
				default: true,
			},
		},

		data() {
			return {
				closed: false,
				prevActiveElement: null,
			};
		},

		computed: {
			isHorizontal() {
				return this.direction === "rtl" || this.direction === "ltr";
			},
			drawerSize() {
				return typeof this.size === "number" ? `${this.size}px` : this.size;
			},
		},

		watch: {
			visible(val) {
				if (val) {
					this.closed = false;
					this.$emit("open");
					if (this.appendToBody) {
						document.body.appendChild(this.$el);
					}
					this.prevActiveElement = document.activeElement;
					this.setBackgroundColor();
				} else {
					if (!this.closed) {
						this.$emit("close");
						if (this.destroyOnClose === true) {
							this.rendered = false;
						}
					}
					this.$nextTick(() => {
						if (this.prevActiveElement) {
							this.prevActiveElement.focus();
						}
					});
				}
			},
		},

		mounted() {
			if (this.visible) {
				this.rendered = true;
				this.open();
				if (this.appendToBody) {
					document.body.appendChild(this.$el);
				}
			}
		},

		destroyed() {
			if (this.appendToBody && this.$el && this.$el.parentNode) {
				this.$el.parentNode.removeChild(this.$el);
			}
		},

		methods: {
			afterEnter() {
				this.$emit("opened");
			},

			afterLeave() {
				this.$emit("closed");
			},

			hide(cancel) {
				if (cancel !== false) {
					this.$emit("update:visible", false);
					this.$emit("close");
					if (this.destroyOnClose === true) {
						this.rendered = false;
					}
					this.closed = true;
				}
			},

			handleWrapperClick() {
				if (this.wrapperClosable) {
					this.closeDrawer();
				}
			},

			closeDrawer() {
				if (typeof this.beforeClose === "function") {
					this.beforeClose(this.hide);
				} else {
					this.hide();
				}
			},

			handleClose() {
				this.closeDrawer();
			},

			setBackgroundColor() {
				this.$nextTick(() => {
					const backgroundColor = getBackground(this.$refs.drawerWrapper);
					if (backgroundColor) this.$refs.drawer.style.backgroundColor = backgroundColor;
				});
			},
		},
	};
</script>

<style></style>
