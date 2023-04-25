<template>
  <div>
    <!-- <Theme /> -->
    <h2>css变量</h2>
    <div class="box"></div>
    <button @click="changeTheme('dark')">Dark</button>
    <button @click="changeTheme('pink')">Pink</button>
    <br />
    <br />
    <h2>Scss变量</h2>
    <div class="header" @click="changeThemeScss">
      <div class="header-left">
        <slot name="left">左边</slot>
      </div>
      <slot name="center" class="">中间</slot>
      <div class="header-right">
        <slot name="right">右边</slot>
      </div>
    </div>
    测试自定义主题
    <div style="height: 500px"></div>
  </div>
</template>

<script>
import Theme from "./views/theme/index";
export default {
  components: {
    Theme,
  },

  data() {
    return {};
  },

  methods: {
    changeTheme(theme) {
      document.body.className = theme;
    },
    changeThemeScss() {
      document.documentElement.setAttribute("data-theme", "theme1");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
.header {
  width: 100%;
  height: 100px;
  font-size: $font_medium;
  @include bg_color();
}
</style>