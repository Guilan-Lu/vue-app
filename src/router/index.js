import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/About.vue")
  },
  {
    path: "/sign",
    name: "sign",
    component: () => import("../views/sign.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue")
  },
  {
    path: "/about2",
    name: "About2",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About2.vue")
  },
  {
    path: "/lectures/card",
    component: () => import("../views/lectures/card.vue")
  },
  {
    path: "/lectures/notes",
    component: () => import("../views/lectures/notes.vue")
  },
  {
    path: "/lectures/layout",
    component: () => import("../views/lectures/layout.vue")
  },
  {
    path: "/*",
    component: () => import("../views/e404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
