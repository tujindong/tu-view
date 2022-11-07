<template>
  <i :class="`tu-icon-${name}`"></i>
</template>

<script>
export default {
  name: "tu-icon",

  props: {
    name: String,
  },
};
</script>
