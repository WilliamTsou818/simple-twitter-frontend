<template>
  <div class="container container--user">
    <Head
      :title="currentViewUser.data.name"
      :count="currentViewUser.data.id"
      backArrow
    />
    <UserProfile
      :user="currentViewUser.data"
      :isCurrentUser="currentViewUser.isViewCurrentUser"
      :followingsCount="currentViewUser.followings.length"
      :followersCount="followersCount"
      :initialFollowing="currentViewUser.isFollowed"
    />
    <section class="tab-router">
      <router-link
        :to="{ name: 'UserAllTweets', params: { user_id: userId } }"
        class="tab-router__link"
      >
        <span class="tab-router__text">推文</span>
      </router-link>
      <router-link
        :to="{ name: 'UserAllReplies', params: { user_id: userId } }"
        class="tab-router__link"
      >
        <span class="tab-router__text">推文與回覆</span>
      </router-link>
      <router-link
        :to="{ name: 'UserAllLike', params: { user_id: userId } }"
        class="tab-router__link"
      >
        <span class="tab-router__text">喜歡的內容</span>
      </router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import UserPopularTop from '@/components/UserPopularTop.vue'
import Head from '@/components/Head'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserInfo',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserPopularTop,
    Head,
    UserProfile,
  },
  data() {
    return {
      isLoading: true,
      userId: '',
      userInfo: {},
      followersCount: 0,
      tweetsCount: 0,
      userData: [],
      initialFollowers: [],
      initialFollowing: false,
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
    followingsCount() {
      return this.$store.getters.getViewUser.followings.length
    },
  },
  created() {
    const { user_id } = this.$route.params
    this.userId = user_id
    this.$store.dispatch('handleInitFollowing')
    this.$store.dispatch('isViewCurrentUser', user_id)
    this.fetchUser(user_id)
    this.fetchUserFollowing(user_id)
    this.fetchUserFollower(user_id)
    this.fetchUserTweets(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id: userId } = to.params
    this.fetchUser(userId)
    this.fetchUserFollowing(userId)
    this.fetchUserFollower(userId)
    this.$store.dispatch('isViewCurrentUser', userId)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUser({ userId })
        this.userInfo = data
        this.$store.dispatch('handleInitViewUser', data)
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        let message = ''
        if (err.response) {
          message = err.response.data.message
        } else {
          message = err.message
        }
        Toast.fire({
          icon: 'error',
          title: `請稍後重整！\n ${message}`,
        })
      }
    },
    async fetchUserFollowing(userId) {
      try {
        const { data } = await usersAPI.getUserFollowing({ userId })
        this.$store.dispatch('handleSetViewUserFollowings', data)
      } catch (err) {
        this.isLoading = false
        let message = ''
        if (err.response) {
          message = err.response.data.message
        } else {
          message = err.message
        }
        console.log(message)
      }
    },
    async fetchUserFollower(userId) {
      try {
        const { data } = await usersAPI.getUserFollower({ userId })
        this.$store.dispatch('handleSetViewUserFollowers', data)
        this.initialFollowers = data
        this.initialFollowers.forEach((item) => {
          if (item.followerId === this.currentUser.id) {
            this.initialFollowing = true
          }
        })
        this.followersCount = data.length
      } catch (err) {
        this.isLoading = false
        let message = ''
        if (err.response) {
          message = err.response.data.message
        } else {
          message = err.message
        }
        console.log(message)
      }
    },
    async fetchUserTweets(userId) {
      try {
        const { data } = await usersAPI.getUserTweets({ userId })
        this.tweetsCount = data.length
      } catch (err) {
        this.isLoading = false
        let message = ''
        if (err.response) {
          message = err.response.data.message
        } else {
          message = err.message
        }
        console.log(message)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.tab-router {
  display: flex;
  align-items: center;
  width: 100%;
  height: 53px;
  border-bottom: 1px solid var(--blue-gray-600);
  &__link {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    max-width: 130px;
    height: 100%;
    font-size: 15px;
    font-weight: bold;
    border-bottom: 2px solid var(--white);
    color: var(--gray-500);
    &:hover {
      color: var(--theme);
    }
    &.router-link-active {
      color: var(--theme);
      border-bottom: 2px solid var(--theme);
    }
  }
}
</style>
