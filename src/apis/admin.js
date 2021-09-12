import { apiHelper } from './../utils/helpers'

export default {
  users: {
    get() {
      return apiHelper.get('/admin/users')
    },
  },
  tweet: {
    delete({ tweetId }) {
      return apiHelper.delete(`/admin/tweets/${tweetId}`)
    },
    get() {
      return apiHelper.get('/admin/tweets')
    },
  },
}
