<template>
  <div class="panel-container">
    <tu-card title="Themes">
      <tu-row :gutter="10">
        <tu-col :span="12" v-for="(theme, tIndex) in themes" :key="tIndex">
          <div
            class="theme-item"
            :style="{
              backgroundColor: theme.backgroundColor,
              borderColor: theme.borderColor,
              boxShadow: theme.shadow,
            }"
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
          borderColor: "#c8d0e7",
        },
        {
          name: "Dark",
          backgroundColor: "#282c34",
          primaryColor: "#6d5dfc",
          textColor: "#8394be",
          borderColor: "#0c0d0f",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
  .theme-item {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding-left: 18px;
    border-radius: 4px;
    border: 1px solid;
    cursor: pointer;
    > i {
      position: absolute;
      left: 6px;
      top: 10px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
    }
  }
}
</style>