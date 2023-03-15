<template>
	<transition name="tu-notification-fade">
		<div
			:class="['tu-notification', customClass, horizontalClass]"
			v-show="visible"
			:style="positionStyle"
			@mouseenter="clearTimer()"
			@mouseleave="startTimer()"
			@click="click"
			role="alert"
		>
			<i
				class="tu-notification__icon"
				:class="[typeClass, iconClass]"
				v-if="type || iconClass"
			>
			</i>
			<div
				class="tu-notification__group"
				:class="{ 'is-with-icon': typeClass || iconClass }"
			>
				<div
					class="tu-notification__title"
					v-text="title"
				></div>
				<div
					class="tu-notification__content"
					v-show="message"
				>
					<slot>
						<p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
						<p
							v-else
							v-html="message"
						></p>
					</slot>
				</div>
				<div
					class="tu-notification__closeBtn tu-icon-close"
					v-if="showClose"
					@click.stop="close"
				></div>
			</div>
		</div>
	</transition>
</template>

<script>
	let typeMap = {
		success: "check-circle-fill",
		info: "info-circle-fill",
		warning: "warning-circle-fill",
		error: "close-circle-fill",
	};

	export default {
		name: "TuNotification",

		data() {
			return {
				visible: false,
				title: "",
				message: "",
				duration: 4500,
				type: "",
				showClose: true,
				customClass: "",
				iconClass: "",
				onClose: null,
				onClick: null,
				closed: false,
				verticalOffset: 0,
				timer: null,
				dangerouslyUseHTMLString: false,
				position: "top-right",
			};
		},

		computed: {
			typeClass() {
				return this.type && typeMap[this.type]
					? `tu-icon__${this.type} tu-icon-${typeMap[this.type]}`
					: "";
			},

			horizontalClass() {
				return this.position.indexOf("right") > -1 ? "right" : "left";
			},

			verticalProperty() {
				return /^top-/.test(this.position) ? "top" : "bottom";
			},

			positionStyle() {
				return {
					[this.verticalProperty]: `${this.verticalOffset}px`,
				};
			},
		},

		watch: {
			closed(newVal) {
				if (newVal) {
					this.visible = false;
					this.$el.addEventListener("transitionend", this.destroyElement);
				}
			},
		},

		mounted() {
			if (this.duration > 0) {
				this.timer = setTimeout(() => {
					if (!this.closed) {
						this.close();
					}
				}, this.duration);
			}
			document.addEventListener("keydown", this.keydown);
		},

		beforeDestroy() {
			document.removeEventListener("keydown", this.keydown);
		},

		methods: {
			destroyElement() {
				this.$el.removeEventListener("transitionend", this.destroyElement);
				this.$destroy(true);
				this.$el.parentNode.removeChild(this.$el);
			},

			click() {
				if (typeof this.onClick === "function") {
					this.onClick();
				}
			},

			close() {
				this.closed = true;
				if (typeof this.onClose === "function") {
					this.onClose();
				}
			},

			clearTimer() {
				clearTimeout(this.timer);
			},

			startTimer() {
				if (this.duration > 0) {
					this.timer = setTimeout(() => {
						if (!this.closed) {
							this.close();
						}
					}, this.duration);
				}
			},
			keydown(e) {
				if (e.keyCode === 46 || e.keyCode === 8) {
					this.clearTimer(); // detele 取消倒计时
				} else if (e.keyCode === 27) {
					// esc关闭消息
					if (!this.closed) {
						this.close();
					}
				} else {
					this.startTimer(); // 恢复倒计时
				}
			},
		},
	};
</script>

<style></style>
