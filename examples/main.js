import Vue from "vue";
import App from "./App.vue";
import tuview from "../packages/tuview";
import "./style.scss";

Vue.use(tuview.install);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
}).$mount("#app");
