<template>
  <div class="preview-container">
    <tu-row :gutter="40">
      <tu-col :span="7">
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
            <tu-form-item>
              <tu-textarea
                v-model="form.textarea"
                placeholder="Textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
              ></tu-textarea>
            </tu-form-item>
          </tu-form>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-tabs v-model="tabValue" type="card">
            <tu-tab-pane label="Tab1" name="1">Tab1</tu-tab-pane>
            <tu-tab-pane label="Tab2" name="2">Tab2</tu-tab-pane>
            <tu-tab-pane label="Tab3" name="3">Tab3</tu-tab-pane>
          </tu-tabs>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-progress :percentage="70"></tu-progress>
          <tu-progress :percentage="100" status="success"></tu-progress>
          <tu-progress :percentage="80" status="warning"></tu-progress>
          <tu-progress :percentage="50" status="exception"></tu-progress>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-steps :active="2" finish-status="success">
            <tu-step title="Step 1"></tu-step>
            <tu-step title="Step 2"></tu-step>
            <tu-step title="Step 3"></tu-step>
          </tu-steps>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-slider v-model="sliderValue"></tu-slider>
        </tu-card>
      </tu-col>

      <tu-col :span="12">
        <tu-card>
          <tu-table :data="tableData" style="width: 100%">
            <tu-table-column prop="date" label="Date" width="100">
            </tu-table-column>
            <tu-table-column prop="name" label="Name" width="96">
            </tu-table-column>
            <tu-table-column prop="address" label="Address"> </tu-table-column>
          </tu-table>
          <tu-pagination
            style="margin-top: 20px"
            button
            layout="prev, pager, next"
            :total="1000"
          >
          </tu-pagination>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-row type="flex" justify="space-between">
            <tu-button size="small">Default</tu-button>
            <tu-button size="small" type="primary">Primary</tu-button>
            <tu-button size="small" type="success">Success</tu-button>
            <tu-button size="small" type="info">Infomation</tu-button>
            <tu-button size="small" type="warning">Warning</tu-button>
            <tu-button size="small" type="danger">Danger</tu-button>
          </tu-row>
          <tu-row style="margin-top: 20px" type="flex" justify="space-between">
            <tu-button size="small" round>Default</tu-button>
            <tu-button size="small" round type="primary">Primary</tu-button>
            <tu-button size="small" round type="success">Success</tu-button>
            <tu-button size="small" round type="info">Infomation</tu-button>
            <tu-button size="small" round type="warning">Warning</tu-button>
            <tu-button size="small" round type="danger">Danger</tu-button>
          </tu-row>
          <tu-row style="margin-top: 20px">
            <tu-col :span="16" class="button-icon">
              <tu-button icon="tu-icon-home-fill" circle></tu-button>
              <tu-button type="primary" icon="tu-icon-edit" circle></tu-button>
              <tu-button type="success" icon="tu-icon-check" circle></tu-button>
              <tu-button type="info" icon="tu-icon-message" circle></tu-button>
              <tu-button type="warning" icon="tu-icon-star" circle></tu-button>
              <tu-button type="danger" icon="tu-icon-delete" circle></tu-button>
            </tu-col>
            <tu-col :span="8">
              <tu-button-group>
                <tu-button icon="tu-icon-edit"></tu-button>
                <tu-button icon="tu-icon-share"></tu-button>
                <tu-button icon="tu-icon-delete"></tu-button>
              </tu-button-group>
            </tu-col>
          </tu-row>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-calendar type="card"> </tu-calendar>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <tu-transfer
            style="width: 100%"
            v-model="transferValue"
            :titles="['Source', 'Target']"
            :data="transferData"
          ></tu-transfer>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <div style="display: flex; justify-content: space-between">
            <tu-progress
              type="circle"
              :percentage="25"
              status="exception"
            ></tu-progress>
            <tu-progress
              type="circle"
              :percentage="50"
              status="warning"
            ></tu-progress>
            <tu-progress type="circle" :percentage="70"></tu-progress>
          </div>
        </tu-card>
      </tu-col>

      <tu-col :span="5">
        <tu-card>
          <tu-collapse>
            <tu-collapse-item title="Title 1" name="1">
              Life a bit more smile.
            </tu-collapse-item>
            <tu-collapse-item title="Title 2" name="2">
              Life a bit more smile.
            </tu-collapse-item>
            <tu-collapse-item title="Title 3" name="3">
              Life a bit more smile.
            </tu-collapse-item>
          </tu-collapse>
        </tu-card>

        <tu-card style="margin-top: 30px">
          <div class="action-btn">
            <tu-button @click="$message('This is a normal message')"
              >Open Message</tu-button
            >
            <tu-button @click="modalVisible = true">Open Modal</tu-button>
            <tu-button
              @click="
                $notify({
                  title: 'Tips',
                  message: 'This is the content of the notification',
                })
              "
              >Open Notification</tu-button
            >
            <tu-button @click="drawerVisible = true">Open Drawer</tu-button>
            <tu-popconfirm title="Are you sure delete this task?">
              <tu-button slot="reference">Popconfirm</tu-button>
            </tu-popconfirm>
          </div>
        </tu-card>
      </tu-col>
    </tu-row>

    <tu-modal title="Title" :visible.sync="modalVisible" width="30%">
      <span>This is content of the modal</span>
      <span slot="footer" class="modal-footer">
        <tu-button style="margin-right: 10px" @click="modalVisible = false"
          >Cancel</tu-button
        >
        <tu-button type="primary" @click="modalVisible = false"
          >Confirm</tu-button
        >
      </span>
    </tu-modal>

    <tu-drawer title="Title" :visible.sync="drawerVisible">
      <span>This is content of the drawer</span>
    </tu-drawer>
  </div>
</template>

<script>
export default {
  data() {
    const generateTransferData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
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
      tableData: [
        {
          date: "2022-05-01",
          name: "Ed Sheeran",
          address: "121 Chuangxin Avenue, Hefei City",
        },
        {
          date: "2022-05-02",
          name: "Taylor Swift",
          address: "122 Chuangxin Avenue, Hefei City",
        },
        {
          date: "2022-05-03",
          name: "Ava Max",
          address: "123 Chuangxin Avenue, Hefei City",
        },
        {
          date: "2022-05-04",
          name: "Charlie Puth",
          address: "124 Chuangxin Avenue, Hefei City",
        },
      ],
      transferData: generateTransferData(),
      transferValue: [1, 2, 3],
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
        switch: false,
        textarea: "",
      },
      rateValue: 2,
      sliderValue: 60,
      tabValue: "1",
      modalVisible: false,
      drawerVisible: false,
    };
  },

  methods: {},
};
</script>

<style lang="scss">
.preview-container {
  .tu-progress {
    margin-bottom: 12px;
  }
  .action-btn {
    .tu-button {
      width: 100%;
      margin: 8px 0;
    }
  }
  .button-icon {
    .tu-button:not(:last-child) {
      margin-right: 10px;
    }
  }
  .tu-calendar {
    box-shadow: none;
  }
}
</style>


