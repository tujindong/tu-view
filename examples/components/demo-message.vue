<template>
  <div class="demo-wrapper">
    <h2>Message</h2>
    <br />
    <p>基本配置</p>
    <tu-button @click="open">打开消息提示</tu-button>
    <tu-button @click="openVn">VNode</tu-button>

    <br />
    <p>不同配置</p>
    <tu-button :plain="true" @click="open2">成功</tu-button>
    <tu-button :plain="true" @click="open3">警告</tu-button>
    <tu-button :plain="true" @click="open1">消息</tu-button>
    <tu-button :plain="true" @click="open4">错误</tu-button>

    <br />
    <p>可关闭</p>
    <tu-button :plain="true" @click="open5">消息</tu-button>
    <tu-button :plain="true" @click="open6">成功</tu-button>
    <tu-button :plain="true" @click="open7">警告</tu-button>
    <tu-button :plain="true" @click="open8">错误</tu-button>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },

  methods: {
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },

    open1() {
      this.$message.info("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },

    open5() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
      });
    },

    open6() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open7() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open8() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error",
      });
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>