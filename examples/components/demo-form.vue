<template>
  <div class="demo-wrapper">
    <h2>Form</h2>
    <br />
    <p>基本配置</p>
    <tu-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <tu-form-item label="活动名称" prop="name">
        <tu-input v-model="ruleForm.name"></tu-input>
      </tu-form-item>
    </tu-form>
  </div>
</template>

<script>
export default {
  name: "deme-rate",

  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.demo-wrapper {
}
</style>