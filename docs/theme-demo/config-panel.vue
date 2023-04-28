<template>
  <div class="panel-container">
    <tu-card title="Themes">
      <tu-button slot="extra" size="mini" @click="handleBack">Back</tu-button>
      <div
        v-for="(theme, tIndex) in themeList"
        class="theme-item"
        @click="handleThemeChange(theme)"
      >
        <span
          class="icon"
          :style="{ backgroundColor: theme.style['$--color-background'] }"
        ></span>
        <span class="name">{{ theme.name }}</span>
      </div>
      <div class="theme-config">
        <div class="config-item" v-for="(style, index) in configStyles">
          <span class="config-key">{{ style.key }}: </span>
          <span class="config-value"> {{ style.value }}; </span>
        </div>
      </div>
      <tu-button class="theme-btn" size="small" @click="copyStyles"
        >Copy</tu-button
      >
    </tu-card>
  </div>
</template>

<script>
import { themes } from "./theme-config";
export default {
  data() {
    return {
      currentTheme: themes.default,
    };
  },

  computed: {
    themeList() {
      const themeList = Object.keys(themes).map((key) => {
        return {
          name: key,
          style: themes[key],
        };
      });
      return themeList;
    },
    configStyles() {
      return Object.keys(this.currentTheme).map((key) => {
        return {
          key: key,
          value: this.currentTheme[key],
        };
      });
    },
  },

  watch: {},

  beforeDestroy() {
    const defaultTheme = themes.default;
    Object.keys(defaultTheme).forEach((key) => {
      document
        .getElementsByTagName("body")[0]
        .style.setProperty(key.replace(/\$/g, ""), defaultTheme[key]);
    });
  },

  methods: {
    handleThemeChange(theme) {
      this.currentTheme = theme.style;
      this.$emit("themeChange", theme);
    },

    copyStyles() {
      let inputEl = document.createElement("textarea");
      document.body.appendChild(inputEl);
      inputEl.value = this.configStyles.reduce(
        (prev, cur) => `${prev}${cur.key}:${cur.value};\n`,
        ""
      );
      inputEl.select();
      document.execCommand("copy", false);
      inputEl.remove();
      this.$message.success("Copy Success!");
    },

    handleBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
  .theme-item {
    display: flex;
    align-items: center;
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    border-radius: 4px;
    margin-bottom: 10px;
    cursor: pointer;
    .icon {
      display: inline-block;
      margin-right: 8px;
      width: 16px;
      height: 16px;
      border-radius: 2px;
      border: 1px solid;
    }
    .name {
      transition: opacity 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .theme-config {
    font-size: 12px;
    margin-top: 20px;
    .config-item {
      line-height: 20px;
      margin-bottom: 10px;
    }
  }
  .theme-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>