<template>
  <div class="demo-wrapper">
    <h2>Tag</h2>
    <br />
    <p>基本配置</p>
    <tu-tag>标签一</tu-tag>
    <tu-tag
      ><a href="https://github.com/vueComponent/ant-design">标签二</a></tu-tag
    >
    <tu-tag closable @close="log"> 标签三 </tu-tag>
    <tu-tag closable @close="preventDefault"> 标签四 </tu-tag>

    <br />
    <p>大小</p>
    <tu-tag size="large">大标签</tu-tag>
    <tu-tag>标签</tu-tag>
    <tu-tag size="small">小标签</tu-tag>
    <tu-tag size="medium">标签</tu-tag>

    <br />
    <p>类型</p>
    <tu-tag effect="light">浅色</tu-tag>
    <tu-tag effect="dark">深色</tu-tag>
    <tu-tag effect="plain">空心</tu-tag>
    <tu-tag effect="shadow">阴影</tu-tag>

    <br />
    <p>类型</p>
    <tu-tag effect="light" closable>浅色</tu-tag>
    <tu-tag effect="dark" closable>深色</tu-tag>
    <tu-tag effect="plain" closable>空心</tu-tag>
    <tu-tag effect="shadow" closable>阴影</tu-tag>

    <br />
    <p>类型</p>
    <tu-tag effect="light" color="#2db7f5">深色</tu-tag>
    <tu-tag effect="dark" color="#2db7f5">深色</tu-tag>
    <tu-tag effect="plain" color="#2db7f5" closable>深色</tu-tag>
    <tu-tag effect="plain" color="#e6a23c">深色</tu-tag>
    <tu-tag effect="shadow" color="#2db7f5">深色</tu-tag>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },

  methods: {
    log(e) {
      console.log(e);
    },
    preventDefault(e) {
      e.preventDefault();
      console.log("Clicked! But prevent default.");
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>