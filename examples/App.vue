<template>
  <div>
    <tu-row :gutter="50">
      <tu-col :span="8">
        <tu-card>
          <tu-form :model="form">
            <tu-form-item>
              <tu-input
                placeholder="Name"
                v-model="form.name"
                clearable
              ></tu-input>
            </tu-form-item>
            <tu-form-item>
              <tu-select placeholder="Gender" v-model="form.gender" clearable>
                <tu-option label="Female" value="0"></tu-option>
                <tu-option label="Male" value="1"></tu-option>
              </tu-select>
            </tu-form-item>
            <tu-form-item>
              <tu-date-picker
                type="date"
                placeholder="Date"
                v-model="form.date"
              ></tu-date-picker>
            </tu-form-item>
            <tu-form-item>
              <tu-time-picker
                placeholder="Time"
                v-model="form.time"
              ></tu-time-picker>
            </tu-form-item>
            <tu-form-item>
              <tu-checkbox-group v-model="form.checkbox">
                <tu-checkbox label="Checkbox1"></tu-checkbox>
              </tu-checkbox-group>
            </tu-form-item>
            <tu-form-item>
              <tu-radio-group v-model="form.radio">
                <tu-radio label="Radio1"></tu-radio>
                <tu-radio label="Radio2"></tu-radio>
              </tu-radio-group>
            </tu-form-item>
          </tu-form>
          <tu-checkbox v-model="form.checked">苹果</tu-checkbox>
          <tu-cascader v-model="value" :options="[]"></tu-cascader>
        </tu-card>
      </tu-col>
      <tu-col :span="12">12</tu-col>
      <tu-col :span="4">4</tu-col>
    </tu-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        gender: "",
        date: "",
        time: "",
        checkbox: [],
        radio: "",
      },
    };
  },
  methods: {
    submit() {
      console.log("submit!", this.form);
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
