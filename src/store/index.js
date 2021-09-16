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
      isViewCurrentUser: false,
      isFollowed: false,
      id: -1,
    },
    isFollowing: [],
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
    async initFollowing(context) {
      try {
        const userId = context.state.currentUser.id
        const { data } = await usersAPI.getUserFollowing({ userId })
        console.log(data)
      } catch (error) {
        console.log('error', error)
      }
    },
    isViewCurrentUser(context, user_id) {
      context.commit('setIsViewCurrentUser', user_id)
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
    setIsViewCurrentUser(state, id) {
      if (state.currentUser.id === id - 0) {
        state.viewUser.isViewCurrentUser = true
      } else {
        state.viewUser.isViewCurrentUser = false
      }
    },
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser
    },
    getViewUser: (state) => state.viewUser,
  },
  modules: {},
})
