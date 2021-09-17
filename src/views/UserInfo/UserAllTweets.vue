<template>
  <section class="section-tweets" ref="sectionTweets">
    <Spinner v-if="isLoading" />
    <div class="section-tweets__tip" v-show="!isLoading && tweets.length === 0">
      目前沒有推文
    </div>
    <UserTweet
      v-for="tweet in tweets"
      :key="tweet.TweetId"
      :init-tweet="tweet"
    />
  </section>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import Spinner from '@/components/Spinner'
import UserTweet from '@/components/UserTweet'

export default {
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
  created() {
    const { user_id } = this.$route.params
    console.log('created user_id', user_id)
    this.fetchUserTweets(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = to.params
    console.log('beforeRouteUpdate user_id', user_id)
    this.fetchUserTweets(user_id)
    next()
  },
  methods: {
    async fetchUserTweets(userId, scrollTop = true) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUserTweets({ userId })
        this.tweets = data
        // 回到頂部
        if (scrollTop && this.$refs.sectionTweets) {
          // 切換分頁的時候sectionTweets可能已經不在了
          this.$refs.sectionTweets.scrollTop = 0
        }
        this.isLoading = false
      } catch (err) {
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
}
</script>

<style lang="scss" scoped>
.section-tweets {
  height: calc(100vh - 505px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__tip {
    margin-top: 1rem;
    font-size: 1.5rem;
    min-width: 225px;
  }
}

@media screen and (max-width: 600px) {
  .section-tweets {
    padding-bottom: 56px;
  }
}
</style>
