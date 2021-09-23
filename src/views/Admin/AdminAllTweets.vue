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
          :handleListClickDelete="handleListClickDelete"
          :isProcessing="isProcessing"
        />
      </transition-group>
    </section>
    <AdminCheckModal
      v-show="isModalOpen"
      :confirmTweet="confirmTweet"
      :handleToggleModal="handleToggleModal"
      :handleClickDelete="deleteTweet"
    />
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
      confirmTweet: {},
    }
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    handleToggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    handleListClickDelete(tweet) {
      this.handleToggleModal(tweet)
      this.confirmTweet = { ...tweet }
    },
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
        this.handleToggleModal()
        this.isProcessing = true
        const { data } = await adminAPI.tweets.delete({ tweetId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId)
        this.isProcessing = false
        this.ToastSuccess({
          title: '刪除推文成功！',
          description: `The tweet id ${tweetId} deleted successfully`,
        })
      } catch (err) {
        this.isProcessing = false
        this.ToastError({
          title: '刪除推文失敗！',
          description: err.message,
        })
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
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.25s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

@media screen and (max-width: 600px) {
  .tweets {
    padding-bottom: 56px;
  }
}
</style>
