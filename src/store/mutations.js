import Vue from 'vue'
import router from '@/router'

export default {
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
    // TODO:socket disconnect
    if (Vue.prototype.$socket.connected) {
      console.log('呼叫 socket disconnect')
      // 如果在公共聊天室，要發送離開事件
      if (router.currentRoute.name === 'PublicRoom') {
        console.log('登出前呼叫離開房間')
        Vue.prototype.$socket.emit('leavePublicRoom')
      } else if (
        router.currentRoute.name === 'Private' ||
        router.currentRoute.name === 'PrivateRoom'
      ) {
        Vue.prototype.$socket.emit('leavePrivateRoom')
      }
      Vue.prototype.$socket.disconnect()
      Vue.prototype.$socket.auth.token = ''
    }
    state.currentUser = {}
    state.isAuthenticated = false
    state.token = ''
    localStorage.removeItem('token')
  },
  setInitViewUser(state, data) {
    //編輯個人資料 先暫時用解構賦值解決
    state.viewUser.data = {
      ...state.viewUser.data,
      ...data,
    }
  },
  setIsViewCurrentUser(state, id) {
    if (state.currentUser.id === Number(id)) {
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
  setPublicUnreadMessage(state, data) {
    state.publicUnreadMessage = data
  },
  setPublicAllMessages(state, data) {
    state.publicAllMessages = [...data]
  },
  pushPublicAllMessages(state, data) {
    state.publicAllMessages.push(data)
  },
  setPrivateRooms(state, data) {
    state.privateRooms = data
  },
  setPublicUsers(state, data) {
    state.publicUsers = [...data]
  },
  setPrivateUnreadMessageCount(state, data) {
    state.privateUnreadMessageCount = data
  },
  setPrivateAllMessages(state, data) {
    state.privateAllMessages = [...data]
  },
  pushPrivateAllMessages(state, data) {
    state.privateAllMessages.push(data)
  },
}
