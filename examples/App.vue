<template>
  <div class="container">
    <tu-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <tu-button size="small" type="primary">点击上传</tu-button>
      <div slot="tip" class="tu-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </tu-upload>
    <br />
    <br />
    <tu-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <i class="tu-icon-plus"></i>
    </tu-upload>
    <br />
    <br />
    <tu-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :file-list="fileList"
      list-type="picture"
    >
      <tu-button size="small" type="primary">点击上传</tu-button>
      <div slot="tip" class="tu-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </tu-upload>

    <br />
    <br />
    <tu-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="tu-icon-cloud-upload"></i>
      <div class="tu-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="tu-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </tu-upload>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          status: "uploading",
          percentage: 0,
        },
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          status: "uploading",
          percentage: 80,
        },
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          status: "uploading",
          percentage: 100,
        },
      ],
    };
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  font-family: "Poppins", sans-serif;
  padding: 10px 10px 500px;
}
</style>
