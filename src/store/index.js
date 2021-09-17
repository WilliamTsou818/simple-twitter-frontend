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
      },
      isLoading: false,
      isViewCurrentUser: false,
      isFollowed: false,
      followings: [],
      followers: [],
    },
    followingUsers: [],
    popular: [],
    // 是否驗證
    isAuthenticated: false,
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
      state.viewUser.data = data
      //加上是否追蹤此用戶
      if (
        state.followingUsers.find(
          (user) => user.followingId === state.viewUser.data.id
        )
      ) {
        state.viewUser.isFollowed = true
      } else {
        state.viewUser.isFollowed = false
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
        state.viewUser.isFollowed = !state.viewUser.isFollowed
      }
      state.popular.forEach((user) => {
        if (user.id === id - 0) {
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
