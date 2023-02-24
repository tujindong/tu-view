<template>
	<transition
		name="dialog-fade"
		@after-enter="afterEnter"
		@after-leave="afterLeave"
	>
		<div
			ref="dialogWrapper"
			v-show="visible"
			class="tu-dialog__wrapper"
			@click.self="handleWrapperClick"
		>
			<div
				ref="dialog"
				role="dialog"
				:key="key"
				aria-modal="true"
				:aria-label="title || 'dialog'"
				:class="[
					'tu-dialog',
					{ 'is-fullscreen': fullscreen, 'tu-dialog--center': center },
					customClass,
				]"
				:style="style"
			>
				<div class="tu-dialog__header">
					<slot name="title">
						<span class="tu-dialog__title">{{ title }}</span>
					</slot>
					<button
						type="button"
						class="tu-dialog__headerbtn"
						aria-label="Close"
						v-if="showClose"
						@click="handleClose"
					>
						<i class="tu-dialog__close tu-icon tu-icon-close"></i>
					</button>
				</div>
				<div
					class="tu-dialog__body"
					v-if="rendered"
				>
					<slot></slot>
				</div>
				<div
					class="tu-dialog__footer"
					v-if="$slots.footer"
				>
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Popup from "@packages/src/utils/popup";
	import Migrating from "@packages/src/mixins/migrating";
	import emitter from "@packages/src/mixins/emitter";
	import { getBackground } from "@packages/src/utils/get-background";

	export default {
		name: "TuDialog",

		mixins: [Popup, emitter, Migrating],

		components: {},

		props: {
			title: {
				type: String,
				default: "",
			},

			modal: {
				type: Boolean,
				default: true,
			},

			modalAppendToBody: {
				type: Boolean,
				default: true,
			},

			appendToBody: {
				type: Boolean,
				default: false,
			},

			lockScroll: {
				type: Boolean,
				default: true,
			},

			closeOnClickModal: {
				type: Boolean,
				default: true,
			},

			closeOnPressEscape: {
				type: Boolean,
				default: true,
			},

			showClose: {
				type: Boolean,
				default: true,
			},

			width: String,

			fullscreen: Boolean,

			customClass: {
				type: String,
				default: "",
			},

			top: {
				type: String,
				default: "15vh",
			},
			beforeClose: Function,
			center: {
				type: Boolean,
				default: false,
			},

			destroyOnClose: Boolean,
		},

		data() {
			return {
				closed: false,
				key: 0,
			};
		},

		computed: {
			style() {
				let style = {};
				if (!this.fullscreen) {
					style.marginTop = this.top;
					if (this.width) {
						style.width = this.width;
					}
				}
				return style;
			},
		},

		watch: {
			visible(val) {
				if (val) {
					this.closed = false;
					this.$emit("open");
					this.$el.addEventListener("scroll", this.updatePopper);
					this.$nextTick(() => {
						this.$refs.dialog.scrollTop = 0;
					});
					if (this.appendToBody) {
						document.body.appendChild(this.$el);
					}
				} else {
					this.$el.removeEventListener("scroll", this.updatePopper);
					if (!this.closed) this.$emit("close");
					if (this.destroyOnClose) {
						this.$nextTick(() => {
							this.key++;
						});
					}
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
			getMigratingConfig() {
				return {
					props: {
						size: "size is removed.",
					},
				};
			},

			handleWrapperClick() {
				if (!this.closeOnClickModal) return;
				this.handleClose();
			},

			handleClose() {
				if (typeof this.beforeClose === "function") {
					this.beforeClose(this.hide);
				} else {
					this.hide();
				}
			},

			hide(cancel) {
				if (cancel !== false) {
					this.$emit("update:visible", false);
					this.$emit("close");
					this.closed = true;
				}
			},

			updatePopper() {
				this.broadcast("TuSelectDropdown", "updatePopper");
				this.broadcast("TuDropdownMenu", "updatePopper");
			},

			afterEnter() {
				this.$emit("opened");
			},

			afterLeave() {
				this.$emit("closed");
			},

			setBackgroundColor() {},
		},
	};
</script>
