import Vue from 'vue';
import Popper from '@packages/src/utils/vue-popper';
import { addClass, removeClass, on, off } from '@packages/src/utils/dom';
import { generateId } from '@packages/src/utils/util';
import { debounce } from '@packages/src/utils/throttle-debounce';
export default {
    name: "TuTooltip",

    components: {},

    props: {},

    render(h) {
        return h('div', {
        }, this.$slots.default);
    }
}
