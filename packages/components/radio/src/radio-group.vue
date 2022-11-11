<template>
  <component>
    <slot></slot>
  </component>
</template>

<script>
import Emitter from "@packages/src/mixins/emitter";
export default {
  name: "TuRadioGroup",

  componentName: "TuRadioGroup",

  mixins: [Emitter],

  props: {
    value: {},
    size: String,
  },
};
</script>
