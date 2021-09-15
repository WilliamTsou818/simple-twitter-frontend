import { apiHelper } from './../utils/helpers'

export default {
  signIn({ account, password }) {
    return apiHelper.post('/users/signin', {
      account,
      password,
    })
  },
  signInAdmin({ account, password }) {
    return apiHelper.post('/admin/signin', {
      account,
      password,
    })
  },
}
