<template>
  <div class="tu-rate">
    <span class="tu-rate__item" v-for="(item, key) in max" :key="key">
      <i :class="[classes[item - 1]]" class="tu-rate__icon"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "TuRate",

  components: {},

  props: {
    value: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 5,
    },
  },

  data() {
    return {
      currentValue: this.value,
      hoverIndex: -1,
    };
  },

  computed: {
    classes() {
      return 2;
    },
  },
};
</script>
