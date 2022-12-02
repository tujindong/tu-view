<template>
  <div class="demo-wrapper">
    <h2>Tooltip</h2>
    <br />
    <p>基本配置</p>
    <div class="box">
      <div class="top">
        <tu-tooltip
          class="item"
          effect="dark"
          content="Top Left 提示文字"
          placement="top-start"
        >
          <tu-button>上左</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Top Center 提示文字"
          placement="top"
        >
          <tu-button>上边</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Top Right 提示文字"
          placement="top-end"
        >
          <tu-button>上右</tu-button>
        </tu-tooltip>
      </div>
      <div class="left">
        <tu-tooltip
          class="item"
          effect="dark"
          content="Left Top 提示文字"
          placement="left-start"
        >
          <tu-button>左上</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Left Center 提示文字"
          placement="left"
        >
          <tu-button>左边</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Left Bottom 提示文字"
          placement="left-end"
        >
          <tu-button>左下</tu-button>
        </tu-tooltip>
      </div>

      <div class="right">
        <tu-tooltip
          class="item"
          effect="dark"
          content="Right Top 提示文字"
          placement="right-start"
        >
          <tu-button>右上</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Right Center 提示文字"
          placement="right"
        >
          <tu-button>右边</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Right Bottom 提示文字"
          placement="right-end"
        >
          <tu-button>右下</tu-button>
        </tu-tooltip>
      </div>
      <div class="bottom">
        <tu-tooltip
          class="item"
          effect="dark"
          content="Bottom Left 提示文字"
          placement="bottom-start"
        >
          <tu-button>下左</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Bottom Center 提示文字"
          placement="bottom"
        >
          <tu-button>下边</tu-button>
        </tu-tooltip>
        <tu-tooltip
          class="item"
          effect="dark"
          content="Bottom Right 提示文字"
          placement="bottom-end"
        >
          <tu-button>下右</tu-button>
        </tu-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.demo-wrapper {
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
}
</style>