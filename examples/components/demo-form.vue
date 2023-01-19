<template>
  <div class="demo-wrapper">
    <h2>Form</h2>
    <br />
    <p>基本配置</p>
    <tu-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px">
      <tu-form-item label="活动名称" prop="name">
        <tu-input v-model="ruleForm.name"></tu-input>
      </tu-form-item>
      <tu-form-item label="活动区域" prop="region">
        <tu-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <tu-option label="区域一" value="shanghai"></tu-option>
          <tu-option label="区域二" value="beijing"></tu-option>
        </tu-select>
      </tu-form-item>
      <tu-form-item label="活动性质" prop="type">
        <tu-checkbox-group v-model="ruleForm.type">
          <tu-checkbox label="美食/餐厅线上活动"></tu-checkbox>
          <tu-checkbox label="地推活动"></tu-checkbox>
          <tu-checkbox label="线下主题活动"></tu-checkbox>
          <tu-checkbox label="单纯品牌曝光"></tu-checkbox>
        </tu-checkbox-group>
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
        region: "",
        type: [],
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请输入地区名称", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("ruleForm", this.ruleForm);
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