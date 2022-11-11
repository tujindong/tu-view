<template>
  <div class="container">
    <DemoButton />
    <DemoIcon />
    <DemoRadio />
  </div>
</template>

<script>
import DemoButton from "./components/demo-button.vue";
import DemoIcon from "./components/demo-icon.vue";
import DemoRadio from "./components/demo-radio.vue";
export default {
  components: { DemoButton, DemoIcon, DemoRadio },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #e4ebf5;
}
</style>
