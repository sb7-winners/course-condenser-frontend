import { createRouter, createWebHistory } from "@ionic/vue-router";
import { auth } from "../firebase";
const routes = [
  {
    path: "/",
    component: () => import("../views/Courses.vue"),
    beforeEnter: (to, from, next) => {
      if (auth.currentUser) {
        next("/courses/");
      } else {
        next();
      }
    },
  },
  {
    path: "/courses/",
    component: () => import("../views/Courses.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/lecture/:id",
    component: () => import("../views/Lecture.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  next();
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
