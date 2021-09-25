export default {
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
    followings: [],
    followers: [],
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
  // 公開聊天室線上使用者
  publicUsers: [],
  // 公開聊天室訊息
  publicAllMessages: [],
  // 私人聊天室們
  privateRooms: [],
  // 私訊未讀數量
  privateUnreadMessageCount: 0,
  // 私訊聊天室訊息
  privateAllMessages: [],
}
