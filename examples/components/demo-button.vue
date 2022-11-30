<template>
  <div class="demo-button-wrapper">
    <tu-button class="demo-button" type="default">默认按钮</tu-button>
    <tu-button class="demo-button" type="primary">主要按钮</tu-button>
    <tu-button class="demo-button" type="primary" :disabled="true"
      >主要禁用</tu-button
    >
    <tu-button class="demo-button" type="info" :disabled="true"
      >信息按钮</tu-button
    >
    <tu-button class="demo-button" type="success">成功按钮</tu-button>
    <tu-button class="demo-button" type="warning">警告按钮</tu-button>
    <tu-button class="demo-button" type="danger">危险按钮</tu-button>
    <tu-button class="demo-button" size="small" type="default"
      >小号按钮</tu-button
    >
    <tu-button class="demo-button" size="large" type="default"
      >大号按钮</tu-button
    >

    <tu-button class="demo-button" type="default" round>圆角按钮</tu-button>

    <tu-button class="demo-button" type="default" :disabled="true"
      >禁用按钮</tu-button
    >

    <tu-button
      class="demo-button"
      type="default"
      circle
      icon="home-fill"
    ></tu-button>

    <tu-button
      class="demo-button"
      size="large"
      type="default"
      circle
      icon="home-fill"
    ></tu-button>

    <tu-button
      class="demo-button"
      size="small"
      type="default"
      circle
      icon="home-fill"
    ></tu-button>

    <br />
    <p>文字按钮</p>
    <tu-button type="text">文字按钮</tu-button>
    <tu-button type="text" disabled>文字按钮</tu-button>
  </div>
</template>

<script>
export default {
  name: "deme-button",

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.demo-button-wrapper {
  padding-top: 20px;
  .demo-button {
    margin-left: 30px;
    margin-bottom: 10px;
  }
}
</style>