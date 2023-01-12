<template>
  <form class="tu-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "TuForm",

  componentName: "TuForm",

  provide() {
    return {
      tuForm: this,
    };
  },

  components: {},

  props: {},
};
</script>
