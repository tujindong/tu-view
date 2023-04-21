<template>
  <div class="panel-container">
    <tu-card title="Themes">
      <tu-row :gutter="10">
        <tu-col :span="12">
          <span>Default</span>
        </tu-col>
        <tu-col :span="12">
          <span>Positive</span>
        </tu-col>
      </tu-row>
    </tu-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.panel-container {
}
</style>