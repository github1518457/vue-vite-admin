// import "./assets/main.css";

// import { createApp } from "vue";
// import { createPinia } from "pinia";

// import App from "./App.vue";
// import router from "./router";

// const app = createApp(App);

// app.use(createPinia());
// app.use(router);

// app.mount("#app");
////////////////////////////////////
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(Antd);
app.mount("#app");
