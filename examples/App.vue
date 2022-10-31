<template>
  <div class="container">
    <div class="demo-button-wrapper">
      <tu-button class="demo-button" type="default">按钮</tu-button>
      <tu-button class="demo-button" type="default">默认按钮</tu-button>
      <tu-button class="demo-button" type="primary">主要按钮</tu-button>
      <tu-button class="demo-button" type="info">信息按钮</tu-button>
      <tu-button class="demo-button" type="success">成功按钮</tu-button>
      <tu-button class="demo-button" type="warning">警告按钮</tu-button>
      <tu-button class="demo-button" type="danger">危险按钮</tu-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("../packages/style/index.scss");
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  background: #e4ebf5;

  .demo-button-wrapper {
    padding-top: 20px;
    .demo-button {
      margin-left: 30px;
    }
  }
}
</style>
