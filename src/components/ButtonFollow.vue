<template>
  <button class="button-follow">
    <div
      @click.stop.prevent="addFollowing(user.id)"
      class="button-follow__follow"
      :disabled="isProcessing"
      v-show="!user.isFollowed"
    >
      <div v-show="!isProcessing">跟隨</div>
      <div v-show="isProcessing">load</div>
    </div>
    <div
      @click.stop.prevent="removeFollowing(user.id)"
      class="button-follow__following"
      v-show="user.isFollowed"
      :disabled="isProcessing"
    >
      <div v-show="!isProcessing">正在跟隨</div>
      <div v-show="isProcessing">load</div>
    </div>
  </button>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
export default {
  name: 'ButtonFollow',
  props: {
    user: {
      type: Object,
    },
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    // 增加追蹤
    async addFollowing(userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.addFollowShip({ id: userId })
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$store.dispatch('handleSetFollowed', userId)
        this.isProcessing = false
      } catch (e) {
        this.isProcessing = false
        console.log(e)
        Toast.fire({
          icon: 'error',
          title: '新增追蹤失敗',
        })
      }
    },
    // 取消追蹤
    async removeFollowing(userId) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.removeFollowShip({ userId })
        Toast.fire({
          icon: 'success',
          title: `${data.message}`,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$store.dispatch('handleSetFollowed', userId)
        this.isProcessing = false
      } catch (e) {
        this.isProcessing = false
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

<style lang="scss" scoped>
.button-follow {
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
}
</style>
