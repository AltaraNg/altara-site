import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";

const app = createApp(App);
app.use(router);
app.use(VueSmoothScroll);
app.mount("#app");

