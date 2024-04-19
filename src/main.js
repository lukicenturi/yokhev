import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.scss";

import '../node_modules/vue3-marquee-slider/dist/style.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
