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

    <br />
    <p>卡片</p>
    <tu-tabs v-model="activeName1" type="card">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>边框卡片</p>
    <tu-tabs v-model="activeName2" type="border-card">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>位置</p>
    <tu-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <tu-radio label="top">top</tu-radio>
      <tu-radio label="right">right</tu-radio>
      <tu-radio label="bottom">bottom</tu-radio>
      <tu-radio label="left">left</tu-radio>
    </tu-radio-group>

    <tu-tabs :tab-position="tabPosition" style="height: 200px">
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>border</p>

    <tu-tabs type="card" :tab-position="tabPosition" style="height: 200px">
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>border-card</p>

    <tu-tabs
      type="border-card"
      :tab-position="tabPosition"
      style="height: 200px"
    >
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      activeName: "second",
      activeName1: "second",
      activeName2: "second",
      tabPosition: "left",
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