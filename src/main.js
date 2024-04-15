// import "./assets/main.css";
import router from "./router";
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

createApp(App).use(router).use(createPinia()).mount("#app");
