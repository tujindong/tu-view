<template>
  <div class="theme-container">
    <main>
      <aside>
        <config-panel></config-panel>
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

  components: { ConfigPanel, ComponentsPreview },

  props: {},

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.theme-container {
  height: 100vh;
  main {
    width: 1200px;
    min-width: 1200px;
    height: 100%;
    margin: 0 auto;
    aside {
      position: fixed;
      top: 5vh;
      width: 180px;
      height: 90vh;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }
    section {
      margin-left: 220px;
      padding: 5vh 16px;
    }
  }
}
</style>