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
  //取得熱門前十清單
  getPopularUsers() {
    return apiHelper2.get('/users/top')
  },
  //取得user的正追蹤清單
  getUserFollowing({ userId }) {
    return apiHelper2.get(`/users/${userId}/followings`)
  },
}
