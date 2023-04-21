<template>
  <div>
    <Theme />
    <!-- <tu-clock> </tu-clock> -->
    <tu-cascader v-model="value" :options="options"></tu-cascader>

    <div style="height: 500px"></div>
  </div>
</template>

<script>
import Theme from "./views/theme/index";
export default {
  components: {
    Theme,
  },

  data() {
    return {
      value: [],
      options: [
        {
          value: "1",
          label: "上海",
          children: [
            {
              value: "1-1",
              label: "普陀区",
            },
            {
              value: "1-2",
              label: "黄埔区",
            },
            {
              value: "1-3",
              label: "徐汇区",
            },
          ],
        },
        {
          value: "2",
          label: "江苏",
          children: [
            {
              value: "2-1",
              label: "南京",
              children: [
                {
                  value: "2-1-1",
                  label: "玄武区",
                },
                {
                  value: "2-1-2",
                  label: "秦淮区",
                },
                {
                  value: "2-1-3",
                  label: "建邺区",
                },
                {
                  value: "2-1-4",
                  label: "鼓楼区",
                },
                {
                  value: "2-1-5",
                  label: "浦口区",
                },
                {
                  value: "2-1-6",
                  label: "栖霞区",
                },
                {
                  value: "2-1-7",
                  label: "雨花台区",
                },
                {
                  value: "2-1-8",
                  label: "江宁区",
                },
                {
                  value: "2-1-9",
                  label: "六合区",
                },
              ],
            },
            {
              value: "2-2",
              label: "苏州",
              children: [
                {
                  value: "2-2-1",
                  label: "姑苏区",
                },
                {
                  value: "2-2-2",
                  label: "相城区",
                },
              ],
            },
            {
              value: "2-3",
              label: "扬州",
              children: [
                {
                  value: "2-3-1",
                  label: "江都区",
                },
              ],
            },
          ],
        },
        {
          value: "3",
          label: "浙江",
          children: [
            {
              value: "3-1",
              label: "杭州",
              children: [
                {
                  value: "3-1-1",
                  label: "西湖区",
                },
                {
                  value: "3-1-2",
                  label: "上城区",
                },
                {
                  value: "3-1-3",
                  label: "余杭区",
                },
                {
                  value: "3-1-4",
                  label: "拱墅区",
                },
                {
                  value: "3-1-5",
                  label: "滨江区",
                },
              ],
            },
            {
              value: "3-2",
              label: "宁波",
              children: [
                {
                  value: "3-2-1",
                  label: "海曙区",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>