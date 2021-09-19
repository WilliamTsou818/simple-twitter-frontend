import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登入token
    token: '',
    // 當前使用者資料
    currentUser: {
      id: -1,
      account: '',
      name: '',
      email: '',
      avatar: '',
      cover: '',
      introduction: '',
      role: '',
    },
    viewUser: {
      data: {
        id: -1,
        TweetsCount: 0,
        FollowersCount: 0,
        FollowingsCount: 0,
        isFollowed: false,
      },
      isLoading: false,
      isViewCurrentUser: false,
      followings: [],
      followers: [],
    },
    followingUsers: [],
    popular: [],
    // 是否驗證
    isAuthenticated: false,
    // 開關NewPostModal
    isNewPostModalOpen: false,
    // 是否新增推文成功需要刷新
    isNewPostRefresh: false,
    // 回覆的目標推文內容
    replyDetail: {},
    // 開關ReplyModal
    isReplyModalOpen: false,
    // 是否回覆成功需要刷新
    isReplyRefresh: false,
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser()
        console.log('fechCurrentUser')
        const {
          id,
          account,
          name,
          email,
          avatar,
          cover,
          introduction,
          role,
        } = data
        commit('setCurrentUser', {
          id,
          account,
          name,
          email,
          avatar,
          cover,
          introduction,
          role,
        })
        return true
      } catch (error) {
        console.log('error', error)
        console.log('error', error.message)
        console.log('取得當前使用者失敗')
        // 驗證失敗的話一併觸發登出的行為，以清除 state 中的 token
        commit('revokeAuthentication')
        return false
      }
    },
    async handleInitFollowing(context) {
      try {
        const userId = context.state.currentUser.id
        const { data } = await usersAPI.getUserFollowing({ userId })
        context.commit('setInitFollowing', data)
      } catch (error) {
        console.log('error', error)
      }
    },
    // 取得瀏覽的使用者資料
    handleInitViewUser(context, data) {
      context.commit('setInitViewUser', data)
    },
    // 瀏覽使用者資料是否為當前用戶
    isViewCurrentUser(context, user_id) {
      context.commit('setIsViewCurrentUser', user_id)
    },
    // 更新追蹤
    handleSetFollowed(context, id) {
      context.commit('setFollowed', id)
    },
    handleSetPopular(context, data) {
      context.commit('setPopular', data)
    },
    handleSetViewUserFollowings(context, data) {
      context.commit('setViewUserFollowings', data)
    },
    handleSetViewUserFollowers(context, data) {
      context.commit('setViewUserFollowers', data)
    },
    isNewPostModalOpen(context, isOpen) {
      context.commit('setIsNewPostModalOpen', isOpen)
    },
    isNewPostRefresh(context, isRefresh) {
      context.commit('setIsNewPostRefresh', isRefresh)
    },
    // 設定回覆的目標推文內容
    handleSetReplyDetail(context, data) {
      context.commit('setReplyDetail', data)
    },
    isReplyModalOpen(context, isOpen) {
      context.commit('setIsReplyModalOpen', isOpen)
      if (!isOpen) {
        // 關閉時同步清空Modal資料
        context.commit('setReplyDetail', {})
      }
    },
    isReplyRefresh(context, isRefresh) {
      context.commit('setIsReplyRefresh', isRefresh)
    },
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      }
      // 將使用者驗證用的 token 儲存在 state 中
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    // 登出，撤銷相關資料
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    },
    setInitFollowing(state, data) {
      state.followingUsers = data
    },
    setInitViewUser(state, data) {
      //編輯個人資料 先暫時用解構賦值解決
      state.viewUser.data = {
        ...state.viewUser.data,
        ...data,
      }
    },
    setIsViewCurrentUser(state, id) {
      if (state.currentUser.id === id - 0) {
        state.viewUser.isViewCurrentUser = true
      } else {
        state.viewUser.isViewCurrentUser = false
      }
    },
    setFollowed(state, id) {
      if (state.viewUser.data.id === id) {
        state.viewUser.data.isFollowed = !state.viewUser.data.isFollowed
        if (state.viewUser.data.isFollowed) {
          state.viewUser.data.FollowersCount++
        } else {
          state.viewUser.data.FollowersCount--
        }
      }
      state.popular.forEach((user) => {
        if (user.id === Number(id)) {
          user.isFollowed = !user.isFollowed
          if (state.viewUser.isViewCurrentUser) {
            if (user.isFollowed) {
              state.viewUser.data.FollowingsCount++
            } else {
              state.viewUser.data.FollowingsCount--
            }
          }
        }
      })
      state.viewUser.followings.forEach((user) => {
        if (user.followingId === Number(id)) {
          user.isFollowed = !user.isFollowed
        }
      })
      state.viewUser.followers.forEach((user) => {
        if (user.followerId === Number(id)) {
          user.isFollowed = !user.isFollowed
        }
      })
    },
    setPopular(state, data) {
      state.popular = data
    },
    setViewUserFollowings(state, data) {
      state.viewUser.followings = data
    },
    setViewUserFollowers(state, data) {
      state.viewUser.followers = data
    },
    // 設定NewPostModal開關
    setIsNewPostModalOpen(state, isOpen) {
      state.isNewPostModalOpen = isOpen
    },
    // 新增推文成功，設定刷新
    setIsNewPostRefresh(state, isRefresh) {
      state.isNewPostRefresh = isRefresh
    },
    setReplyDetail(state, data) {
      state.replyDetail = data
    },
    setIsReplyModalOpen(state, isOpen) {
      state.isReplyModalOpen = isOpen
    },
    setIsReplyRefresh(state, isRefresh) {
      state.isReplyRefresh = isRefresh
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getViewUser: (state) => state.viewUser,
    getPopular: (state) => state.popular,
  },
  modules: {},
})
