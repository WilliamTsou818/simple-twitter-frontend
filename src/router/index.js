import Vue from "vue";
import VueRouter from "vue-router";
import store from './../store'
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  // console.log('authorizeIsAdmin')
  next()
}

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
        name: "AdminAllTweets",
        component: () => import("../views/Admin/AdminAllTweets.vue"),
        beforeEnter: authorizeIsAdmin
      },
      {
        path: "users",
        name: "AdminAllUsers",
        component: () => import("../views/Admin/AdminAllUsers.vue"),
        beforeEnter: authorizeIsAdmin
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated
  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 設定不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['AdminLogin']

  // TODO:開發中使用 (to.name !== 'Home')
  // token 無效，轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name) && to.name !== 'Home') {
    console.log('to.name', to.name)
    console.log('token 無效，轉址到指定登入頁')
    switch (to.name) {
      case 'AdminAllTweets':
      case 'AdminAllUsers':
        next('/admin/login')
        break
      default:
        // TODO:這邊可以設定UserLogin
        next('/admin/login')
    }
    return
  }

  // token 有效，轉址到/admin
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    console.log('to.name', to.name)
    console.log('token 有效，轉址到指定開始頁面')
    switch (to.name) {
      case 'AdminLogin':
        next('/admin')
        break
      default:
        // TODO:這邊可以設定User
        next('/admin')
    }
    return
  }

  next()
})

export default router;
