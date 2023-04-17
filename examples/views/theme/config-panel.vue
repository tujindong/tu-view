<template>
  <div class="panel-container">
    <tu-card title="Built-in Themes">
      <tu-row :gutter="10">
        <tu-col :span="12">
          <span>Default</span>
        </tu-col>
        <tu-col :span="12">
          <span>Positive</span>
        </tu-col>
      </tu-row>
    </tu-card>
    <tu-card style="margin-top: 30px" title="Custom Theme"></tu-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.panel-container {
}
</style>