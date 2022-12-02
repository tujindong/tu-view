import Vue from 'vue';
import Popper from '@packages/src/utils/vue-popper';
import { addClass, removeClass, on, off } from '@packages/src/utils/dom';
import { generateId } from '@packages/src/utils/util';
import { debounce } from '@packages/src/utils/throttle-debounce';
export default {
    name: "TuTooltip",

    mixins: [Popper],

    components: {},

    props: {
        content: String,
        disabled: Boolean,
        openDelay: {
            type: Number,
            default: 0
        },
        transition: {
            type: String,
            default: 'tu-fade-in-linear'
        },
        visibleArrow: {
            default: true
        },
    },

    data() {
        return {
            tooltipId: `tu-tooltip-${generateId()}`
        }
    },

    beforeCreate() {
        if (this.$isServer) return;

        this.popperVM = new Vue({
            data: { node: '' },
            render(h) {
                return this.node;
            }
        }).$mount();

        this.debounceClose = debounce(200, () => this.handlePopperClose());
    },

    mounted() {
        this.referenceElm = this.$el;
        if (this.$el.nodeType === 1) {
            on(this.referenceElm, 'mouseenter', this.show)
            on(this.referenceElm, 'mouseleave', this.hide)
        }
    },

    beforeDestroy() {
        this.popperVM && this.popperVM.$destroy();
    },

    destroyed() {
        console.log('destroyed')
        const reference = this.referenceElm;
        if (reference.nodeType === 1) {
            off(reference, 'mouseenter', this.show);
            off(reference, 'mouseleave', this.hide);
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
            return element
        },

        addToolTipClass(prev) {
            if (!prev) {
                return 'tu-tooltip';
            } else {
                return 'tu-tooltip ' + prev.replace('tu-tooltip', '');
            }
        },

        show() {
            console.log('show')
            this.handlePopperShow()
        },

        hide() {
            console.log('hide')
            this.debounceClose();
        },

        handlePopperShow() {
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.showPopper = true
            }, this.openDelay)
        },

        handlePopperClose() {
            clearTimeout(this.timeout)
            this.showPopper = false
        }

    },

    render(h) {
        if (this.popperVM) {
            this.popperVM.node = (
                <transition name={this.transition}>
                    <div
                        class={['tu-tooltip__popper']}
                        ref="popper"
                        role="tooltip"
                        v-show={this.showPopper}
                        id={this.tooltipId}
                        onMouseenter={() => { }}
                        onMouseleave={() => { }}
                    >
                        {this.$slots.content || this.content}
                    </div>
                </transition>
            )
        }

        const firstElement = this.getFirstElement()
        if (!firstElement) return null;
        const firstElementData = firstElement.data || {}
        firstElementData.staticClass = this.addToolTipClass(firstElementData.staticClass)
        return firstElement
    }
}
