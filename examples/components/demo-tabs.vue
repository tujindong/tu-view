<template>
  <div class="demo-wrapper">
    <h2>Tabs</h2>
    <br />
    <p>基本配置</p>
    <tu-tabs type="card" v-model="activeName" @tab-click="handleClick">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
      <tu-tab-pane label="呼入管理" name="five">呼入管理</tu-tab-pane>
      <tu-tab-pane label="呼出管理" name="six">呼出管理</tu-tab-pane>
    </tu-tabs>

    <p>基本配置</p>
    <tu-tabs v-model="activeName" @tab-click="handleClick">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
      <tu-tab-pane label="呼入管理" name="five">呼入管理</tu-tab-pane>
      <tu-tab-pane label="呼出管理" name="six">呼出管理</tu-tab-pane>
    </tu-tabs>

    <!-- <br />
    <p>卡片</p>
    <tu-tabs v-model="activeName1" type="card">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
    </tu-tabs> -->

    <!-- <br />
    <p>边框卡片</p>
    <tu-tabs v-model="activeName2" type="border-card">
      <tu-tab-pane label="用户管理" name="first">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理" name="second">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理" name="third">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</tu-tab-pane>
    </tu-tabs> -->

    <br />
    <p>位置</p>
    <tu-radio-group v-model="tabPosition" style="margin-bottom: 30px">
      <tu-radio label="top">top</tu-radio>
      <tu-radio label="right">right</tu-radio>
      <tu-radio label="bottom">bottom</tu-radio>
      <tu-radio label="left">left</tu-radio>
    </tu-radio-group>

    <tu-tabs :tab-position="tabPosition" style="height: 200px">
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>border</p>

    <tu-tabs type="card" :tab-position="tabPosition" style="height: 200px">
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <br />
    <p>border-card</p>

    <tu-tabs
      type="border-card"
      :tab-position="tabPosition"
      style="height: 200px"
    >
      <tu-tab-pane label="用户管理">用户管理</tu-tab-pane>
      <tu-tab-pane label="配置管理">配置管理</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs>

    <!-- <br />
    <p>自定义标签页</p>
    <tu-tabs type="card">
      <tu-tab-pane>
        <span slot="label"> <tu-icon name="home"></tu-icon> 我的行程</span>
        我的行程
      </tu-tab-pane>
      <tu-tab-pane label="消息中心">消息中心</tu-tab-pane>
      <tu-tab-pane label="角色管理">角色管理</tu-tab-pane>
      <tu-tab-pane label="定时任务补偿">定时任务补偿</tu-tab-pane>
    </tu-tabs> -->

    <!-- <br />
    <p>动态增减标签页</p>
    <tu-tabs v-model="editableTabsValue" editable @edit="handleTabsEdit">
      <tu-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </tu-tab-pane>
    </tu-tabs> -->

    <!-- <br />
    <tu-tabs
      type="card"
      v-model="editableTabsValue"
      editable
      @edit="handleTabsEdit"
    >
      <tu-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </tu-tab-pane>
    </tu-tabs> -->

    <!-- <br />
    <p>自定义位置按钮</p>
    <div style="margin-bottom: 20px">
      <tu-button size="small" @click="addTab(editableTabsValue)">
        add tab
      </tu-button>
    </div>
    <tu-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      @tab-remove="removeTab"
    >
      <tu-tab-pane
        v-for="(item, index) in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </tu-tab-pane>
    </tu-tabs> -->
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      activeName: "second",
      activeName1: "second",
      activeName2: "second",
      tabPosition: "left",

      //动态增减
      editableTabsValue: "2",
      editableTabs: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex: 2,
    };
  },

  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event);
    },

    handleTabsEdit(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex + "";
        this.editableTabs.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",
        });
        this.editableTabsValue = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs;
        let activeName = this.editableTabsValue;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue = activeName;
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
      }
    },

    addTab(targetName) {
      let newTabName = ++this.tabIndex + "";
      this.editableTabs.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue = newTabName;
    },

    removeTab(targetName) {
      let tabs = this.editableTabs;
      let activeName = this.editableTabsValue;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue = activeName;
      this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>