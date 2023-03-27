<template>
  <div class="container">
    <tu-menu
      :default-active="activeIndex"
      class="tu-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <tu-menu-item index="1">处理中心</tu-menu-item>
      <tu-submenu index="2">
        <template slot="title">我的工作台</template>
        <tu-menu-item index="2-1">选项1</tu-menu-item>
        <tu-menu-item index="2-2">选项2</tu-menu-item>
        <tu-menu-item index="2-3">选项3</tu-menu-item>
        <tu-submenu index="2-4">
          <template slot="title">选项4</template>
          <tu-menu-item index="2-4-1">选项1</tu-menu-item>
          <tu-menu-item index="2-4-2">选项2</tu-menu-item>
          <tu-menu-item index="2-4-3">选项3</tu-menu-item>
        </tu-submenu>
      </tu-submenu>
      <tu-menu-item index="3" disabled>消息中心</tu-menu-item>
      <tu-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></tu-menu-item
      >
    </tu-menu>
    <div class="line"></div>
    <br />
    <br />
    <tu-menu
      :default-active="activeIndex2"
      class="tu-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <tu-menu-item index="1">处理中心</tu-menu-item>
      <tu-submenu index="2">
        <template slot="title">我的工作台</template>
        <tu-menu-item index="2-1">选项1</tu-menu-item>
        <tu-menu-item index="2-2">选项2</tu-menu-item>
        <tu-menu-item index="2-3">选项3</tu-menu-item>
        <tu-submenu index="2-4">
          <template slot="title">选项4</template>
          <tu-menu-item index="2-4-1">选项1</tu-menu-item>
          <tu-menu-item index="2-4-2">选项2</tu-menu-item>
          <tu-menu-item index="2-4-3">选项3</tu-menu-item>
        </tu-submenu>
      </tu-submenu>
      <tu-menu-item index="3" disabled>消息中心</tu-menu-item>
      <tu-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></tu-menu-item
      >
    </tu-menu>

    <tu-menu
      :default-active="activeIndex2"
      class="tu-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#999fff"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <tu-menu-item index="1">处理中心</tu-menu-item>
      <tu-submenu index="2">
        <template slot="title">我的工作台</template>
        <tu-menu-item index="2-1">选项1</tu-menu-item>
        <tu-menu-item index="2-2">选项2</tu-menu-item>
        <tu-menu-item index="2-3">选项3</tu-menu-item>
        <tu-submenu index="2-4">
          <template slot="title">选项4</template>
          <tu-menu-item index="2-4-1">选项1</tu-menu-item>
          <tu-menu-item index="2-4-2">选项2</tu-menu-item>
          <tu-menu-item index="2-4-3">选项3</tu-menu-item>
        </tu-submenu>
      </tu-submenu>
      <tu-menu-item index="3" disabled>消息中心</tu-menu-item>
      <tu-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></tu-menu-item
      >
    </tu-menu>

    <br />
    <br />
    <tu-tabs type="border-card">
      <tu-tab-pane label="香蕉">香蕉 </tu-tab-pane>
      <tu-tab-pane label="苹果">
        <span slot="label">
          <i class="tu-icon-apple"></i>
          苹果
        </span>
        苹果
      </tu-tab-pane>
      <tu-tab-pane label="橙子">橙子</tu-tab-pane>
      <tu-tab-pane label="火龙果">火龙果</tu-tab-pane>
    </tu-tabs>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tabPosition: "left",
    };
  },

  methods: {
    handleSelect(key, keyPath) {
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
