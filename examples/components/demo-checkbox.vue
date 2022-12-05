<template>
  <div class="demo-icon-wrapper">
    <h2>多选按钮</h2>
    <tu-checkbox v-model="checked1">多选1</tu-checkbox>
    <tu-checkbox v-model="checked2">多选2</tu-checkbox>
    <tu-checkbox disabled v-model="checked3">多选3</tu-checkbox>

    <tu-checkbox v-model="checked4" border>按钮多选4</tu-checkbox>

    <tu-checkbox v-model="checked4" border size="mini"
      >超小按钮多选4</tu-checkbox
    >
    <tu-checkbox v-model="checked4" border size="small"
      >小按钮多选4</tu-checkbox
    >
    <tu-checkbox v-model="checked4" border size="large"
      >大按钮多选4</tu-checkbox
    >

    <br />
    <p>按钮组</p>

    <tu-checkbox-group v-model="checkList">
      <tu-checkbox label="复选框A"></tu-checkbox>
      <tu-checkbox label="复选框B" disabled></tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组 slot 对象数组格式</p>

    <tu-checkbox-group v-model="checkList1">
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组 边框</p>

    <tu-checkbox-group v-model="checkList1" border>
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组边框 大小</p>

    <tu-checkbox-group v-model="checkList1" size="small" border>
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组边框 大小 禁用</p>

    <tu-checkbox-group v-model="checkList1" size="small" border disabled>
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>单个 默认勾选</p>

    <tu-checkbox checked>默认勾选</tu-checkbox>

    <br />
    <p>按钮组 默认勾选</p>

    <tu-checkbox-group>
      <tu-checkbox label="1" checked>选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组 最多 最少数量选择</p>

    <tu-checkbox-group v-model="checkList2" :min="1" :max="2">
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
      <tu-checkbox label="3">选项3</tu-checkbox>
      <tu-checkbox label="4">选项4</tu-checkbox>
    </tu-checkbox-group>

    <tu-checkbox-group v-model="checkedFruits" :min="1" :max="2">
      <tu-checkbox v-for="fruit in fruitOptions" :label="fruit" :key="fruit">{{
        fruit
      }}</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组 change value</p>

    <tu-checkbox-group v-model="checkList3" @change="handleChange">
      <tu-checkbox label="1">选项1</tu-checkbox>
      <tu-checkbox label="2">选项2</tu-checkbox>
    </tu-checkbox-group>

    <br />
    <p>按钮组 change value</p>
    <tu-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</tu-checkbox
    >
    <div style="margin: 15px 0"></div>
    <tu-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <tu-checkbox v-for="city in cities" :label="city" :key="city">{{
        city
      }}</tu-checkbox>
    </tu-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "deme-checkbox",

  data() {
    const fruitOptions = ["苹果", "香蕉", "西瓜", "橘子"];
    const cityOptions = ["上海", "北京", "广州", "深圳"];
    return {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checkList: ["复选框A"],
      checkList1: ["1", "2"],
      checkList2: [],
      checkList3: [],
      checkedFruits: ["苹果", "香蕉"],
      fruitOptions,

      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },

  methods: {
    handleChange(e, v) {
      console.log("e", e);
      this.checkList3 = e;
    },

    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },

    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.demo-icon-wrapper {
  margin-top: 20px;
}
</style>