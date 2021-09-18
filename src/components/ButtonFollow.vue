<template>
  <button
    class="button-follow"
    :class="{ 'button-follow-small': small }"
    :disabled="isProcessing"
  >
    <div
      @click.stop.prevent="handleClickFollow(userId)"
      class="button-follow__follow"
      v-show="!user.isFollowed"
    >
      <div v-show="!isProcessing">跟隨</div>
      <div v-show="isProcessing">load</div>
    </div>
    <div
      @click.stop.prevent="handleClickFollow(userId)"
      class="button-follow__following"
      v-show="user.isFollowed"
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
    userId: {
      type: Number,
    },
    small: {
      type: Boolean,
      defaut: false,
    },
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async handleClickFollow(userId) {
      try {
        this.isProcessing = true
        const response = this.user.isFollowed
          ? await usersAPI.removeFollowShip({ userId })
          : await usersAPI.addFollowShip({ id: userId })
        const { data } = response
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$store.dispatch('handleSetFollowed', userId)
        this.isProcessing = false
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
.button-follow {
  &__follow,
  &__following {
    font-family: Noto Sans TC;
    font-size: 15px;
    border-radius: 20px;
    padding: 8px 16px;
    font-weight: 900;
  }
  &__small {
    line-height: 15px;
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
.button-follow-small {
  > .button-follow__follow,
  > .button-follow__following {
    line-height: 15px;
  }
}
</style>
