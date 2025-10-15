import { createApp } from "vue";
import { plugin, defaultConfig } from "@formkit/vue";
import { router } from "./router";
import App from "./App.vue";
import formKitConfig from "../formkit.config";

const app = createApp(App);
app.use(plugin, defaultConfig(formKitConfig));
app.use(router);
app.mount("#app");
