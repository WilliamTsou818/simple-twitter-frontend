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
        class="section-post__text"
        id="section-post__text"
        name="text"
        rows="2"
        minlength="1"
        maxlength="140"
        placeholder="有什麼新鮮事？"
        required
      ></textarea>
      <button class="section-post__btn-tweet" type="button">
        推文
      </button>
    </section>
    <div class="divider"></div>
    <Spinner v-if="isLoading" />
    <section class="section-tweets">
      <div
        class="section-tweets__tip"
        v-show="!isLoading && tweets.length === 0"
      >
        目前沒有推文
      </div>
      <UserTweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet" />
    </section>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'

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
      tweets: [],
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  created() {
    this.fetchTweets()
  },
  methods: {
    async fetchTweets() {
      try {
        this.isLoading = true
        const { data } = await usersAPI.tweets.get()
        console.log('data', data)
        this.tweets = data
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
  &__text {
    width: calc(100% - 75px - 15px);
    height: 52px;
    position: absolute;
    top: 21px;
    left: 75px;
    right: 15px;
    color: var(--gray-400);
    font-weight: 500;
    font-size: 18px;
    border: none;
    resize: none;
    &::-webkit-scrollbar {
      display: none;
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
