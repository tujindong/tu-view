<template>
  <div class="container">
    <DemoButton />
    <DemoIcon />
    <DemoRadio />
    <DemoCheckbox />
    <DemoInput />
    <DemoSwitch />
    <DemoInputNumber />
    <DemoCard />
    <DemoTooltip />
    <DemoTabs />
    <DemoSelect />
    <DemoTag />
    <DemoLayout />
    <DemoTable />
    <DemoProgress />
    <DemoPagination />
    <DemoScrollbar />
    <DemoRate />
    <DemoSlider />
    <DemoForm />
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
import DemoTag from "./components/demo-tag.vue";
import DemoTable from "./components/demo-table.vue";
import DemoProgress from "./components/demo-progress.vue";
import DemoPagination from "./components/demo-pagination.vue";
import DemoTooltip from "./components/demo-tooltip.vue";
import DemoScrollbar from "./components/demo-scrollbar.vue";
import DemoRate from "./components/demo-rate.vue";
import DemoSlider from "./components/demo-slider.vue";
import DemoForm from "./components/demo-form.vue";
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
    DemoTag,
    DemoTable,
    DemoProgress,
    DemoPagination,
    DemoTooltip,
    DemoScrollbar,
    DemoRate,
    DemoSlider,
    DemoForm,
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
