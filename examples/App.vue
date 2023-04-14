<template>
  <div>
    <tu-transfer v-model="value" :data="data"></tu-transfer>

    <br />
    <br />
    <tu-calendar type="card"> </tu-calendar>

    <br />
    <br />
    <tu-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="70"
    ></tu-progress>
    <tu-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="100"
      status="success"
    ></tu-progress>
    <tu-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="80"
      status="warning"
    ></tu-progress>
    <tu-progress
      :text-inside="true"
      :stroke-width="18"
      :percentage="50"
      status="exception"
    ></tu-progress>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      data: generateData(),
      value: [1, 4],
    };
  },
};
</script>