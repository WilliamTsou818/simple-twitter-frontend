<template>
  <div class="container container--user">
    <Head
      :title="currentViewUser.data.name"
      :count="currentViewUser.data.TweetsCount"
      backArrow
    />
    <section class="tab-router">
      <router-link
        :to="{ name: 'UserFollowers', params: { user_id: userId } }"
        class="tab-router__link"
        :class="{ 'router-link-active': tab === 'UserFollowers' }"
      >
        <span class="tab-router__text">跟隨者</span>
      </router-link>
      <router-link
        :to="{ name: 'UserFollowings', params: { user_id: userId } }"
        class="tab-router__link"
        :class="{ 'router-link-active': tab === 'UserFollowings' }"
      >
        <span class="tab-router__text">正在跟隨</span>
      </router-link>
    </section>
    <router-view :isLoadingPage="isLoading" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toastification } from './../../utils/mixins'

import Head from '@/components/Head'

export default {
  name: 'UserAllFollow',
  mixins: [Toastification],
  components: {
    Head,
  },
  data() {
    return {
      isLoading: true,
      userId: '',
      show: '',
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
    tab() {
      return this.$route.name
    },
  },
  created() {
    const { user_id } = this.$route.params
    this.userId = user_id
    this.fetchUser(user_id)
    this.$store.dispatch('isViewCurrentUser', user_id)
    this.$store.dispatch('fetchViewUserFollowings')
    this.$store.dispatch('fetchViewUserFollowers')
  },
  beforeRouteUpdate(to, from, next) {
    const { user_id } = this.$route.params
    this.userId = user_id
    this.fetchUser(user_id)
    this.$store.dispatch('isViewCurrentUser', user_id)
    this.$store.dispatch('fetchViewUserFollowings')
    this.$store.dispatch('fetchViewUserFollowers')
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
    &.router-link-active,
    .router-link-exact-active {
      color: var(--theme);
      border-bottom: 2px solid var(--theme);
    }
  }
}
</style>
