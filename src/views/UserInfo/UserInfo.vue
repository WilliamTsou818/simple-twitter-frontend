<template>
  <div class="container container--user">
    <Head v-show="isLoading" title="loading" count="0" backArrow />
    <Head
      v-show="!isLoading"
      :title="currentViewUser.data.name"
      :count="currentViewUser.data.TweetsCount"
      backArrow
    />
    <div class="section-wrapper">
      <UserProfile
        :user="currentViewUser.data"
        :isCurrentUser="currentViewUser.isViewCurrentUser"
        :initialFollowing="currentViewUser.isFollowed"
        :isLoading="this.isLoading"
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toastification } from './../../utils/mixins'

import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import UserPopularTop from '@/components/UserPopularTop.vue'
import Head from '@/components/Head'
import UserProfile from '@/components/UserProfile.vue'

export default {
  name: 'UserInfo',
  mixins: [Toastification],
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
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
  },
  created() {
    const { user_id } = this.$route.params
    this.userId = user_id
    this.$store.dispatch('handleInitFollowing')
    this.$store.dispatch('isViewCurrentUser', user_id)
    this.fetchUser(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = to.params
    if (this.userId !== user_id) {
      this.fetchUser(user_id)
    }
    this.userId = user_id
    this.$store.dispatch('isViewCurrentUser', user_id)
    next()
  },
  methods: {
    async fetchUser(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.getUser({ userId })
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
        this.ToastError({
          title: '取得使用者資訊失敗！',
          description: message,
        })
        this.$router.back()
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixin.scss';
.section-wrapper {
  height: calc(100vh - 56px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
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
    border-bottom: 2px solid var(--white);
    @include font-setting(15px, bold, var(--gray-500));
    &:hover {
      color: var(--theme);
    }
    &.router-link-active {
      color: var(--theme);
      border-bottom: 2px solid var(--theme);
    }
  }
}

@media screen and (max-width: 600px) {
  .section-wrapper {
    padding-bottom: 56px;
  }
}
</style>
