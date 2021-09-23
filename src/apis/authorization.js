import { apiHelper } from './../utils/helpers'

export default {
  signIn({ email, password, role }) {
    return apiHelper.post(`/${role}/signin`, {
      email,
      password,
    })
  },
}
