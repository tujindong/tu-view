<template>
  <i :class="`tu-icon-${name}`"></i>
</template>

<script>
export default {
  name: "TuIcon",

  props: {
    name: String,
  },
};
</script>
