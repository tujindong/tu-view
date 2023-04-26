<template>
  <div class="panel-container">
    <tu-card title="Themes">
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
          <span class="config-value">
            <i :style="{ color: currentTheme['$--color-primary'] }">
              {{ style.value }};
            </i>
          </span>
        </div>
      </div>
    </tu-card>
  </div>
</template>

<script>
import { themes } from "./styles/theme-config";
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

  methods: {
    handleThemeChange(theme) {
      this.currentTheme = theme.style;
      this.$emit("themeChange", theme);
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
    font-size: 13px;
    margin-top: 20;
    .config-item {
      margin-bottom: 10px;
      .config-value {
        i {
          font-style: normal;
        }
      }
    }
  }
}
</style>