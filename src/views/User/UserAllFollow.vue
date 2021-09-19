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
      >
        <span class="tab-router__text">跟隨者</span>
      </router-link>
      <router-link
        :to="{ name: 'UserFollowings', params: { user_id: userId } }"
        class="tab-router__link"
      >
        <span class="tab-router__text">正在跟隨</span>
      </router-link>
    </section>
    <router-view />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

import Head from '@/components/Head'

export default {
  name: 'UserAllFollow',
  components: {
    Head,
  },
  data() {
    return {
      isLoading: true,
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
    this.fetchUser(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    const { name } = this.$route
    const { user_id: userId } = to.params
    this.show = name
    this.fetchUser(userId)
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
    &.router-link-active {
      color: var(--theme);
      border-bottom: 2px solid var(--theme);
    }
  }
}
</style>
