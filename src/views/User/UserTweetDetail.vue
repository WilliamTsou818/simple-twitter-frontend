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
            <svg
              class="section-tweet__actions__icon section-tweet__actions__icon--reply"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.77881 1.40127L6.18631 1.39502H6.18506C3.45131 1.39502 1.31006 3.53689 1.31006 6.27127C1.31006 8.83252 3.30131 10.775 5.97568 10.8775V13.27C5.97568 13.3375 6.00318 13.4488 6.05068 13.5219C6.13943 13.6625 6.29068 13.7388 6.44568 13.7388C6.53193 13.7388 6.61881 13.715 6.69693 13.665C6.86193 13.56 10.7426 11.0775 11.7519 10.2238C12.9407 9.21752 13.6519 7.74252 13.6538 6.27877V6.26814C13.6501 3.53877 11.5101 1.40127 8.77881 1.40064V1.40127ZM11.1457 9.50877C10.4369 10.1088 8.10693 11.6369 6.91318 12.4106V10.4188C6.91318 10.16 6.70381 9.95002 6.44443 9.95002H6.19693C3.90943 9.95002 2.24818 8.40252 2.24818 6.27127C2.24818 4.06252 3.97818 2.33252 6.18568 2.33252L8.77756 2.33877H8.77881C10.9863 2.33877 12.7163 4.06752 12.7176 6.27377C12.7157 7.46752 12.1288 8.67627 11.1463 9.50877H11.1457Z"
              />
            </svg>
          </button>
          <button
            class="section-tweet__actions__button"
            @click.stop.prevent="handleClickLike(tweetDetail.id)"
            :disabled="isProcessing"
          >
            <svg
              v-if="!tweetDetail.isLike"
              class="section-tweet__actions__icon section-tweet__actions__icon--unlike"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 13.5239H7.49125C5.87687 13.4939 1.21875 9.28514 1.21875 5.29889C1.21875 3.38389 2.79687 1.70264 4.59562 1.70264C6.02687 1.70264 6.98937 2.69014 7.49937 3.40889C8.00812 2.69139 8.97062 1.70264 10.4025 1.70264C12.2025 1.70264 13.78 3.38389 13.78 5.29951C13.78 9.28451 9.12125 13.4933 7.50687 13.5226H7.5V13.5239ZM4.59625 2.64076C3.29625 2.64076 2.15687 3.88326 2.15687 5.30014C2.15687 8.88764 6.55312 12.5476 7.50062 12.5864C8.44937 12.5476 12.8444 8.88826 12.8444 5.30014C12.8444 3.88326 11.705 2.64076 10.405 2.64076C8.825 2.64076 7.9425 4.47576 7.935 4.49389C7.79125 4.84514 7.2125 4.84514 7.06812 4.49389C7.05937 4.47514 6.1775 2.64076 4.59687 2.64076H4.59625Z"
              />
            </svg>
            <svg
              v-else
              class="section-tweet__actions__icon section-tweet__actions__icon--like"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21.6381H11.986C9.40295 21.5901 1.94995 14.8561 1.94995 8.47812C1.94995 5.41412 4.47495 2.72412 7.35295 2.72412C9.64295 2.72412 11.183 4.30412 11.999 5.45412C12.813 4.30612 14.353 2.72412 16.644 2.72412C19.524 2.72412 22.048 5.41412 22.048 8.47912C22.048 14.8551 14.594 21.5891 12.011 21.6361H12V21.6381Z"
              />
            </svg>
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
      &:hover > .section-tweet__actions__icon {
        &--reply {
          fill: var(--blue-light);
        }
        &--unlike {
          fill: var(--like-color);
        }
        &--like {
          stroke: var(--like-color);
        }
      }
    }
    &__icon {
      width: 30px;
      height: 30px;
      &--reply,
      &--unlike {
        fill: var(--gray-500);
      }
      &--like {
        fill: var(--like-color);
      }
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
