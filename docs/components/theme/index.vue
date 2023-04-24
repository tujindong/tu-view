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

<style lang="scss">
.theme-container {
  height: 100vh;
  main {
    width: 1240px;
    min-width: 1240px;
    height: 100%;
    margin: 0 auto;
    > aside {
      position: fixed;
      top: 5vh;
      width: 180px;
      height: 90vh;
    }
    > section {
      margin-left: 200px;
      padding: 5vh 16px;
    }
  }
}
</style>