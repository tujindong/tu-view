<template>
  <div class="preview-container">
    <tu-row :gutter="50">
      <tu-col :span="8">
        <tu-card>
          <tu-form :model="form">
            <tu-form-item>
              <tu-input
                placeholder="Input"
                v-model="form.input"
                clearable
              ></tu-input>
            </tu-form-item>
            <tu-form-item>
              <tu-select placeholder="Select" v-model="form.select" clearable>
                <tu-option label="Option1" value="1"></tu-option>
                <tu-option label="Option2" value="2"></tu-option>
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
              <tu-input-number
                placeholder="Input number"
                v-model="form.inputNumber"
                clearable
              ></tu-input-number>
            </tu-form-item>
            <tu-form-item>
              <tu-cascader
                placeholder="Cascader"
                v-model="form.cascader"
                :options="treeData"
                clearable
              ></tu-cascader>
            </tu-form-item>
            <tu-form-item>
              <tu-tree-select
                placeholder="Tree select"
                v-model="form.treeSelect"
                :data="treeData"
                clearable
              ></tu-tree-select>
            </tu-form-item>
            <tu-form-item>
              <tu-checkbox-group v-model="form.checkbox">
                <tu-checkbox label="Checkbox1"></tu-checkbox>
                <tu-checkbox label="Checkbox2"></tu-checkbox>
              </tu-checkbox-group>
            </tu-form-item>
            <tu-form-item>
              <tu-radio-group v-model="form.radio">
                <tu-radio label="Radio1"></tu-radio>
                <tu-radio label="Radio2"></tu-radio>
                <tu-radio label="Radio3"></tu-radio>
              </tu-radio-group>
            </tu-form-item>
            <tu-form-item>
              <tu-upload
                v-model="form.upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
              >
                <i class="tu-icon-plus"></i>
              </tu-upload>
            </tu-form-item>
            <tu-row :gutter="20">
              <tu-col :span="6">
                <tu-form-item>
                  <tu-color-picker v-model="form.color"></tu-color-picker>
                </tu-form-item>
              </tu-col>
              <tu-col :span="6">
                <tu-form-item>
                  <tu-switch v-model="form.switch"> </tu-switch>
                </tu-form-item>
              </tu-col>
            </tu-row>
          </tu-form>
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
      treeData: [
        {
          value: "1",
          label: "zone 1",
          children: [
            {
              value: "1-1",
              label: "zone 1-1",
            },
            {
              value: "1-2",
              label: "zone 1-2",
            },
          ],
        },
        {
          value: "2",
          label: "zone 2",
          children: [
            {
              value: "2-1",
              label: "zone 2-1",
              children: [
                {
                  value: "2-1-1",
                  label: "zone 2-1-1",
                },
                {
                  value: "2-1-2",
                  label: "zone 2-1-2",
                },
                {
                  value: "2-1-3",
                  label: "zone 2-1-3",
                },
                {
                  value: "2-1-4",
                  label: "zone 2-1-4",
                },
              ],
            },
            {
              value: "2-2",
              label: "zone 2-2",
              children: [
                {
                  value: "2-2-1",
                  label: "zone 2-2-1",
                },
                {
                  value: "2-2-2",
                  label: "zone 2-2-2",
                },
              ],
            },
          ],
        },
        {
          value: "3",
          label: "zone 3",
          children: [
            {
              value: "3-1",
              label: "zone 3-1",
              children: [
                {
                  value: "3-1-1",
                  label: "zone 3-1-1",
                },
                {
                  value: "3-1-2",
                  label: "zone 3-1-2",
                },
                {
                  value: "3-1-3",
                  label: "zone 3-1-3",
                },
                {
                  value: "3-1-4",
                  label: "zone 3-1-4",
                },
              ],
            },
            {
              value: "3-2",
              label: "zone 3-2",
              children: [
                {
                  value: "3-2-1",
                  label: "zone 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      form: {
        input: "",
        select: "",
        date: "",
        time: "",
        checkbox: [],
        upload: [],
        radio: "",
        inputNumber: "",
        cascader: "",
        treeSelect: "",
        color: "",
        switch: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.preview-container {
}
</style>


