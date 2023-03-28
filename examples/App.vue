<template>
  <div class="container">
    <tu-row :gutter="200">
      <tu-col :span="12">
        <p>默认颜色</p>
        <tu-menu
          default-active="2"
          class="tu-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <tu-submenu index="1">
            <template slot="title">
              <i class="tu-icon-location-fill"></i>
              <span>导航一</span>
            </template>
            <tu-menu-item-group>
              <template slot="title">分组一</template>
              <tu-menu-item index="1-1">选项1</tu-menu-item>
              <tu-menu-item index="1-2">选项2</tu-menu-item>
            </tu-menu-item-group>
            <tu-menu-item-group title="分组2">
              <tu-menu-item index="1-3">选项3</tu-menu-item>
            </tu-menu-item-group>
            <tu-submenu index="1-4">
              <template slot="title">选项4</template>
              <tu-menu-item index="1-4-1">选项1</tu-menu-item>
            </tu-submenu>
          </tu-submenu>
          <tu-menu-item index="2">
            <i class="tu-icon-appstore-fill"></i>
            <span slot="title">导航二</span>
          </tu-menu-item>
          <tu-menu-item index="3" disabled>
            <i class="tu-icon-star-fill"></i>
            <span slot="title">导航三</span>
          </tu-menu-item>
          <tu-menu-item index="4">
            <i class="tu-icon-appstore-fill"></i>
            <span slot="title">导航四</span>
          </tu-menu-item>
        </tu-menu>
      </tu-col>
      <tu-col :span="12">
        <p>自定义颜色</p>
        <tu-menu
          default-active="2"
          class="tu-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <tu-submenu index="1">
            <template slot="title">
              <i class="tu-icon-location-fill"></i>
              <span>导航一</span>
            </template>
            <tu-menu-item-group>
              <template slot="title">分组一</template>
              <tu-menu-item index="1-1">选项1</tu-menu-item>
              <tu-menu-item index="1-2">选项2</tu-menu-item>
            </tu-menu-item-group>
            <tu-menu-item-group title="分组2">
              <tu-menu-item index="1-3">选项3</tu-menu-item>
            </tu-menu-item-group>
            <tu-submenu index="1-4">
              <template slot="title">选项4</template>
              <tu-menu-item index="1-4-1">选项1</tu-menu-item>
            </tu-submenu>
          </tu-submenu>
          <tu-menu-item index="2">
            <i class="tu-icon-appstore-fill"></i>
            <span slot="title">导航二</span>
          </tu-menu-item>
          <tu-menu-item index="3" disabled>
            <i class="tu-icon-star-fill"></i>
            <span slot="title">导航三</span>
          </tu-menu-item>
          <tu-menu-item index="4">
            <i class="tu-icon-appstore-fill"></i>
            <span slot="title">导航四</span>
          </tu-menu-item>
        </tu-menu>
      </tu-col>
    </tu-row>
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
