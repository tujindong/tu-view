<template>
	<div class="demo-wrapper">
		<h2>Upload</h2>
		<br />
		<p>基本配置</p>
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
			<tu-button size="small">点击上传</tu-button>
			<div
				slot="tip"
				class="tu-upload__tip"
			>
				只能上传jpg/png文件，且不超过500kb
			</div>
		</tu-upload>
		<br />
		<p>用户头像</p>
		<tu-upload
			class="avatar-uploader"
			action="https://jsonplaceholder.typicode.com/posts/"
			:show-file-list="false"
			:on-success="handleAvatarSuccess"
			:before-upload="beforeAvatarUpload"
		>
			<img
				v-if="imageUrl"
				:src="imageUrl"
				class="avatar"
			/>
			<i
				v-else
				class="tu-icon-plus avatar-uploader-icon"
			></i>
		</tu-upload>

		<br />
		<p>照片墙</p>
		<tu-upload
			action="https://jsonplaceholder.typicode.com/posts/"
			list-type="picture-card"
			:on-preview="handlePictureCardPreview"
			:on-remove="handleRemove"
			:file-list="fileList"
		>
			<i class="tu-icon-plus"></i>
		</tu-upload>
	</div>
</template>

<script>
	export default {
		name: "deme-tabs",

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
					{
						name: "food3.jpeg",
						url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
					},
				],
				imageUrl: "",
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
				// return this.$confirm(`确定移除 ${file.name}？`);
			},

			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw);
			},

			beforeAvatarUpload(file) {
				const isJPG = file.type === "image/jpeg";
				const isLt2M = file.size / 1024 / 1024 < 2;

				if (!isJPG) {
					this.$message.error("上传头像图片只能是 JPG 格式!");
				}
				if (!isLt2M) {
					this.$message.error("上传头像图片大小不能超过 2MB!");
				}
				return isJPG && isLt2M;
			},

			handleRemove(file, fileList) {
				console.log(file, fileList);
			},

			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
		},
	};
</script>

<style scoped>
	.demo-wrapper {
	}
</style>
