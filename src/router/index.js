import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
    meta: {
      needsAuth: true,
    },
  },
  {
    path: "/favorite",
    name: "Favorite",
    component: () => import("../views/Favorite.vue"),
    meta: {
      needsAuth: true,
    },
  },
  {
    path: "/profileedit",
    name: "ProfileEdit",
    component: () => import("../views/ProfileEdit.vue"),
    meta: {
      needsAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const authenticated = store.currentUser !== null;
  if (!authenticated && to.meta.needsAuth) {
    next("login");
  } else {
    next();
  }
});

export default router;
