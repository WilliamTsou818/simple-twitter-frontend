import { apiHelper } from './../utils/helpers'

export default {
  signIn({ account, password, role }) {
    return apiHelper.post(`/${role}/signin`, {
      account,
      password,
    })
  },
}
