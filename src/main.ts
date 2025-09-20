import { createApp } from "vue";
import App from "@/app/App.vue";
import router from "@/app/routes/router.ts";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { queryClient } from "@/shared/api/queryClient.ts";
import "@/index.css";
import { createPinia } from "pinia";

const pinia = createPinia();
createApp(App)
  .use(router)
  .use(pinia)
  .use(VueQueryPlugin, { queryClient })
  .mount("#app");
