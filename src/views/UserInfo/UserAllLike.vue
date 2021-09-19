<template>
  <section class="section-tweets">
    <Spinner v-if="isLoading" />
    <div class="section-tweets__tip" v-show="!isLoading && tweets.length === 0">
      目前沒有喜歡的推文
    </div>
    <div v-if="!isLoading">
      <UserTweet
        v-for="tweet in tweets"
        :key="tweet.TweetId"
        :init-tweet="tweet"
        @action-reply="handleActionReply"
      />
    </div>
  </section>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import Spinner from '@/components/Spinner'
import UserTweet from '@/components/UserTweet'
import { replyAction } from '@/utils/mixins'

export default {
  name: 'UserAllLike',
  components: {
    Spinner,
    UserTweet,
  },
  data() {
    return {
      isLoading: true,
      tweets: [],
    }
  },
  mixins: [replyAction],
  created() {
    const { user_id } = this.$route.params
    this.fetchUserLikes(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = to.params
    this.fetchUserLikes(user_id)
    next()
  },
  methods: {
    async fetchUserLikes(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserLikes({ userId })
        this.tweets = data
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
            title: `獲取喜歡的推文列表失敗！\n ${message}`,
          })
        }
      }
    },
  },
  watch: {
    // 回覆成功，刷新
    isReplyRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isReplyRefresh', false)
        // ...下面可以自行增加頁面刷新function
        const { user_id } = this.$route.params
        this.fetchUserLikes(user_id)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-tweets {
  &__tip {
    margin-top: 1rem;
    font-size: 1.5rem;
    min-width: 225px;
  }
}
</style>
