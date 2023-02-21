<template>
  <div class="tu-button-group">
    <slot></slot>
  </div>
</template>
<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuButtonGroup",

  componentName: "TuButtonGroup",

  mixins: [Emitter],

  props: {
    size: String,
  },
};
</script>