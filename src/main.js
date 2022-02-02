import { createApp } from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";
import titleMixin from "./mixins/titleMixin";
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);
app.use(router);
app.use(VueSmoothScroll);
app.use(VueAxios, axios);
app.mixin(titleMixin);
app.mount("#app");

