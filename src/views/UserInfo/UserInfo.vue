<template>
  <div class="user-info">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <div>User_name</div>
      <div>User_tweet_length</div>
      <UserProfile
        :user="userInfo"
        :followingsCount="followingsCount"
        :followersCount="followersCount"
      />
      <router-view />
    </main>
    <UserPopularTop class="sm-d-none" />
  </div>
</template>

<script>
import usersAPI from '@/apis/users'

import { Toast } from '@/utils/helpers'

import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import UserPopularTop from '@/components/UserPopularTop.vue'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserInfo',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserPopularTop,
    UserProfile,
  },
  data() {
    return {
      isLoading: true,
      userId: '',
      isCurrentUser: false,
      userInfo: {},
      followingsCount: 0,
      followersCount: 0,
      userData: [],
    }
  },
  created() {
    const { user_id } = this.$route.params
    console.log('user_id', user_id)
    this.userId = user_id
    this.fetchUser(user_id)
    this.fetchUserFollowing(user_id)
    console.log(this.userInfo)
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
  },
}
</script>

<style lang="scss" scoped>
.user-info {
  max-width: 1440px;
  display: flex;
  align-items: flex-start;
  margin: 0 auto;
}
main {
  flex: 1;
}
.section-form {
  max-width: 642px;
  padding: 0 16px;
}
@media screen and (max-width: 600px) {
  .sm-d-none {
    display: none;
  }
}
@media screen and (min-width: 599px) {
  .lg-d-none {
    display: none;
  }
}
</style>
