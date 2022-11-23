<template>
  <div class="demo-wrapper">
    <h2>切换按钮</h2>
    <br />
    <p>基本切换</p>
    <tu-switch v-model="value"></tu-switch>

    <br />
    <p>禁用</p>
    <tu-switch v-model="value1" disabled></tu-switch>
    <tu-switch v-model="value2" disabled></tu-switch>

    <br />
    <p>超小</p>
    <tu-switch v-model="value" size="mini"></tu-switch>

    <br />
    <p>较小</p>
    <tu-switch v-model="value" size="small"></tu-switch>

    <br />
    <p>较大</p>
    <tu-switch v-model="value" size="large"></tu-switch>

    <br />
    <p>图标</p>
    <tu-switch v-model="value" activeLabel="1" inactiveLabel="0"></tu-switch>

    <tu-switch v-model="value" activeLabel="开" inactiveLabel="关"></tu-switch>
    <tu-switch
      v-model="value"
      activeLabel="开"
      inactiveLabel="关"
      size="small"
    ></tu-switch>
    <tu-switch
      v-model="value"
      activeLabel="开"
      inactiveLabel="关"
      size="large"
    ></tu-switch>

    <br />
    <p>图标 slot</p>
    <tu-switch v-model="value">
      <i slot="activeLabel" class="tu-icon-check"></i>
      <i slot="inactiveLabel" class="tu-icon-close"></i>
    </tu-switch>
  </div>
</template>

<script>
export default {
  name: "deme-icon",

  data() {
    return {
      value: true,
      value1: false,
      value2: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.demo-wrapper {
}
</style>