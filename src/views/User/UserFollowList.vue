<template>
  <div class="follow">
    <div v-if="emptyState" class="follow__empty-hint">
      <h3>You don’t have any followers yet</h3>
      <p>When someone follows you, you’ll see them here.</p>
    </div>
    <div
      v-for="user in followList"
      :key="user.followingId"
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
          <button
            v-if="
              currentUser.id !== user.followerId &&
                currentUser.id !== user.followeringId
            "
            @click="
              handleClickFollow(
                user.followingId,
                user.followerId,
                user.isFollowed
              )
            "
            class="follow__list__action"
          >
            <div v-show="!user.isFollowed" class="follow__list__follow">
              跟隨
            </div>
            <div v-show="user.isFollowed" class="follow__list__following">
              正在跟隨
            </div>
          </button>
        </div>
        <div class="follow__list__intro">
          {{ user.introduction }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { altFilter } from '@/utils/mixins'

export default {
  name: 'UserFollowList',
  mixins: [altFilter],
  data() {
    return {
      isLoading: false,
      show: 'followings',
    }
  },
  computed: {
    ...mapState(['currentUser']),
    currentViewUser() {
      return this.$store.getters.getViewUser
    },
    tab() {
      console.log(this.$route.name)
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
    const { name } = this.$route
    console.log(name)
    this.show = name
    next()
  },
  methods: {
    async fetchUserFollow(userId) {
      try {
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
    async handleClickFollow(followingId, followerId, isFollowed) {
      try {
        const userId = followingId || followerId
        console.log(userId)
        let response = isFollowed
          ? await usersAPI.removeFollowShip({ userId })
          : await usersAPI.addFollowShip({ id: userId })
        const { data } = response
        this.$store.dispatch('handleSetFollowed', userId)
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (e) {
        console.log(e)
        Toast.fire({
          icon: 'error',
          title: '更新失敗',
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
    &__follow,
    &__following {
      font-family: Noto Sans TC;
      font-size: 15px;
      line-height: 15px;
      border-radius: 20px;
      padding: 8px 16px;
      font-weight: 900;
    }
    &__follow {
      color: var(--theme);
      border: 1px solid var(--theme);
      &:hover {
        background-color: var(--theme-200);
      }
    }
    &__following {
      background-color: var(--theme);
      color: var(--white);
      &:hover {
        background-color: var(--theme-600);
      }
    }
    &__intro {
      color: var(--text);
      text-align: left;
      font-weight: 500;
      line-height: 22px;
      padding-top: 5px;
    }
  }
}
</style>
