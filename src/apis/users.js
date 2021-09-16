import { apiHelper, apiHelper2 } from './../utils/helpers'

export default {
  // 取得目前使用者(順便驗證token)
  getCurrentUser() {
    return apiHelper.get('/users/current_user')
  },
  // 使用者註冊
  signUp({ account, name, email, password, checkPassword }) {
    return apiHelper.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword,
    })
  },
  //取得該 user 的資料
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  // 編輯使用者帳戶資料
  setting({ userId, requestData }) {
    return apiHelper.put(`/users/${userId}`, requestData)
  },
  //取得熱門前十清單
  getPopularUsers() {
    return apiHelper.get('/users/top')
  },
  //取得user的正追蹤清單
  getUserFollowing({ userId }) {
    return apiHelper.get(`/users/${userId}/followings`)
  },
  //取得user的被誰追蹤清單
  getUserFollower({ userId }) {
    return apiHelper.get(`/users/${userId}/followers`)
  },
  //取得 user的推文清單
  getUserTweets({ userId }) {
    return apiHelper.get(`/users/${userId}/tweets`)
  },
  // 編輯使用者帳戶資料
  editUser({ userId, avatar }) {
    return apiHelper.put(`/users/${userId}`, avatar)
  },
  //追隨id相符的使用者
  addFollowShip({ id }) {
    return apiHelper.post('/followships', { id })
  },
  //取消追隨id相符的使用者
  removeFollowShip({ followingId }) {
    return apiHelper.delete(`/followships/${followingId}`)
  },
  tweets: {
    get() {
      return apiHelper.get('/tweets')
    },
    like({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/like`)
    },
    unlike({ tweetId }) {
      return apiHelper.post(`/tweets/${tweetId}/unlike`)
    },
    newPost({ description }) {
      return apiHelper.post('/tweets', { description })
    },
    getDetail({ tweetId }) {
      return apiHelper.get(`/tweets/${tweetId}`)
    }
  },
}
