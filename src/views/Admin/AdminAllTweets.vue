<template>
  <div class="container container--admin">
    <Head :title="title" />
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

import Head from '@/components/Head'
import AdminTweet from '@/components/AdminTweet'

export default {
  components: {
    Head,
    AdminTweet,
  },
  data() {
    return {
      title: '推文清單',
      isloading: true,
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
