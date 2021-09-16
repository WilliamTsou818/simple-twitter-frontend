<template>
  <div class="popular">
    <div class="popular__container">
      <div class="popular__title">
        Popular
      </div>
      <Spinner v-if="isLoading" />
      <div class="popular__user-list">
        <router-link
          :to="{ name: 'UserAllTweets', params: { user_id: user.id } }"
          class="popular__user-list__list"
          v-for="user in popularUsers"
          :key="user.id"
        >
          <!-- <router-link :to="`/user/${user.id}/tweets`"> -->
          <div
            class="popular__user-list__avatar"
            :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
          ></div>
          <div class="popular__user-list__info">
            <div class="popular__user-list__name">{{ user.name }}</div>
            <div class="popular__user-list__account">{{ user.account }}</div>
          </div>
          <button class="popular__user-list__action">
            <div
              @click.stop.prevent="addFollowing(user.id)"
              v-show="!user.isFollowed"
              class="popular__user-list__follow"
            >
              追隨
            </div>
            <div
              @click.stop.prevent="removeFollowing(user.id)"
              v-show="user.isFollowed"
              class="popular__user-list__following"
            >
              正在跟隨
            </div>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
//TODO:如果是在porfile有追蹤頁面要更改上層follow狀態
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

import Spinner from '@/components/Spinner'

export default {
  name: 'UserPopularTop.vue',
  components: {
    Spinner,
  },
  data() {
    return {
      isLoading: true,
      userIsFollowing: false,
      popularUsers: [],
    }
  },
  created() {
    this.fetchPopularUsers()
  },
  methods: {
    async fetchPopularUsers() {
      try {
        const { data } = await usersAPI.getPopularUsers()
        this.popularUsers = data
        this.isLoading = false
      } catch (err) {
        console.log(err)
        Toast.fire({
          icon: 'error',
          title: 'PopularTop讀取失敗',
        })
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowShip({ id: userId })
        console.log(data)
        this.popularUsers.forEach((user) => {
          if (user.id === userId) {
            user.isFollowed = !user.isFollowed
          }
        })
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowing = true
      } catch (e) {
        console.log(e)
        Toast.fire({
          icon: 'error',
          title: '新增追蹤失敗',
        })
      }
    },
    async removeFollowing(userId) {
      try {
        console.log(userId)
        const { data } = await usersAPI.removeFollowShip({ userId })
        console.log('remov', data)
        this.popularUsers.forEach((user) => {
          if (user.id === userId) {
            user.isFollowed = !user.isFollowed
          }
        })
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowing = false
        // this.$emit('update-following', userId)
      } catch (e) {
        console.log(e)
        Toast.fire({
          icon: 'error',
          title: '取消追蹤失敗',
        })
      }
    },
  },
}
</script>

<style scoped lang="scss">
.popular {
  width: 350px;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 82px;
  &__container {
    background-color: var(--blue-gray-500);
    border-radius: 14px;
    min-height: 200px;
    padding-bottom: 8px;
  }
  &__title {
    font-size: 18px;
    text-align: left;
    padding: 10px 15px;
    font-weight: bold;
    color: var(--text);
    border-bottom: 1px solid var(--blue-gray-600);
  }
  &__user-list {
    &__list {
      display: flex;
      padding: 10px 15px;
      align-items: center;
      border-bottom: 1px solid var(--blue-gray-600);
      &:last-child {
        border-bottom: 0px solid var(--blue-gray-600);
      }
    }
    &__avatar {
      width: 50px;
      height: 50px;
      background-color: #c4c4c4;
      border-radius: 50px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__info {
      flex: 1;
      text-align: left;
      padding-left: 20px;
      font-weight: 900;
      font-size: 15px;
    }
    &__name {
      color: var(--text);
    }
    &__account {
      color: var(--gray-500);
      margin-top: 2px;
    }
    &__follow,
    &__following {
      font-family: Noto Sans TC;
      font-size: 15px;
      border-radius: 20px;
      padding: 8px 16px;
      font-weight: 900;
    }
    &__follow {
      color: var(--theme);
      border: 1px solid var(--theme);
    }
    &__following {
      background-color: var(--theme);
      color: var(--white);
    }
  }
}
</style>
