export default {
    name: 'TuCol',

    props: {
        span: {
            type: Number,
            default: 24
        },
        tag: {
            type: String,
            default: 'div'
        },
        offset: Number,
        pull: Number,
        push: Number,
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object]
    },

    computed: {
        gutter() {
            let parent = this.$parent;
            while (parent && parent.$options.componentName !== 'TuRow') {
                parent = parent.$parent;
            }
            return parent ? parent.gutter : 0;
        }
    },
    render(h) {
        let classList = [];
        let style = {};

        if (this.gutter) {
            style.paddingLeft = this.gutter / 2 + 'px';
            style.paddingRight = style.paddingLeft;
        }

        ['span', 'offset', 'pull', 'push'].forEach(prop => {
            if (this[prop] || this[prop] === 0) {
                classList.push(
                    prop !== 'span'
                        ? `tu-col-${prop}-${this[prop]}`
                        : `tu-col-${this[prop]}`
                );
            }
        });

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
            if (typeof this[size] === 'number') {
                classList.push(`tu-col-${size}-${this[size]}`);
            } else if (typeof this[size] === 'object') {
                let props = this[size];
                Object.keys(props).forEach(prop => {
                    classList.push(
                        prop !== 'span'
                            ? `tu-col-${size}-${prop}-${props[prop]}`
                            : `tu-col-${size}-${props[prop]}`
                    );
                });
            }
        });

        return h(this.tag, {
            class: ['tu-col', classList],
            style
        }, this.$slots.default);
    }
};
