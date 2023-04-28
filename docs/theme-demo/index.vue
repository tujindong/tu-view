<template>
  <div class="theme-container">
    <main>
      <aside>
        <config-panel @themeChange="handleThemeChange"></config-panel>
      </aside>
      <section>
        <components-preview></components-preview>
      </section>
    </main>
  </div>
</template>

<script>
import ConfigPanel from "./config-panel";
import ComponentsPreview from "./components-preview";
export default {
  name: "theme",

  components: {
    ConfigPanel,
    ComponentsPreview,
  },

  props: {},

  data() {
    return {
      themeName: "default",
    };
  },

  watch: {},

  methods: {
    handleThemeChange(theme) {
      Object.keys(theme.style).forEach((key) => {
        document
          .getElementsByTagName("body")[0]
          .style.setProperty(key.replace(/\$/g, ""), theme.style[key]);
      });
    },
  },
};
</script>

<style lang="scss">
body {
  height: auto;
  transition: all 0.25s;
}
.theme-container {
  position: relative;

  main {
    width: 1280px;
    min-width: 1280px;
    height: 100%;
    margin: 0 auto;
    > aside {
      position: fixed;
      top: 5vh;
      width: 220px;
      height: 90vh;
    }
    > section {
      margin-left: 240px;
      padding: 5vh 16px;
    }
  }
}
</style>