<template>
  <div class="panel-container">
    <tu-card title="Themes">
      <tu-row :gutter="10">
        <tu-col :span="12" v-for="(theme, tIndex) in themeList" :key="tIndex">
          <div
            class="theme-item"
            :style="{
              backgroundColor: theme.style['$--color-background'],
              borderColor: theme.style['$--color-primary'],
            }"
            @click="handleThemeChange(theme)"
          >
            <span class="name">{{ theme.name }}</span>
          </div>
        </tu-col>
      </tu-row>
    </tu-card>
  </div>
</template>

<script>
import { themes } from "./styles/theme-config";
export default {
  data() {
    return {};
  },

  computed: {
    themeList() {
      const themeList = Object.keys(themes).map((val) => {
        return {
          name: val,
          style: themes[val],
        };
      });
      return themeList;
    },
  },

  methods: {
    handleThemeChange(theme) {
      this.$emit("themeChange", theme);
    },
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
  .theme-item {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 8px;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
  }
}
</style>