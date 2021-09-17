<template>
  <section class="section-tweets">
    <Spinner v-if="isLoading" />
    <div class="section-tweets__tip" v-show="!isLoading && tweets.length === 0">
      目前沒有推文
    </div>
    <UserTweet
      v-for="tweet in tweets"
      :key="tweet.TweetId"
      :init-tweet="tweet"
      @action-reply="handleActionReply"
    />
  </section>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import Spinner from '@/components/Spinner'
import UserTweet from '@/components/UserTweet'
import { newPostAction, replyAction } from '@/utils/mixins'

export default {
  name: 'UserAllTweets',
  components: {
    Spinner,
    UserTweet,
  },
  data() {
    return {
      currentUserId: '',
      isLoading: true,
      tweets: [],
    }
  },
  mixins: [newPostAction, replyAction],
  created() {
    this.currentUserId = this.$store.getters.getCurrentUser.id
    const { user_id } = this.$route.params
    this.fetchUserTweets(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = to.params
    this.fetchUserTweets(user_id)
    next()
  },
  methods: {
    async fetchUserTweets(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserTweets({ userId })
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

        Toast.fire({
          icon: 'error',
          title: `獲取推文列表失敗！\n ${message}`,
        })
      }
    },
  },
  watch: {
    isNewPostRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isNewPostRefresh', false)
        // ...下面可以自行增加頁面刷新function
        const { user_id } = this.$route.params
        // 在自己的推文列表畫面才刷新
        if (this.currentUserId === Number(user_id)) {
          this.fetchUserTweets(user_id)
        }
      }
    },
    // 回覆成功，刷新
    isReplyRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isReplyRefresh', false)
        // ...下面可以自行增加頁面刷新function
        const { user_id } = this.$route.params
        this.fetchUserTweets(user_id)
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
