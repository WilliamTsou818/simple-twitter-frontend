<template>
  <div class="container container--admin">
    <Head :title="title" />
    <Spinner v-if="isLoading" />
    <section class="tweets">
      <AdminTweet
        v-for="tweet in tweets"
        :key="tweet.id"
        :tweet="tweet"
        :handleClickDelete="deleteTweet"
      />
    </section>
  </div>
</template>

<script>
import adminAPI from '@/apis/admin'
import { Toast } from './../../utils/helpers'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import AdminTweet from '@/components/AdminTweet'

export default {
  components: {
    Spinner,
    Head,
    AdminTweet,
  },
  data() {
    return {
      title: '推文清單',
      isLoading: true,
      isProcessing: false,
      tweets: [],
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await adminAPI.tweets.get()
        this.tweets = data
        this.isLoading = false
      } catch (err) {
        console.log('err', err)
      }
    },
    async deleteTweet(tweetId) {
      try {
        const { data } = await adminAPI.tweets.delete({ tweetId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)
        Toast.fire({
          icon: 'success',
          title: `The tweet id ${tweetId} deleted successfully`,
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tweets {
  height: calc(100vh - 56px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
