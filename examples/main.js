import Vue from "vue";
import App from "./App.vue";
import tuview from "../lib/tuview";
import "../lib/tuview.css";
Vue.use(tuview.install);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
