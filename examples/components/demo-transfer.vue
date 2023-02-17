<template>
  <div class="demo-wrapper">
    <h2>Transfer</h2>
    <br />
    <p>基本配置</p>
    <tu-transfer v-model="value" :data="data"></tu-transfer>

    <br />
    <p>可搜索</p>
    <tu-transfer
      filterable
      :filter-method="filterMethod"
      filter-placeholder="请输入城市拼音"
      v-model="value1"
      :data="data1"
    >
    </tu-transfer>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const generateData1 = (_) => {
      const data = [];
      const cities = [
        "上海",
        "北京",
        "广州",
        "深圳",
        "南京",
        "西安",
        "成都",
        "合肥",
        "济南",
        "武汉",
        "重庆",
      ];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
        "hefei",
        "jinan",
        "wuhan",
        "chongqin",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],

      data1: generateData1(),
      value1: [],
      filterMethod(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
    };
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>