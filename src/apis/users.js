import { apiHelper, apiHelper2 } from './../utils/helpers'

export default {
  // 取得目前使用者(順便驗證token)
  getCurrentUser() {
    return apiHelper.get('/users/current_user')
  },
  // 使用者註冊
  signUp({ account, name, email, password, checkPassword }) {
    // FIXME: 等候端Deploy到heroku之後進行修改
    return apiHelper2.post('/users', {
      account,
      name,
      email,
      password,
      checkPassword,
    })
  },
  //取得熱門前十清單
  getPopularTop() {
    return apiHelper.get('/users/top')
  },
  //取得user的正追蹤清單
  getUserFollowing({ userId }) {
    return apiHelper.get(`/users/${userId}/folowing`)
  },
}
