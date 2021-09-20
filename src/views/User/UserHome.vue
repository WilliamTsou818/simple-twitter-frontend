<template>
  <div class="container container--user">
    <Head :title="title" />
    <section class="section-post">
      <div
        class="section-post__avatar"
        v-bind:style="{
          backgroundImage: 'url(' + currentUser.avatar + ')',
        }"
      ></div>
      <textarea
        class="section-post__description"
        id="section-post__description"
        v-model.trim="description"
        name="description"
        rows="2"
        minlength="1"
        :maxlength="descriptionMaxLength"
        placeholder="有什麼新鮮事？"
        required
      ></textarea>
      <button
        class="section-post__btn-tweet"
        type="button"
        @click.prevent.stop="handleNewPost"
        :disabled="isProcessing"
      >
        推文
      </button>
    </section>
    <div class="divider"></div>
    <section class="section-tweets" ref="sectionTweets">
      <Spinner v-if="isLoading" />
      <div
        class="section-tweets__tip"
        v-show="!isLoading && tweets.length === 0"
      >
        目前沒有推文
      </div>
      <UserTweet
        v-for="tweet in tweets"
        :key="tweet.TweetId"
        :init-tweet="tweet"
        @action-reply="handleActionReply"
      />
    </section>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'
import { newPostAction, replyAction } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import UserTweet from '@/components/UserTweet'

export default {
  components: {
    Head,
    Spinner,
    UserTweet,
  },
  data() {
    return {
      title: '首頁',
      isLoading: true,
      isProcessing: false,
      tweets: [],
      description: '',
      descriptionMaxLength: 140,
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  mixins: [newPostAction, replyAction],
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets(scrollTop = true) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.tweets.get()
        this.tweets = data
        // 回到頂部
        if (scrollTop && this.$refs.sectionTweets) {
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
          title: `獲取推文失敗！\n ${message}`,
        })
      }
    },
    // 驗證
    validation() {
      let toastTip = ''
      if (!this.description || this.description.length === 0) {
        toastTip = '內容不可空白'
      } else if (this.description.length > this.descriptionMaxLength) {
        toastTip = `內容上限 ${this.descriptionMaxLength} 字`
      }
      if (toastTip.length !== 0) {
        Toast.fire({
          icon: 'warning',
          title: toastTip,
        })
        return false
      }
      return true
    },
    async handleNewPost() {
      try {
        if (!this.validation()) {
          // 驗證失敗
          return
        }
        this.isProcessing = true
        const { data } = await usersAPI.tweets.newPost({
          description: this.description,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.description = ''
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: `推文成功！\n ${data.message}`,
        })
        this.fetchTweets()
      } catch (err) {
        this.description = ''
        this.isProcessing = false
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
          title: `推文失敗！\n ${message}`,
        })
      }
    },
  },
  watch: {
    isNewPostRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isNewPostRefresh', false)
        // ...下面可以自行增加頁面刷新function
        this.fetchTweets()
      }
    },
    // 回覆成功，刷新
    isReplyRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isReplyRefresh', false)
        // ...下面可以自行增加頁面刷新function
        this.fetchTweets(false)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.section-post {
  position: relative;
  width: 100%;
  height: 120px;
  &__avatar {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #c4c4c4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__description {
    width: calc(100% - 75px - 15px);
    height: 52px;
    position: absolute;
    top: 21px;
    left: 75px;
    right: 15px;
    color: var(--text);
    font-weight: 500;
    font-size: 18px;
    border: none;
    resize: none;
    &::-webkit-scrollbar {
      display: none;
    }
    &::placeholder {
      color: var(--gray-400);
    }
  }
  &__btn-tweet {
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 66px;
    height: 38px;
    background-color: var(--theme);
    border-radius: 50px;
    font-size: 18px;
    font-weight: 500;
    color: var(--white);
    &:disabled {
      background-color: var(--theme-dark);
    }
  }
}
.divider {
  width: 100%;
  height: 10px;
  background: var(--blue-gray-600);
}
.section-tweets {
  height: calc(100vh - 190px);
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
