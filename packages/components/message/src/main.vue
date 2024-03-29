<template>
	<transition
		name="tu-message-fade"
		@after-leave="handleAfterLeave"
	>
		<div
			ref="message"
			:class="[
				'tu-message',
				type && !iconClass ? `tu-message--${type}` : '',
				center ? 'is-center' : '',
				showClose ? 'is-closable' : '',
				customClass,
			]"
			:style="positionStyle"
			v-show="visible"
			@mouseenter="clearTimer"
			@mouseleave="startTimer"
			role="alert"
		>
			<i
				:class="iconClass"
				v-if="iconClass"
			></i>
			<i
				:class="typeClass"
				v-else
			></i>
			<slot>
				<p
					v-if="!dangerouslyUseHTMLString"
					class="tu-message__content"
				>
					{{ message }}
				</p>
				<p
					v-else
					v-html="message"
					class="tu-message__content"
				></p>
			</slot>
			<i
				v-if="showClose"
				class="tu-message__closeBtn tu-icon-close"
				@click="close"
			></i>
		</div>
	</transition>
</template>

<script type="text/babel">
	const typeMap = {
		success: "check-circle-fill",
		info: "info-circle-fill",
		warning: "warning-circle",
		error: "close-circle",
	};

	export default {
		data() {
			return {
				visible: false,
				message: "",
				duration: 3000,
				type: "",
				iconClass: "",
				customClass: "",
				onClose: null,
				showClose: false,
				closed: false,
				verticalOffset: 20,
				timer: null,
				dangerouslyUseHTMLString: false,
				center: false,
			};
		},

		computed: {
			typeClass() {
				return this.type && !this.iconClass ? `tu-message__icon tu-icon-${typeMap[this.type]}` : "";
			},
			positionStyle() {
				return {
					top: `${this.verticalOffset}px`,
				};
			},
		},

		watch: {
			closed(newVal) {
				if (newVal) {
					this.visible = false;
				}
			},
		},

		mounted() {
			this.startTimer();
			document.addEventListener("keydown", this.keydown);
		},

		beforeDestroy() {
			document.removeEventListener("keydown", this.keydown);
		},

		methods: {
			handleAfterLeave() {
				this.$destroy(true);
				this.$el.parentNode.removeChild(this.$el);
			},

			close() {
				this.closed = true;
				if (typeof this.onClose === "function") {
					this.onClose(this);
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
				if (e.keyCode === 27) {
					// esc关闭消息
					if (!this.closed) {
						this.close();
					}
				}
			},
		},
	};
</script>
