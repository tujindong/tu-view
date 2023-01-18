<template>
  <div class="demo-wrapper">
    <h2>Form</h2>
    <br />
    <p>基本配置</p>
    <tu-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <tu-form-item label="活动名称" prop="name">
        <tu-input v-model="ruleForm.name"></tu-input>
      </tu-form-item>
      <tu-form-item label="活动名称" prop="sex">
        <tu-input v-model="ruleForm.sex"></tu-input>
      </tu-form-item>
      <tu-form-item>
        <tu-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</tu-button
        >
        <tu-button style="margin-left: 10px" @click="resetForm('ruleForm')"
          >重置</tu-button
        >
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
        sex: "",
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