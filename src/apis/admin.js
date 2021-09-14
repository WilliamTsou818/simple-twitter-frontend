import { apiHelper } from './../utils/helpers'

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
  },
  tweets: {
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    },
    get() {
      return apiHelper.get('/admin/tweets')
    },
  },
}
