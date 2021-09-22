<template>
  <div class="container container--user">
    <Head :title="title" backArrow />
    <Spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <section v-if="tweetDetail.User" class="section-tweet">
        <div class="section-tweet__user">
          <router-link
            :to="{
              name: 'UserAllTweets',
              params: { user_id: tweetDetail.User.id },
            }"
            class="section-tweet__user__avatar"
            v-bind:style="{
              backgroundImage: 'url(' + tweetDetail.User.avatar + ')',
            }"
          ></router-link>
          <router-link
            :to="{
              name: 'UserAllTweets',
              params: { user_id: tweetDetail.User.id },
            }"
            class="section-tweet__user__right"
          >
            <div class="section-tweet__user__name">
              {{ tweetDetail.User.name }}
            </div>
            <div class="section-tweet__user__account">
              {{ tweetDetail.User.account | altFilter }}
            </div>
          </router-link>
        </div>
        <div class="section-tweet__content">
          {{ tweetDetail.description }}
        </div>
        <div class="section-tweet__date">
          {{ tweetDetail.updatedAt | timeFormatFilter }}
        </div>
        <div class="divider"></div>
        <div class="section-tweet__count">
          <span class="section-tweet__count__text">
            {{ tweetDetail.RepliesCount | thousandFilter }}
          </span>
          <span class="section-tweet__count__reply">
            回覆
          </span>
          <span class="section-tweet__count__text">
            {{ tweetDetail.LikesCount | thousandFilter }}
          </span>
          <span class="section-tweet__count__like">
            喜歡次數
          </span>
        </div>
        <div class="divider"></div>
        <div class="section-tweet__actions">
          <button
            class="section-tweet__actions__button"
            @click.stop.prevent="handleActionReply(tweetDetail)"
          >
            <img
              class="section-tweet__actions__icon section-tweet__actions__icon--reply"
              src="@/assets/images/icon/reply.svg"
              alt="reply"
            />
          </button>
          <button
            class="section-tweet__actions__button"
            @click.stop.prevent="handleClickLike(tweetDetail.id)"
            :disabled="isProcessing"
          >
            <img
              v-if="!tweetDetail.isLike"
              class="section-tweet__actions__icon section-tweet__actions__icon--unlike"
              src="@/assets/images/icon/like.svg"
              alt="unlike"
            />
            <img
              v-else
              class="section-tweet__actions__icon section-tweet__actions__icon--like"
              src="@/assets/images/icon/like_fill.svg"
              alt="like"
            />
          </button>
        </div>
      </section>
      <section class="section-replies" ref="sectionReplies">
        <div class="section-replies__tip" v-show="isNoReply">
          目前沒有回覆
        </div>
        <UserTweetReply
          v-for="reply in tweetDetail.Replies"
          :key="reply.id"
          :init-reply="reply"
          :reply-to="replyTo"
          :reply-to-id="tweetDetail.User.id"
        />
      </section>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import {
  timeFormatFilter,
  altFilter,
  thousandFilter,
  replyAction,
  Toastification,
} from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import UserTweetReply from '@/components/UserTweetReply'

export default {
  components: {
    Head,
    Spinner,
    UserTweetReply,
  },
  mixins: [
    timeFormatFilter,
    altFilter,
    thousandFilter,
    replyAction,
    Toastification,
  ],
  created() {
    const { tweet_id: tweetId } = this.$route.params
    this.fetchTweetDetail(tweetId)
  },
  beforeRouteUpdate(to, from, next) {
    const { tweet_id: tweetId } = to.params
    this.fetchTweetDetail(tweetId)
    next()
  },
  data() {
    return {
      title: '推文',
      isLoading: true,
      isProcessing: false,
      tweetDetail: {},
      isReplyModalOpen: false,
    }
  },
  computed: {
    isNoReply() {
      return (
        !this.isLoading &&
        this.tweetDetail.Replies &&
        this.tweetDetail.Replies.length === 0
      )
    },
    replyTo() {
      return this.tweetDetail.User ? this.tweetDetail.User.account : ''
    },
  },
  methods: {
    async fetchTweetDetail(tweetId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.tweets.getDetail({ tweetId })
        this.tweetDetail = data
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
          title: '獲取推文資訊失敗！',
          description: message,
        })
        this.$router.back()
      }
    },
    async handleClickLike(tweetId) {
      try {
        this.isProcessing = true
        const actionIsLike = !this.tweetDetail.isLike
        let response = {}
        if (actionIsLike) {
          response = await usersAPI.tweets.like({ tweetId })
        } else {
          response = await usersAPI.tweets.unlike({ tweetId })
        }
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        this.tweetDetail = {
          ...this.tweetDetail,
          isLike: actionIsLike,
          LikesCount: actionIsLike
            ? this.tweetDetail.LikesCount + 1
            : this.tweetDetail.LikesCount - 1,
        }
        this.ToastSuccess({
          title: data.message,
        })
      } catch (err) {
        this.isProcessing = false
        console.log(err)
        this.ToastError({
          description: err.message,
        })
      }
    },
  },
  watch: {
    // 回覆成功，刷新
    isReplyRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isReplyRefresh', false)
        // ...下面可以自行增加頁面刷新function
        const { tweet_id: tweetId } = this.$route.params
        this.fetchTweetDetail(tweetId)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixin.scss';
.wrapper {
  height: calc(100vh - 56px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
.section-tweet {
  width: 100%;
  text-align: left;
  padding: 15px;
  border-bottom: 1px solid var(--blue-gray-600);
  .divider {
    width: 100%;
    height: 1px;
    background: var(--blue-gray-600);
  }
  &__user {
    display: flex;
    &__avatar {
      width: 50px;
      height: 50px;
      margin-right: 10px;
      border-radius: 50px;
      background-color: #c4c4c4;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__name {
      font-weight: bold;
      padding-right: 5px;
      color: var(--text);
    }
    &__account {
      color: var(--gray-500);
    }
  }
  &__content {
    word-break: break-all;
    margin-top: 15px;
    @include font-setting(23px, 500, var(--text));
  }
  &__date {
    margin: 15px 0;
    @include font-setting(15px, 500, var(--gray-500));
  }
  &__count {
    display: flex;
    margin: 20px 5px;
    align-items: center;
    line-height: 28px;
    @include font-setting(19px, 500, var(--gray-500));
    &__text {
      @include font-setting(19px, bold, var(--black));
      margin-right: 5px;
    }
    &__reply {
      margin-right: 20px;
    }
  }
  &__actions {
    display: flex;
    margin-top: 15px;
    height: 36px;
    width: 100%;
    &__button {
      margin-right: 150px;
    }
    &__icon {
      width: 30px;
    }
  }
}
.section-replies {
  &__tip {
    margin-top: 1rem;
    font-size: 1.5rem;
    min-width: 225px;
  }
}

@media screen and (max-width: 600px) {
  .wrapper {
    padding-bottom: 56px;
  }
}
</style>
