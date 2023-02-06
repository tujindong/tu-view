<template>
  <div class="demo-wrapper">
    <h2>Dropdown</h2>
    <br />
    <p>基本配置</p>
    <tu-dropdown style="margin-left: 20px">
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item disabled>双皮奶</tu-dropdown-item>
        <tu-dropdown-item divided>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <br />
    <p>基本配置</p>
    <tu-dropdown>
      <tu-button>
        更多菜单<i class="tu-icon-down tu-icon--right"></i>
      </tu-button>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <tu-dropdown split-button @click="handleClick">
      更多菜单
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <br />
    <p>可以配置 click 激活或者 hover 激活。</p>
    <tu-dropdown>
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-arrow-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item icon="tu-icon-plus">黄金糕</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-plus">狮子头</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-plus-outline"
          >螺蛳粉</tu-dropdown-item
        >
        <tu-dropdown-item icon="tu-icon-check">双皮奶</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-check">蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <tu-dropdown trigger="click">
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item icon="tu-icon-plus">黄金糕</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-plus">狮子头</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-plus-outline"
          >螺蛳粉</tu-dropdown-item
        >
        <tu-dropdown-item icon="tu-icon-check">双皮奶</tu-dropdown-item>
        <tu-dropdown-item icon="tu-icon-circle-check">蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <br />
    <p>菜单隐藏方式</p>
    <tu-dropdown :hide-on-click="false">
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item disabled>双皮奶</tu-dropdown-item>
        <tu-dropdown-item divided>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <br />
    <p>指令事件</p>
    <tu-dropdown @command="handleCommand">
      <span class="tu-dropdown-link">
        下拉菜单<i class="tu-icon-down tu-icon--right"></i>
      </span>
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item command="a">黄金糕</tu-dropdown-item>
        <tu-dropdown-item command="b">狮子头</tu-dropdown-item>
        <tu-dropdown-item command="c">螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item command="d" disabled>双皮奶</tu-dropdown-item>
        <tu-dropdown-item command="e" divided>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <br />
    <p>尺寸</p>
    <tu-dropdown split-button type="primary" style="margin-right: 20px">
      默认尺寸
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <tu-dropdown
      size="medium"
      split-button
      type="primary"
      style="margin-right: 20px"
    >
      中等尺寸
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <tu-dropdown
      size="small"
      split-button
      type="primary"
      style="margin-right: 20px"
    >
      小型尺寸
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>

    <tu-dropdown
      size="mini"
      split-button
      type="primary"
      style="margin-right: 20px"
    >
      超小尺寸
      <tu-dropdown-menu slot="dropdown">
        <tu-dropdown-item>黄金糕</tu-dropdown-item>
        <tu-dropdown-item>狮子头</tu-dropdown-item>
        <tu-dropdown-item>螺蛳粉</tu-dropdown-item>
        <tu-dropdown-item>双皮奶</tu-dropdown-item>
        <tu-dropdown-item>蚵仔煎</tu-dropdown-item>
      </tu-dropdown-menu>
    </tu-dropdown>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {};
  },

  methods: {
    handleClick() {
      alert("button click");
    },
    handleCommand(command) {
      console.log("command", command);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>