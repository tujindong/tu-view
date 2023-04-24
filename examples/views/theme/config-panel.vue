<template>
  <div class="panel-container">
    <tu-card title="Themes">
      <tu-row :gutter="10">
        <tu-col :span="12" v-for="(theme, tIndex) in themes" :key="tIndex">
          <div
            class="theme-item"
            :style="{
              backgroundColor: theme.backgroundColor,
              borderColor: theme.primaryColor,
            }"
            @click="handleThemeChange(theme)"
          >
            <span class="name">{{ theme.name }}</span>
            <i :style="{ backgroundColor: theme.primaryColor }"></i>
          </div>
        </tu-col>
      </tu-row>
    </tu-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          name: "Default",
          backgroundColor: "#e4ebf5",
          primaryColor: "#6d5dfc",
          textColor: "#8394be",
        },
        {
          name: "Dark",
          backgroundColor: "#282c34",
          primaryColor: "#9a5dfc",
          textColor: "#d8d8d8",
        },
      ],
    };
  },

  methods: {
    handleThemeChange(theme) {},
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