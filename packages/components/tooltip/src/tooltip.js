import Vue from "vue";
import Popper from "@packages/src/utils/vue-popper";
import { addClass, removeClass, on, off } from "@packages/src/utils/dom";
import { generateId } from "@packages/src/utils/util";
import { debounce } from "@packages/src/utils/throttle-debounce";
export default {
	name: "TuTooltip",

	mixins: [Popper],

	components: {},

	props: {
		content: String,
		disabled: Boolean,
		manual: Boolean,
		popperClass: String,
		effect: {
			type: String,
			default: "dark",
		},
		openDelay: {
			type: Number,
			default: 0,
		},
		transition: {
			type: String,
			default: "tu-fade-in-easeout",
		},
		visibleArrow: {
			default: true,
		},
		arrowOffset: {
			type: Number,
			default: 0,
		},
		visibleArrow: {
			default: true,
		},
		popperOptions: {
			default() {
				return {
					boundariesPadding: 10,
					gpuAcceleration: false,
				};
			},
		},
		enterable: {
			type: Boolean,
			default: true,
		},
		hideAfter: {
			type: Number,
			default: 0,
		},
		tabindex: {
			type: Number,
			default: 0,
		},
	},

	data() {
		return {
			tooltipId: `tu-tooltip-${generateId()}`,
			timeoutPending: null,
			focusing: false,
		};
	},

	watch: {
		focusing(val) {
			if (val) {
				addClass(this.referenceElm, "focusing");
			} else {
				removeClass(this.referenceElm, "focusing");
			}
		},
	},

	beforeCreate() {
		if (this.$isServer) return;

		this.popperVM = new Vue({
			data: { node: "" },
			render(h) {
				return this.node;
			},
		}).$mount();

		this.debounceClose = debounce(200, () => this.handlePopperClose());
	},

	mounted() {
		this.referenceElm = this.$el;
		if (this.$el.nodeType === 1) {
			this.$el.setAttribute("aria-describedby", this.tooltipId);
			this.$el.setAttribute("tabindex", this.tabindex);
			on(this.referenceElm, "mouseenter", this.show);
			on(this.referenceElm, "mouseleave", this.hide);
			on(this.referenceElm, "focus", () => {
				if (!this.$slots.default || !this.$slots.default.length) {
					this.handleFocus();
					return;
				}
				const instance = this.$slots.default[0].componentInstance;
				if (instance && instance.focus) {
					instance.focus();
				} else {
					this.handleFocus();
				}
			});
			on(this.referenceElm, "blur", this.handleBlur);
			on(this.referenceElm, "click", this.removeFocusing);
		}
		if (this.value && this.popperVM) {
			this.popperVM.$nextTick(() => {
				if (this.value) {
					this.updatePopper();
				}
			});
		}
	},

	beforeDestroy() {
		this.popperVM && this.popperVM.$destroy();
	},

	destroyed() {
		const reference = this.referenceElm;
		if (reference.nodeType === 1) {
			off(reference, "mouseenter", this.show);
			off(reference, "mouseleave", this.hide);
			off(reference, "focus", this.handleFocus);
			off(reference, "blur", this.handleBlur);
			off(reference, "click", this.removeFocusing);
		}
	},

	methods: {
		getFirstElement() {
			const slots = this.$slots.default;
			if (!Array.isArray(slots)) return null;
			let element = null;
			for (let i = 0; i < slots.length; i++) {
				if (slots[i] && slots[i].tag) {
					element = slots[i];
					break;
				}
			}
			return element;
		},

		addToolTipClass(prev) {
			if (!prev) {
				return "tu-tooltip";
			} else {
				return "tu-tooltip " + prev.replace("tu-tooltip", "");
			}
		},

		show() {
			this.setExpectedState(true);
			this.handlePopperShow();
		},

		hide() {
			this.setExpectedState(false);
			this.debounceClose();
		},

		handlePopperShow() {
			if (!this.expectedState || this.manual) return;
			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.showPopper = true;
			}, this.openDelay);

			if (this.hideAfter > 0) {
				this.timeoutPending = setTimeout(() => {
					this.showPopper = false;
				}, this.hideAfter);
			}
		},

		handlePopperClose() {
			if ((this.enterable && this.expectedState) || this.manual) return;
			clearTimeout(this.timeout);

			if (this.timeoutPending) {
				clearTimeout(this.timeoutPending);
			}
			this.showPopper = false;

			if (this.disabled) {
				this.doDestroy();
			}
		},

		setExpectedState(expectedState) {
			if (expectedState === false) {
				clearTimeout(this.timeoutPending);
			}
			this.expectedState = expectedState;
		},

		handleFocus() {
			this.focusing = true;
			this.show();
		},
		handleBlur() {
			this.focusing = false;
			this.hide();
		},
		removeFocusing() {
			this.focusing = false;
		},
	},

	render(h) {
		if (this.popperVM) {
			this.popperVM.node = (
				<transition
					name={this.transition}
					onAfterLeave={this.doDestroy}>
					<div
						class={["tu-tooltip__popper is-dark", this.poperClass]}
						ref="popper"
						role="tooltip"
						id={this.tooltipId}
						aria-hidden={this.disabled || !this.showPopper ? "true" : "false"}
						v-show={!this.disabled && this.showPopper}
						onMouseenter={() => {
							this.setExpectedState(true);
						}}
						onMouseleave={() => {
							this.setExpectedState(false);
							this.debounceClose();
						}}>
						{this.$slots.content || this.content}
					</div>
				</transition>
			);
		}

		const firstElement = this.getFirstElement();
		if (!firstElement) return null;
		const firstElementData = firstElement.data || {};
		firstElementData.staticClass = this.addToolTipClass(firstElementData.staticClass);
		return firstElement;
	},
};
