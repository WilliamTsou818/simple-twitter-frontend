import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  //後台登入路由
  {
    path: "/admin/login",
    name: "AdminLogin",
    component: () => import("../views/Admin/AdminLogin.vue"),
  },
  //後台路由
  {
    path: "/admin",
    name: "Admin",
    redirect: "/admin/tweets",
    component: () => import("../views/Admin.vue"),
    children: [
      {
        path: "tweets",
        component: () => import("../views/Admin/AdminAllTweets.vue"),
      },
      {
        path: "users",
        component: () => import("../views/Admin/AdminAllUsers.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
