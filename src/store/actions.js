import router from '@/router'
import usersAPI from '../apis/users'
import { sortBy } from '../utils/helpers'

export default {
  async fetchCurrentUser({ commit }) {
    try {
      const { data } = await usersAPI.getCurrentUser()
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
  async fetchViewUserFollowings(context) {
    try {
      context.state.viewUser.isLoading = true
      const { user_id } = router.currentRoute.params
      const userId = user_id
      const { data } = await usersAPI.getUserFollowing({ userId })
      context.commit('setViewUserFollowings', data)
      context.state.viewUser.isLoading = false
    } catch (error) {
      console.log('error', error)
    }
  },
  async fetchViewUserFollowers(context) {
    try {
      context.state.viewUser.isLoading = true
      const { user_id } = router.currentRoute.params
      const userId = user_id
      const { data } = await usersAPI.getUserFollower({ userId })
      context.commit('setViewUserFollowers', data)
      context.state.viewUser.isLoading = false
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
  // 設定公開聊天室歷史訊息
  setPublicAllMessages(context, data) {
    context.commit('setPublicAllMessages', data)
  },
  //設定私人聊天室們
  setPrivateRooms(context, data) {
    // 先排序
    let orderData = sortBy.createdAt(data, sortBy.DESC)
    context.commit('setPrivateRooms', orderData)
  },
  // 設定私人聊天室歷史訊息
  setPrivateAllMessages(context, data) {
    context.commit('setPrivateAllMessages', data)
  },
  // 設定公開聊天室線上的使用者
  SOCKET_publicUsers(context, data) {
    console.log('SOCKET_publicUsers back', data)
    context.commit('setPublicUsers', data)
  },
  // 公開聊天室系統通知
  SOCKET_announce(context, data) {
    console.log('SOCKET_announce back', data)
    context.commit('pushPublicAllMessages', {
      ...data,
      isPill: true,
    })
  },
  // 公開聊天室訊息
  SOCKET_publicMessage(context, data) {
    console.log('SOCKET_publicMessage back', data)
    context.commit('pushPublicAllMessages', data)
  },
  // 私人聊天室訊息
  SOCKET_privateMessage(context, data) {
    console.log('SOCKET_privateMessage back', data)
    context.commit('pushPrivateAllMessages', data)
    // 更新room資料
    const updatePrivateRooms = context.state.privateRooms.map((room) => {
      if (room.RoomId === data.RoomId) {
        return {
          ...room,
          createdAt: data.createdAt,
          content: data.content
        }
      } else {
        return room
      }
    })
    context.dispatch('setPrivateRooms', updatePrivateRooms)
  },
  // 未讀訊息
  SOCKET_unReadMessage(context, data) {
    console.log('SOCKET_unReadMessage back', data)
    context.commit(
      'setPrivateUnreadMessageCount',
      data.privateUnreadMessageCount
    )
  },
  // 公開未讀
  SOCKET_publicUnreadMessage(context, data) {
    console.log('SOCKET_publicUnreadMessage  back', data)
    context.commit('setPublicUnreadMessage', data.hasUnreadPublicMessage)
  },
}
