<template>
  <section class="section-replies">
    <Spinner v-if="isLoading" />
    <div
      class="section-replies__tip"
      v-show="!isLoading && replies.length === 0"
    >
      目前沒有回覆
    </div>
    <div v-if="!isLoading">
      <UserTweetReply
        v-for="reply in replies"
        :key="reply.id"
        :init-reply="reply"
      />
    </div>
  </section>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import Spinner from '@/components/Spinner'
import UserTweetReply from '@/components/UserTweetReply'

export default {
  name: 'UserAllReplies',
  components: {
    Spinner,
    UserTweetReply,
  },
  data() {
    return {
      isLoading: true,
      replies: [],
    }
  },
  created() {
    const { user_id } = this.$route.params
    this.fetchUserReplies(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = to.params
    this.fetchUserReplies(user_id)
    next()
  },
  methods: {
    async fetchUserReplies(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserReplies({ userId })
        this.replies = data
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }
        // FIXME:希望後端改回傳success & 空陣列
        if (message !== 'No tweets found') {
          Toast.fire({
            icon: 'error',
            title: `獲取回覆列表失敗！\n ${message}`,
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-replies {
  &__tip {
    margin-top: 1rem;
    font-size: 1.5rem;
    min-width: 225px;
  }
}
</style>
