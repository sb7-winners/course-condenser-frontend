import { createRouter, createWebHistory } from "@ionic/vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../views/Index.vue"),
  },
  {
    path: "/folder/:id",
    component: () => import("../views/Folder.vue"),
  },
  {
    path: "/transcript/",
    component: () => import("../views/Transcript.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
