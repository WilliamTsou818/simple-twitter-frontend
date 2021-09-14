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
}

