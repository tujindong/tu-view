<template>
  <div class="demo-wrapper">
    <h2>Dropdown</h2>
    <br />
    <p>基本配置</p>
    <tu-dropdown>
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-arrow-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item disabled>双皮奶</tu-dropdown-item>
        <tu-dropdown-item divided>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>
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