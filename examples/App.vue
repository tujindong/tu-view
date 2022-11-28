<template>
  <div class="container">
    <DemoButton />
    <DemoIcon />
    <DemoRadio />
    <DemoCheckbox />
    <DemoInput />
    <DemoSwitch />
    <DemoInputNumber />
    <DemoTabs />
    <DemoSelect />
    <DemoCard />
    <DemoLayout />
  </div>
</template>

<script>
import DemoButton from "./components/demo-button.vue";
import DemoIcon from "./components/demo-icon.vue";
import DemoRadio from "./components/demo-radio.vue";
import DemoCheckbox from "./components/demo-checkbox.vue";
import DemoInput from "./components/demo-input.vue";
import DemoSwitch from "./components/demo-switch.vue";
import DemoInputNumber from "./components/demo-inputNumber.vue";
import DemoTabs from "./components/demo-tabs.vue";
import DemoSelect from "./components/demo-select.vue";
import DemoCard from "./components/demo-card.vue";
import DemoLayout from "./components/demo-layout.vue";
export default {
  components: {
    DemoButton,
    DemoIcon,
    DemoRadio,
    DemoCheckbox,
    DemoInput,
    DemoSwitch,
    DemoInputNumber,
    DemoTabs,
    DemoSelect,
    DemoCard,
    DemoLayout,
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
