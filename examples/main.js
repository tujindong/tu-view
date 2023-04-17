import Vue from "vue";
import App from "./App.vue";
// import tuview from "../packages/tuview";
// import locale from "../lib/src/locale/lang/en";
import "./theme-dark.scss";

import Calendar from "../lib/packages/calendar";
import "../lib/packages/calendar/style.css";
import lang from "../lib/src/locale/lang/en";
import locale from "../lib/src/locale";

// 设置语言
locale.use(lang);

// 引入组件
Vue.component(Calendar.name, Calendar);
// Vue.use(tuview.install, { locale });

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
