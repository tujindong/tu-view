import { createApp } from "vue";
import App from "./app.vue";
import TuView from "@tu-view/components";

const app = createApp(App);

app.use(TuView);

app.mount("#app");
