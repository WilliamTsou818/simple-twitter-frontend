import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// TODO:之後改成判斷role === 'admin' or 'user'
const checkAuthorize = (to, from, next, role) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== role) {
    next('/404')
    return
  }
  console.log(`checkAuthorize ${role} success`)
  next()
}
//TODO:確認身分為用戶的頁面
// const checkUserAuthorize = (to, from, next) => {
//   checkAuthorize(to, from, next, 'user')
// }

const checkAdminAuthorize = (to, from, next) => {
  checkAuthorize(to, from, next, 'admin')
}

// const authorizeIsAdmin = (to, from, next) => {
//   const currentUser = store.state.currentUser
//   if (currentUser && !currentUser.isAdmin) {
//     next('/404')
//     return
//   }
//   // console.log('authorizeIsAdmin')
//   next()
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  //後台登入路由
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: () => import('../views/Admin/AdminLogin.vue'),
  },
  //後台路由
  {
    path: '/admin',
    name: 'Admin',
    redirect: '/admin/tweets',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'tweets',
        name: 'AdminAllTweets',
        component: () => import('../views/Admin/AdminAllTweets.vue'),
        beforeEnter: checkAdminAuthorize,
      },
      {
        path: 'users',
        name: 'AdminAllUsers',
        component: () => import('../views/Admin/AdminAllUsers.vue'),
        beforeEnter: checkAdminAuthorize,
      },
    ],
  },
  //前台登入路由
  {
    path: '/user/login',
    name: 'UserLogin',
    component: () => import('../views/User/UserLogin.vue'),
  },
  //前台路由
  {
    path: '/user',
    name: 'User',
    // TODO:暫時回Home
    redirect: '/',
    // redirect: '/user/tweets',
    // component: () => import('../views/User.vue'),
    // children: [
    //   {
    //     path: 'tweets',
    //     name: 'UserAllTweets',
    //     component: () => import('../views/User/UserAllTweets.vue'),
    //     beforeEnter: checkAdminAuthorize,
    //   },
    // ],
  },
]

const router = new VueRouter({
  routes,
})

router.beforeEach(async (to, from, next) => {
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token

  let isAuthenticated = store.state.isAuthenticated
  // 比較 localStorage 和 store 中的 token 是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
    console.log('isAuthenticated', isAuthenticated)
  }

  // 設定不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['UserLogin', 'AdminLogin']

  // TODO:開發中使用 (to.name !== 'Home')
  // token 無效，轉址到登入頁
  if (
    !isAuthenticated &&
    !pathsWithoutAuthentication.includes(to.name) &&
    to.name !== 'Home'
  ) {
    console.log('to.name', to.name)
    console.log('token 無效，轉址到指定登入頁')
    switch (to.name) {
      case 'AdminAllTweets':
      case 'AdminAllUsers':
        next('/admin/login')
        break
      default:
        next('/user/login')
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
        next('/user')
    }
    return
  }

  next()
})

export default router
