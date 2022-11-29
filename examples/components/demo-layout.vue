<template>
  <div class="demo-wrapper">
    <h2>Layout</h2>
    <br />
    <p>基本配置</p>
    <tu-row>
      <tu-col :span="12"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
    </tu-row>

    <tu-row>
      <tu-col :span="12"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="12"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
    </tu-row>
    <tu-row>
      <tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="8"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
      <tu-col :span="8"><div class="grid-content bg-purple"></div></tu-col>
    </tu-row>
    <tu-row>
      <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
      <tu-col :span="6"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
    </tu-row>
    <tu-row>
      <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
      <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
      <tu-col :span="4"><div class="grid-content bg-purple"></div></tu-col>
      <tu-col :span="4"
        ><div class="grid-content bg-purple-light"></div
      ></tu-col>
    </tu-row>

    <br />
    <p>分栏设置</p>
  </div>
</template>

<script>
export default {
  name: "deme-layout",

  data() {
    return {};
  },
};
</script>

<style scoped>
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #e6ffbd;
}
.bg-purple-light {
  background: #f8dbff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>