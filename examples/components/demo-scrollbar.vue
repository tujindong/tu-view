<template>
  <div class="demo-wrapper">
    <h2>Scrollbar</h2>
    <br />
    <p>基本配置</p>
    <tu-scrollbar style="height: 200px; width: 800px; border: 1px solid #999">
      <div style="width: 900px">
        <p v-for="i in 50" :key="i">列表项{{ i }}</p>
      </div>
    </tu-scrollbar>

    <br />
    <p>原生</p>
    <tu-scrollbar
      :native="true"
      style="height: 200px; width: 800px; border: 1px solid #999"
    >
      <div style="width: 900px">
        <p v-for="i in 50" :key="i">列表项{{ i }}</p>
      </div>
    </tu-scrollbar>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>