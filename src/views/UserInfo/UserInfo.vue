<template>
  <div class="container container--user">
    <Head :title="title" :count="count" backArrow />
    <UserProfile
      :user="userInfo"
      :isCurrentUser="currentViewUser.isViewCurrentUser"
      :followingsCount="followingsCount"
      :followersCount="followersCount"
      :initialFollowing="initialFollowing"
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
import { mapState, mapGetters } from 'vuex'
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
      followingsCount: 0,
      followersCount: 0,
      tweetsCount: 0,
      userData: [],
      initialFollowers: [],
      initialFollowing: false,
    }
  },
  computed: {
    ...mapState(['currentUser']),
    // TODO:暫時用
    title() {
      return this.userInfo.name || ''
    },
    count() {
      return this.tweetsCount || '0'
    },
    isCurrentUser() {
      return this.userId == this.currentUser.id
    },
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
  },
  created() {
    const { user_id } = this.$route.params
    this.userId = user_id
    this.$store.dispatch('initFollowing')
    this.$store.dispatch('isViewCurrentUser', user_id)
    this.fetchUser(user_id)
    this.fetchUserFollowing(user_id)
    this.fetchUserFollower(user_id)
    this.fetchUserTweets(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id: userId } = to.params
    this.fetchUser(userId)
    this.$store.dispatch('isViewCurrentUser', userId)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUser({ userId })
        this.userInfo = data
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
        this.followingsCount = data.length
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
        this.initialFollowers = data
        console.log('initialFollowers', this.initialFollowers)
        this.initialFollowers.forEach((item) => {
          if (item.followerId === this.currentUser.id) {
            this.initialFollowing = true
            console.log(item.followerId)
          }
        })
        console.log(this.initialFollowing)
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
