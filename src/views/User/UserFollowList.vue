<template>
  <div class="follow">
    <Spinner v-if="isLoading" />
    <div v-if="!isLoading">
      <div v-if="emptyState" class="follow__empty-hint">
        <h3>You don’t have any followers yet</h3>
        <p>When someone follows you, you’ll see them here.</p>
      </div>

      <router-link
        :to="{
          name: 'UserAllTweets',
          params: { user_id: user.followerId || user.followingId },
        }"
        v-for="user in followList"
        :key="user.account"
        class="follow__list"
      >
        <div
          class="follow__list__avatar"
          :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
        ></div>
        <div class="follow__list__detail">
          <div class="follow__list__social">
            <div class="follow__list__info">
              <div class="follow__list__name">{{ user.name }}</div>
              <div class="follow__list__account">
                {{ user.account | altFilter }}
              </div>
            </div>
            <div v-if="user.followerId && user.followerId !== currentUser.id">
              <ButtonFollow :user="user" :userId="user.followerId" small />
            </div>
            <div v-if="user.followingId && user.followingId !== currentUser.id">
              <ButtonFollow :user="user" :userId="user.followingId" small />
            </div>
          </div>
          <div class="follow__list__intro">
            {{ user.introduction }}
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { altFilter } from '@/utils/mixins'

import Spinner from '@/components/Spinner'
import ButtonFollow from '@/components/ButtonFollow.vue'

export default {
  name: 'UserFollowList',
  mixins: [altFilter],
  components: {
    ButtonFollow,
    Spinner,
  },
  data() {
    return {
      isLoading: false,
      show: 'followings',
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      // const isViewCurrentUser = this.$store.getters.getViewUser
      return this.$store.getters.getViewUser
      // ? this.$store.getters.getCurrentUser
      // : this.$store.getters.getViewUser
    },
    tab() {
      return this.$route.name
    },
    followList() {
      return this.tab === 'UserFollowings'
        ? this.currentViewUser.followings
        : this.currentViewUser.followers
    },
    emptyState() {
      return !this.followList.length
    },
  },
  created() {
    const { user_id } = this.$route.params
    const { name } = this.$route
    this.show = name
    this.fetchUserFollow(user_id)
  },
  beforeRouteUpdate(to, from, next) {
    console.log('usrFollowList')
    const { user_id } = to.params
    // this.fetchUserFollow(user_id)
    next()
  },
  methods: {
    async fetchUserFollow(userId) {
      try {
        this.isLoading = true
        const responseFollowing = await usersAPI.getUserFollowing({ userId })
        this.$store.dispatch(
          'handleSetViewUserFollowings',
          responseFollowing.data
        )
        const responseFollowers = await usersAPI.getUserFollower({ userId })
        this.$store.dispatch(
          'handleSetViewUserFollowers',
          responseFollowers.data
        )
        this.isLoading = false
      } catch (err) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: `${err.message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.follow {
  height: calc(100vh - 109px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__empty-hint {
    margin-top: 100px;
  }
  &__list {
    display: flex;
    padding: 10px 15px;
    border-bottom: 1px solid var(--blue-gray-600);
    cursor: pointer;
    &:hover {
      background-color: var(--blue-gray-500);
    }
    &__avatar {
      width: 50px;
      height: 50px;
      border-radius: 25px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: var(--gray-300);
      margin-right: 10px;
    }
    &__detail {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    &__social {
      display: flex;
      justify-content: space-between;
    }
    &__info {
      text-align: left;
      font-size: 15px;
      line-height: 15px;
    }
    &__name {
      color: var(--text);
      font-weight: 900;
    }
    &__account {
      color: var(--gray-500);
      margin-top: 5px;
      font-weight: 500;
    }
    &__intro {
      color: var(--text);
      text-align: left;
      font-weight: 500;
      line-height: 22px;
      padding-top: 5px;
      word-break: break-all;
    }
  }
}
</style>
