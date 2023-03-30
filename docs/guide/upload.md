## Upload 上传

通过点击或者拖拽上传文件

### 点击上传

:::demo 通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置`limit`和`on-exceed`来限制上传文件的个数和定义超出限制时的行为。可通过设置`before-remove`来阻止文件移除操作。

```html
<template>
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
		<tu-button
			size="small"
			type="primary"
			>点击上传</tu-button
		>
		<div
			slot="tip"
			class="tu-upload__tip"
		>
			只能上传jpg/png文件，且不超过500kb
		</div>
	</tu-upload>
</template>

<script>
	export default {
		data() {
			return {
				fileList: [
					{
						name: "food.jpeg",
						url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
					},
					{
						name: "food2.jpeg",
						url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
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
			handleExceed(files, fileList) {
				this.$message.warning(
					`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
						files.length + fileList.length
					} 个文件`
				);
			},
			beforeRemove(file, fileList) {
				return this.$confirm(`确定移除 ${file.name}？`);
			},
		},
	};
</script>
```

:::
