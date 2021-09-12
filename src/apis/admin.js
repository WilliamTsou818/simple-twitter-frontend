// import { apiHelper } from './../utils/helpers'
import { apiHelper2 } from './../utils/helpers'

export default {
  users: {
    get() {
      return apiHelper2.get('/admin/users')
    },
  },
  tweets: {
    delete({ tweetId }) {
      return apiHelper2.delete(`/admin/tweets/${tweetId}`)
    },
    get() {
      return apiHelper2.get('/admin/tweets')
    },
  },
}
