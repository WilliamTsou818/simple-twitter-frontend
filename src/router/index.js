import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './../store'
import CustomToast from '../components/CustomToast.vue'

Vue.use(VueRouter)

// 設定NavigationDuplicated不提示
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return new Promise((resolve, reject) => {
    originalPush.call(
      this,
      location,
      () => {
        // on complete
        resolve(this.currentRoute)
      },
      (error) => {
        // on abort
        // only ignore NavigationDuplicated error
        if (
          error.name === 'NavigationDuplicated' ||
          error.message.includes(
            'Avoided redundant navigation to current location'
          )
        ) {
          resolve(this.currentRoute)
        } else {
          reject(error)
        }
      }
    )
  })
}

// 檢查頁面權限
const checkAuthorize = (to, from, next, role) => {
  const currentUser = store.state.currentUser
  if (currentUser && currentUser.role !== role) {
    // console.log(`checkAuthorize ${role} fail`)
    Vue.$toast({
      component: CustomToast,
      props: {
        icon: 'error',
        title: '權限不足，無法訪問！',
        description: '',
      },
    })
    next(from)
    return
  }
  // console.log(`checkAuthorize ${role} success`)
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
    // 檢查目前權限是進入前台or後台
    beforeEnter: (to, from, next) => {
      const currentUser = store.state.currentUser
      if (currentUser && currentUser.role === 'admin') {
        next('/admin/login')
      } else {
        next('/user/login')
      }
    },
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
    beforeEnter: checkUserAuthorize,
  },
  //聊天室
  {
    path: '/user/chat',
    name: 'Chat',
    redirect: '/user/chat/private',
    component: () => import('../views/User/Chat.vue'),
    children: [
      {
        //公開聊天室
        path: '/user/chat/public',
        name: 'PublicRoom',
        component: () => import('../views/User/PublicRoom.vue'),
        beforeEnter: checkUserAuthorize,
      },
      {
        //私人聊天室
        path: '/user/chat/private',
        name: 'Private',
        redirect: '/user/chat/private/0',
        beforeEnter: checkUserAuthorize,
      },
      {
        //私人聊天室
        path: '/user/chat/private/:room_id',
        name: 'PrivateRoom',
        component: () => import('../views/User/PrivateRoom.vue'),
        beforeEnter: checkUserAuthorize,
      },
    ],
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
    // console.log('isAuthenticated', isAuthenticated)
  }

  // 設定不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ['UserLogin', 'UserRegister', 'AdminLogin']

  // token 無效，轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    // console.log('to.name', to.name)
    // console.log('token 無效，轉址到指定登入頁')
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
    // console.log('to.name', to.name)
    // console.log('token 有效，轉址到指定開始頁面')
    switch (to.name) {
      case 'AdminLogin':
        next('/admin')
        break
      default:
        next('/user')
    }
    return
  }
  isAuthenticated && checkSocketConnect()

  next()
})

// 檢查socket是否連線
const checkSocketConnect = () => {
  console.log('checkSocketConnect', store.state.currentUser.role)
  console.log('socket.connected ===> ', Vue.prototype.$socket.connected)
  if (!Vue.prototype.$socket.connected) {
    console.log('socket 尚未連接')
    if (store.state.currentUser.role === 'user') {
      console.log('這邊是要進入User的相關頁面---------------socket 連接')
      console.log('socket 開始連接')
      Vue.prototype.$socket.auth.token = store.state.token
      console.log('auth token', Vue.prototype.$socket.auth.token)
      Vue.prototype.$socket.connect()
    } else {
      console.log('不是user,不連接 socket')
    }
  } else {
    console.log('socket 已經連接')
  }
}

export default router
