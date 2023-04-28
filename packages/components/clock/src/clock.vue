<template>
  <div class="tu-clock">
    <div
      class="tu-clock__hand is-hours"
      :style="{ transform: hourRotate }"
    ></div>
    <div
      class="tu-clock__hand is-minutes"
      :style="{ transform: minuteRotate }"
    ></div>
    <div
      class="tu-clock__hand is-seconds"
      :style="{ transform: secondRotate }"
    ></div>
    <div class="tu-clock__inner">
      <div
        class="tu-clock__inner--marker"
        v-for="marker in markers"
        :key="marker"
      >
        <span
          ><i>{{ marker }}</i></span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TuClock",

  props: {
    time: String,
  },

  data() {
    return {
      markers: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      hourRotate: "rotatez(0deg)",
      minuteRotate: "rotatez(0deg)",
      secondRotate: "rotatez(0deg)",
    };
  },

  computed: {},

  created() {},

  mounted() {
    if (this.timer) clearInterval(this.timer);
    if (!this.timer) {
      this.timer = setInterval((_) => this.showTime(), 1000);
    }
  },

  destroyed() {
    if (this.timer) clearInterval(this.timer);
  },

  methods: {
    showTime() {
      const now = new Date();
      const times = this.time
        ? this.time.split(":")
        : [now.getHours(), now.getMinutes(), now.getSeconds()];
      let hour = +times[0];
      let minute = +times[1];
      let second = +times[2] || 0;
      hour = hour > 11 ? hour - 12 : hour;
      let hourAngle = hour * 30 + ((minute * 6) / 360) * 30;
      let minuteAngle = minute * 6;
      let secondAngle = second * 6;
      this.hourRotate = `rotatez(${hourAngle}deg)`;
      this.minuteRotate = `rotatez(${minuteAngle}deg)`;
      this.secondRotate = `rotatez(${secondAngle}deg)`;
    },
  },
};
</script>

<style></style>
