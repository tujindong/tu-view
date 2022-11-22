<template>
  <div class="container">
    <DemoButton />
    <DemoIcon />
    <DemoRadio />
    <DemoCheckbox />
    <DemoInput />
    <DemoSwitch />
  </div>
</template>

<script>
import DemoButton from "./components/demo-button.vue";
import DemoIcon from "./components/demo-icon.vue";
import DemoRadio from "./components/demo-radio.vue";
import DemoCheckbox from "./components/demo-checkbox.vue";
import DemoInput from "./components/demo-input.vue";
import DemoSwitch from "./components/demo-switch.vue";
export default {
  components: {
    DemoButton,
    DemoIcon,
    DemoRadio,
    DemoCheckbox,
    DemoInput,
    DemoSwitch,
  },

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
  padding: 10px 10px 200px;
}
</style>
