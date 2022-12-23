<template>
  <div class="tu-tab-pane"><slot></slot></div>
</template>

<script>
export default {
  name: "TuTabPane",

  componentName: "TuTabPane",

  props: {
    label: String,
  },

  data() {
    return {
      index: null,
    };
  },
};
</script>
