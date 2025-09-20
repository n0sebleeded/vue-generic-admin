import RootLayout from "@/app/layouts/RootLayout.vue";
import { AuthPage } from "@/pages/auth";
import { createRouter, createWebHistory } from "vue-router";
import SidebarLayout from "@/app/layouts/SidebarLayout.vue";
import { MainPage } from "@/pages/main";
import ProtectedLayout from "@/app/layouts/ProtectedLayout.vue";

const routes = [
  {
    path: "/",
    component: RootLayout,
    children: [
      { path: "auth", component: AuthPage },
      {
        path: "",
        component: ProtectedLayout,
        children: [
          {
            path: "",
            component: SidebarLayout,
            children: [{ path: "", component: MainPage }],
          },
        ],
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
