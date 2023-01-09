<template>
  <div class="tu-rate">
    <span class="tu-rate__item" v-for="(item, key) in max" :key="key"> </span>
  </div>
</template>

<script>
export default {
  name: "TuRate",

  components: {},

  props: {
    max: {
      type: Number,
      default: 5,
    },
  },
};
</script>
