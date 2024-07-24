import { createRouter, createWebHistory } from "vue-router";
import PageView from "../views/PageView.vue";
import OpeningView from "../views/OpeningView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/page",
      name: "PageView",
      component: PageView,
    },
    {
      path: "/",
      name: "opening",
      component: OpeningView,
    },
  ],
});

export default router;
