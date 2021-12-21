<<<<<<< HEAD
import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import "../src/style.css";
import "../src/main.css";
import router from "./router";
import VueSmoothScroll from "vue3-smooth-scroll";

const app = createApp(App);
app.use(router);
app.use(VueSmoothScroll);
app.mount("#app");
=======
import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.scss'
>>>>>>> ea236a7ff7ff8be56491fae5cac3e220f0fbd215

