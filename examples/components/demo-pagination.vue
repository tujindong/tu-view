<template>
  <div class="demo-wrapper">
    <h2>Pagination</h2>
    <br />
    <p>基本配置</p>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <tu-pagination layout="prev, pager, next" :total="50"> </tu-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <tu-pagination layout="prev, pager, next" :total="1000"> </tu-pagination>
    </div>

    <br />
    <p>设置最大页码按钮数</p>
    <tu-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
    >
    </tu-pagination>

    <br />
    <p>带背景色</p>
    <tu-pagination button layout="prev, pager, next" :total="1000">
    </tu-pagination>

    <br />
    <p>小型</p>
    <tu-pagination small layout="prev, pager, next" :total="50000">
    </tu-pagination>

    <br />
    <p>显示总数</p>
    <tu-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage1"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000"
    >
    </tu-pagination>

    <br />
    <p>调整每页显示条数</p>
    <tu-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage2"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
    >
    </tu-pagination>

    <br />
    <p>直接前往</p>
    <tu-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000"
    >
    </tu-pagination>

    <br />
    <p>完整功能</p>
    <tu-pagination
      small
      button
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[10, 100, 200, 300, 400]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    >
    </tu-pagination>
  </div>
</template>

<script>
export default {
  name: "deme-tabs",

  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>