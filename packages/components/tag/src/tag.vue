<script>
export default {
  name: "TuTag",

  components: {},

  props: {
    disableTransitions: Boolean,
    closable: Boolean,
    color: String,
    hit: Boolean,
    size: String,
    effect: {
      type: String,
      default: "light",
      validator(val) {
        return ["dark", "light", "plain", "shadow"].indexOf(val) !== -1;
      },
    },
  },

  computed: {
    tagSize() {
      return this.size;
    },
    tagStyle() {
      const style = {};
      style.borderColor = this.color;
      if (this.effect === "light") {
        style.color = this.color;
      }
      if (this.effect === "dark") {
        style.background = this.color;
      }
      if (this.effect === "plain") {
        style.color = this.color;
        style["--color"] = this.color;
      }
      if (this.effect === "shadow") {
        style.color = this.color;
      }
      return style;
    },
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },

    handleClose(evt) {
      this.$emit("close", evt);
    },
  },

  render(h) {
    const { effect, closable, tagSize, hit, tagStyle } = this;
    const tagEl = (
      <span
        class={[
          "tu-tag",
          tagSize ? `tu-tag--${tagSize}` : "",
          effect ? `tu-tag--${effect}` : "",
          hit && "is-hit",
        ]}
        style={tagStyle}
        onClick={this.handleClick}
      >
        {this.$slots.default}
        {closable && (
          <i class="tu-tag__close tu-icon-close" onClick={this.handleClose}></i>
        )}
      </span>
    );

    return this.disableTransitions ? (
      tagEl
    ) : (
      <transition name="tu-popper-in-center">{tagEl}</transition>
    );
  },
};
</script>
