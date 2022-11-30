<template>
  <div class="demo-wrapper">
    <h2>Card</h2>
    <br />
    <p>基本配置</p>
    <div style="width: 300px">
      <tu-card title="卡片名称">
        <tu-button slot="extra" type="text">操作按钮</tu-button>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
    </div>

    <br />
    <p>slot</p>
    <div style="width: 300px">
      <tu-card>
        <div slot="title" style="color: #666666">slot标题</div>
        <tu-icon slot="extra" name="close"></tu-icon>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
    </div>

    <br />
    <p>简单卡片</p>
    <div style="width: 300px">
      <tu-card>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
    </div>

    <br />
    <p>card 阴影位置</p>
    <div style="width: 300px">
      <tu-card title="卡片标题" shadow="inset">
        <tu-icon slot="extra" name="close"></tu-icon>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
    </div>

    <br />
    <p>带图片</p>
    <div style="width: 240px">
      <tu-card :body-style="{ padding: '0px' }">
        <img
          style="width: 240px; height: 300px"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          class="image"
        />
        <div style="padding: 14px">
          <span>欧洲风情街</span>
        </div>
      </tu-card>
    </div>

    <br />
    <p>card 大小</p>
    <div style="width: 300px">
      <tu-card title="大卡片名称" size="large">
        <tu-button slot="extra" type="text">操作按钮</tu-button>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
    </div>

    <div style="width: 300px; margin-top: 20px">
      <tu-card title="小卡片名称" size="small">
        <tu-button slot="extra" type="text">操作按钮</tu-button>
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </tu-card>
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

<style scoped>
.demo-wrapper {
}
</style>