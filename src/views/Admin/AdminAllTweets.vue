<template>
  <div class="container container--admin">
    <Head :title="title" />
    <section class="tweets">
      <Spinner v-if="isLoading" />
      <transition-group name="fade">
        <AdminTweet
          v-for="tweet in tweets"
          :key="tweet.id"
          :tweet="tweet"
          :handleClickDelete="deleteTweet"
        />
      </transition-group>
    </section>
    <AdminCheckModal v-show="isModalOpen" />
  </div>
</template>

<script>
import adminAPI from '@/apis/admin'
import { Toastification } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import AdminTweet from '@/components/AdminTweet'
import AdminCheckModal from '@/components/AdminCheckModal'

export default {
  mixins: [Toastification],
  components: {
    Spinner,
    Head,
    AdminTweet,
    AdminCheckModal,
  },
  data() {
    return {
      title: '推文清單',
      isLoading: true,
      isProcessing: false,
      tweets: [],
      isModalOpen: false,
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
        this.ToastSuccess({
          title: '刪除推文成功！',
          description: `The tweet id ${tweetId} deleted successfully`,
        })
      } catch (err) {
        console.log(err)
      }
    },
    handleToggleModal() {
      this.isModalOpen = !this.isModalOpen
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}

@media screen and (max-width: 600px) {
  .tweets {
    padding-bottom: 56px;
  }
}
</style>
