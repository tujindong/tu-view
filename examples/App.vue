<template>
  <div class="container">
    <DemoButton />
    <DemoIcon />
    <DemoRadio />
    <DemoCheckbox />
  </div>
</template>

<script>
import DemoButton from "./components/demo-button.vue";
import DemoIcon from "./components/demo-icon.vue";
import DemoRadio from "./components/demo-radio.vue";
import DemoCheckbox from "./components/demo-checkbox.vue";
export default {
  components: { DemoButton, DemoIcon, DemoRadio, DemoCheckbox },

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
  padding: 10px;
}
</style>
