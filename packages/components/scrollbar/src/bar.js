import { on, off } from '@packages/src/utils/dom';
import { renderThumbStyle, BAR_MAP } from './util';
export default {
    name: 'Bar',

    props: {
        vertical: Boolean, // 是否垂直滚动条
        size: String, // size 对应的是水平滚动条的width或垂直滚动条的height
        move: Number // move 用于设置 translateX 或 translateY 属性
    },

    computed: {
        bar() {
            return BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
        },

        wrap() {
            return this.$parent.wrap;
        }
    },

    render(h) {
        const { size, move, bar } = this;

        return (
            <div
                class={['tu-scrollbar__bar', 'is-' + bar.key]}
                onMousedown={this.clickTrackHandler} >
                <div
                    ref="thumb"
                    class="tu-scrollbar__thumb"
                    onMousedown={this.clickThumbHandler}
                    style={renderThumbStyle({ size, move, bar })}>
                </div>
            </div>
        );
    },

    methods: {
        clickThumbHandler(e) {
            if (e.ctrlKey || e.button === 2) {
                return;
            }
            this.startDrag(e);
            this[this.bar.axis] = (e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]));
        },

        // 点击滑轨时的处理逻辑
        clickTrackHandler(e) {
            const offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
            const thumbHalf = (this.$refs.thumb[this.bar.offset] / 2);
            const thumbPositionPercentage = ((offset - thumbHalf) * 100 / this.$el[this.bar.offset]);

            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },

        startDrag(e) {
            e.stopImmediatePropagation();
            this.cursorDown = true;

            on(document, 'mousemove', this.mouseMoveDocumentHandler);
            on(document, 'mouseup', this.mouseUpDocumentHandler);
            document.onselectstart = () => false;
        },

        // 按下滚动条，并且鼠标移动时
        mouseMoveDocumentHandler(e) {
            if (this.cursorDown === false) return;
            const prevPage = this[this.bar.axis];

            if (!prevPage) return;

            const offset = ((this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1);
            const thumbClickPosition = (this.$refs.thumb[this.bar.offset] - prevPage);
            const thumbPositionPercentage = ((offset - thumbClickPosition) * 100 / this.$el[this.bar.offset]);

            this.wrap[this.bar.scroll] = (thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100);
        },

        mouseUpDocumentHandler(e) {
            this.cursorDown = false;
            this[this.bar.axis] = 0;
            off(document, 'mousemove', this.mouseMoveDocumentHandler);
            document.onselectstart = null;
        }
    },

    destroyed() {
        off(document, 'mouseup', this.mouseUpDocumentHandler);
    }
};