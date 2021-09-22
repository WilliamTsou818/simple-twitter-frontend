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
        placeholder="有什麼新鮮事？"
        required
      ></textarea>
      <span class="section-post__tip">{{ postTip }}</span>
      <button
        class="section-post__btn-tweet"
        type="button"
        @click.prevent.stop="handleNewPost"
      >
        <div v-show="!isProcessing">推文</div>
        <div
          v-show="isProcessing"
          class="section-post__btn-tweet__spinner"
        ></div>
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
import { Toastification } from './../../utils/mixins'
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
      // 驗證提示訊息
      postTip: '',
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  mixins: [newPostAction, replyAction, Toastification],
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

        this.ToastError({
          title: '獲取推文失敗！',
          description: message,
        })
      }
    },
    // 驗證
    validation() {
      if (!this.description || this.description.length === 0) {
        this.postTip = '內容不可空白'
      }
      if (this.postTip.length > 0) {
        this.ToastError({
          title: '請填寫正確推文內容',
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
        this.ToastSuccess({
          title: '推文成功！',
          description: data.message,
        })
        this.fetchTweets()
      } catch (err) {
        this.isProcessing = false
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }

        this.ToastError({
          title: '推文失敗！',
          description: message,
        })
      }
    },
  },
  watch: {
    description() {
      if (this.description.length > this.descriptionMaxLength) {
        this.postTip = `字數不可超過 ${this.descriptionMaxLength} 字`
      } else {
        this.postTip = ''
      }
    },
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
@import '../../assets/styles/mixin.scss';
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
    @include font-setting(18px, 500, var(--text));
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
    @include font-setting(18px, 500, var(--white));
    &:hover {
      background-color: var(--theme-600);
    }
    &__spinner {
      @include spinner(24px, var(--white));
      margin: 0 auto;
    }
  }
  &__tip {
    text-align: right;
    position: absolute;
    right: 101px;
    bottom: 20px;
    font-size: 15px;
    font-weight: 500;
    color: var(--input-error-border);
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
