import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      alias: "/",
      path: "/home",
      name: "home",
      component: () => import("../views/Home/index.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutMe/index.vue"),
    },
    {
      path: "/works",
      name: "works",
      component: () => import("../views/Works/index.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/Contact/index.vue"),
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
