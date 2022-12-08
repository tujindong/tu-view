import { addResizeListener, removeResizeListener } from '@packages/src/utils/resize-event';
import scrollbarWidth from "@packages/src/utils/scrollbar-width";
import { toObject } from '@packages/src/utils/util';
import Bar from './bar'
export default {
    name: 'TuScrollbar',

    components: {
        Bar
    },

    props: {
        native: Boolean,
        wrapStyle: {}, // wrap的内联样式,支持数组和字符串两种格式
        wrapClass: {}, // 自定义wrap的类名
        viewStyle: {}, // 自定义view的行内样式
        viewClass: {}, // 自定义view的类名
        noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
        tag: {
            type: String,
            default: 'div'
        }
    },

    data() {
        return {
            sizeWidth: '0',
            sizeHeight: '0',
            moveX: 0,
            moveY: 0
        };
    },

    computed: {
        wrap() {
            return this.$refs.wrap;
        }
    },

    methods: {
        handleScroll() {
            const wrap = this.wrap;
            this.moveY = ((wrap.scrollTop * 100) / wrap.clientHeight);
            this.moveX = ((wrap.scrollLeft * 100) / wrap.clientWidth);
        },

        update() {
            let heightPercentage, widthPercentage;
            const wrap = this.wrap;
            if (!wrap) return;

            heightPercentage = (wrap.clientHeight * 100 / wrap.scrollHeight);
            widthPercentage = (wrap.clientWidth * 100 / wrap.scrollWidth);

            this.sizeHeight = (heightPercentage < 100) ? (heightPercentage + '%') : '';
            this.sizeWidth = (widthPercentage < 100) ? (widthPercentage + '%') : '';
        }
    },

    mounted() {
        if (this.native) return;
        this.$nextTick(this.update);
        !this.noresize && addResizeListener(this.$refs.resize, this.update);
    },

    beforeDestroy() {
        if (this.native) return;
        !this.noresize && removeResizeListener(this.$refs.resize, this.update);
    },

    render(h) {
        // 获取原生滚动条的宽度
        const gutter = scrollbarWidth()
        let style = this.wrapStyle;
        let nodes;
        if (gutter) {
            const gutterWidth = `-${gutter}px`;
            const gutterStyle = `
                margin-bottom: ${gutterWidth};
                margin-right: ${gutterWidth};
            `
            if (Array.isArray(this.wrapClass)) {
                style = toObject(this.wrapStyle);
                style.marginRight = style.marginBottom = gutterWidth;
            } else if (typeof this.wrapStyle === 'string') {
                style += gutterStyle;
            } else {
                style = gutterStyle;
            }
        }

        const view = h(this.tag, {
            class: ['tu-scroll__view', this.viewClass],
            style: this.viewStyle,
            ref: 'resize'
        }, this.$slots.default)

        if (!this.native) {
            nodes = ([
                <div
                    ref="wrap"
                    class={[
                        this.wrapClass,
                        'tu-scrollbar__wrap',
                        gutter ? 'tu-scrollbar__wrap--hidden-default' : ''
                    ]}
                    style={style}
                    onScroll={this.handleScroll}
                >{[view]}</div>,
                <Bar
                    move={this.moveX}
                    size={this.sizeWidth}
                ></Bar>,
                <Bar
                    vertical
                    move={this.moveY}
                    size={this.sizeHeight}
                ></Bar>
            ])
        } else {
            nodes = ([
                <div
                    ref="wrap"
                    class={[this.wrapClass, 'tu-scrollbar__wrap']}
                >
                    {[view]}
                </div>
            ])
        }

        return h('div', { class: 'tu-scrollbar' }, nodes)
    }
}