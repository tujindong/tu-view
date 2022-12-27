<template>
  <div class="demo-wrapper">
    <h2>Tabs</h2>
    <br />
    <p>基本配置</p>
    <tu-tabs v-model="activeName" @tab-click="handleClick">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
    </tu-tabs>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      activeName: "second",
    };
  },

  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>