import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
import { Toast } from '@/utils/helpers'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 檢查頁面權限
const checkAuthorize = (to, from, next, role) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== role) {
    console.log(`checkAuthorize ${role} fail`)
    Toast.fire({
      icon: 'error',
      title: '權限不足，無法訪問！',
    })
    return
  }
  console.log(`checkAuthorize ${role} success`)
  next()
}

const checkUserAuthorize = (to, from, next) => {
  checkAuthorize(to, from, next, 'user')
}

const checkAdminAuthorize = (to, from, next) => {
  checkAuthorize(to, from, next, 'admin')
}

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
  // 使用者註冊
  {
    path: '/user/register',
    name: 'UserRegister',
    component: () => import('../views/User/UserRegister.vue'),
  },
  // 使用者註冊
  {
    path: '/user/setting',
    name: 'UserSetting',
    component: () => import('../views/User/UserSetting.vue'),
  },
  //前台路由
  {
    path: '/user',
    name: 'User',
    redirect: '/user/home',
    component: () => import('../views/User.vue'),
    children: [
      {
        // 首頁
        path: '/user/home',
        name: 'UserHome',
        component: () => import('../views/User/UserHome.vue'),
        beforeEnter: checkUserAuthorize,
      },
      {
        // 個人資訊
        path: '/user/:user_id',
        name: 'UserInfo',
        redirect: '/user/:user_id/tweets',
        component: () => import('../views/UserInfo/UserInfo.vue'),
        //TODO:不確定還需不需要這行
        beforeEnter: checkUserAuthorize,
        children: [
          {
            path: 'tweets',
            name: 'UserAllTweets',
            component: () => import('../views/UserInfo/UserAllTweets.vue'),
            beforeEnter: checkUserAuthorize,
          },
          {
            path: 'replies',
            name: 'UserAllReplies',
            component: () => import('../views/UserInfo/UserAllReplies.vue'),
            beforeEnter: checkUserAuthorize,
          },
          {
            path: 'like',
            name: 'UserAllLike',
            component: () => import('../views/UserInfo/UserAllLike.vue'),
            beforeEnter: checkUserAuthorize,
          },
        ],
      },
      {
        path: '/user/:user_id',
        name: 'UserAllFollow',
        component: () => import('../views/User/UserAllFollow.vue'),
        beforeEnter: checkUserAuthorize,
        children: [
          {
            path: 'followings',
            name: 'UserFollowings',
            component: () => import('../views/User/UserFollowList.vue'),
            beforeEnter: checkUserAuthorize,
          },
          {
            path: 'followers',
            name: 'UserFollowers',
            component: () => import('../views/User/UserFollowList.vue'),
            beforeEnter: checkUserAuthorize,
          },
        ],
      },
      {
        // 推文詳細資訊頁面
        path: '/user/tweets/:tweet_id',
        name: 'UserTweetDetail',
        component: () => import('../views/User/UserTweetDetail.vue'),
        beforeEnter: checkUserAuthorize,
      },
    ],
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
  const pathsWithoutAuthentication = ['UserLogin', 'UserRegister', 'AdminLogin']

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
