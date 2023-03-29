<template>
  <div class="container">
    <div>
      <br />
      <tu-checkbox-group v-model="checkboxGroup1" border>
        <tu-checkbox label="北京" key="北京">北京</tu-checkbox>
        <tu-checkbox label="上海" key="上海">上海</tu-checkbox>
        <tu-checkbox label="合肥" key="合肥">合肥</tu-checkbox>
        <tu-checkbox label="广州" key="广州">广州</tu-checkbox>
      </tu-checkbox-group>
      <br />
      <br />
      <br />
      <tu-checkbox-group v-model="checkboxGroup2" button>
        <tu-checkbox label="北京" key="北京">北京</tu-checkbox>
        <tu-checkbox label="上海" key="上海">上海</tu-checkbox>
        <tu-checkbox label="合肥" key="合肥">合肥</tu-checkbox>
        <tu-checkbox label="广州" key="广州">广州</tu-checkbox>
      </tu-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
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
