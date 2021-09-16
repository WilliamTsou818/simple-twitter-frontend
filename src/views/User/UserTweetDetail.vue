<template>
  <div class="container container--user">
    <Head :title="title" backArrow />
    <Spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <section v-if="tweetDatail.User" class="section-tweet">
        <div class="section-tweet__user">
          <div
            class="section-tweet__user__avatar"
            v-bind:style="{
              backgroundImage: 'url(' + tweetDatail.User.avatar + ')',
            }"
          ></div>
          <div class="section-tweet__user__right">
            <div class="section-tweet__user__name">
              {{ tweetDatail.User.name }}
            </div>
            <div class="section-tweet__user__account">
              {{ tweetDatail.User.account | altFilter }}
            </div>
          </div>
        </div>
        <div class="section-tweet__content">
          {{ tweetDatail.description }}
        </div>
        <div class="section-tweet__date">
          {{ tweetDatail.updatedAt | timeFormatFilter }}
        </div>
        <div class="divider"></div>
        <div class="section-tweet__count">
          <span class="section-tweet__count__text">
            {{ tweetDatail.RepliesCount | thousandFilter }}
          </span>
          <span class="section-tweet__count__reply">
            回覆
          </span>
          <span class="section-tweet__count__text">
            {{ tweetDatail.LikesCount | thousandFilter }}
          </span>
          <span class="section-tweet__count__like">
            喜歡次數
          </span>
        </div>
        <div class="divider"></div>
        <div class="section-tweet__actions">
          <button
            class="section-tweet__actions__button"
            @click.stop.prevent="handleClickReply(tweetDatail.id)"
          >
            <img
              class="section-tweet__actions__icon section-tweet__actions__icon--reply"
              src="@/assets/images/icon/reply.svg"
              alt="reply"
            />
          </button>
          <button
            class="section-tweet__actions__button"
            @click.stop.prevent="handleClickLike(tweetDatail.id)"
            :disabled="isProcessing"
          >
            <img
              v-if="tweetDatail.isLike === 0"
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
          v-for="reply in tweetDatail.Replies"
          :key="reply.id"
          :init-reply="reply"
          :reply-to="tweetDatail.User.account"
        />
      </section>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { timeFormatFilter, altFilter, thousandFilter } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import Head from '@/components/Head'
import UserTweetReply from '@/components/UserTweetReply'

export default {
  components: {
    Head,
    Spinner,
    UserTweetReply,
  },
  mixins: [timeFormatFilter, altFilter, thousandFilter],
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
      tweetDatail: {},
    }
  },
  computed: {
    isNoReply() {
      return (
        !this.isLoading &&
        this.tweetDatail.Replies &&
        this.tweetDatail.Replies.length === 0
      )
    },
  },
  methods: {
    async fetchTweetDetail(tweetId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.tweets.getDetail({ tweetId })
        console.log('data', data)

        // FIXME:已通知後端希望更改status為error
        if (data.message === 'No tweet found') {
          Toast.fire({
            icon: 'error',
            title: `獲取推文資訊失敗！\n ${data.message}`,
          })
          this.$router.back()
          return
        }

        this.tweetDatail = data
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
          title: `獲取推文資訊失敗！\n ${message}`,
        })
        this.$router.back()
      }
    },
    async handleClickLike(tweetId) {
      try {
        this.isProcessing = true
        // FIXME:這邊isLike是會改成true 跟 false嗎?
        const isLike = this.tweetDatail.isLike === 0
        console.log('isLike', isLike)
        let response = {}
        if (isLike) {
          response = await usersAPI.tweets.like({ tweetId })
        } else {
          response = await usersAPI.tweets.unlike({ tweetId })
        }
        const { data } = response

        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        this.tweetDatail = {
          ...this.tweetDatail,
          isLike: isLike ? 1 : 0,
          LikesCount: isLike
            ? this.tweetDatail.LikesCount + 1
            : this.tweetDatail.LikesCount - 1,
        }
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
      } catch (err) {
        this.isProcessing = false
        console.log(err)
        Toast.fire({
          icon: 'error',
          title: `${err.message}`,
        })
      }
    },
    handleClickReply(tweetId) {
      console.log('handleClickReply', tweetId)
    },
  },
}
</script>

<style lang="scss" scoped>
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
    margin-top: 15px;
    font-weight: 500;
    font-size: 23px;
    color: var(--text);
  }
  &__date {
    margin: 15px 0;
    font-weight: 500;
    font-size: 15px;
    color: var(--gray-500);
  }
  &__count {
    display: flex;
    margin: 20px 5px;
    align-items: center;
    font-weight: bold;
    font-weight: 500;
    color: var(--gray-500);
    line-height: 28px;
    &__text {
      font-size: 19px;
      color: var(--black);
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
