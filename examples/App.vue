<template>
  <div class="container">
    <div>
      <tu-checkbox-group v-model="checkboxGroup1">
        <tu-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</tu-checkbox-button>
      </tu-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tu-checkbox-group v-model="checkboxGroup2" size="medium">
        <tu-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</tu-checkbox-button>
      </tu-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tu-checkbox-group v-model="checkboxGroup3" size="small">
        <tu-checkbox-button
          v-for="city in cities"
          :label="city"
          :disabled="city === '北京'"
          :key="city"
          >{{ city }}</tu-checkbox-button
        >
      </tu-checkbox-group>
    </div>
    <div style="margin-top: 20px">
      <tu-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <tu-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</tu-checkbox-button>
      </tu-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    const cityOptions = ["上海", "北京", "广州", "深圳"];
    return {
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      cities: cityOptions,
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #e4ebf5;
  padding: 10px 10px 500px;
}
</style>
