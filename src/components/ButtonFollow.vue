<template>
  <button
    class="button-follow"
    :class="{
      'button-follow-small': small,
      'button-follow-wait': isProcessing,
    }"
    :disabled="isProcessing"
  >
    <div
      @click.stop.prevent="handleClickFollow(userId)"
      class="button-follow__follow"
      v-show="!user.isFollowed"
    >
      <div v-show="!isProcessing">跟隨</div>
      <div v-show="isProcessing" class="button-follow__follow__spinner"></div>
    </div>
    <div
      @click.stop.prevent="handleClickFollow(userId)"
      class="button-follow__following"
      v-show="user.isFollowed"
    >
      <div v-show="!isProcessing">正在跟隨</div>
      <div
        v-show="isProcessing"
        class="button-follow__following__spinner"
      ></div>
    </div>
  </button>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toastification } from './../utils/mixins'
export default {
  name: 'ButtonFollow',
  mixins: [Toastification],
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
        this.ToastSuccess({
          title: data.message,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
      } catch (err) {
        let message = ''
        if (err.response) {
          message = err.response.data.message
        } else {
          message = err.message
        }
        this.ToastError({
          title: '更新失敗',
          description: message,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.button-follow {
  pointer-events: all !important;
  &-wait {
    cursor: wait;
  }
  &-small {
    height: 32px;
  }
  &__follow,
  &__following {
    display: flex;
    align-items: center;
    height: 40px;
    font-family: Noto Sans TC;
    font-size: 15px;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0px 16px;
    font-weight: 900;
    border: 1px solid var(--theme);
  }
  &__follow {
    color: var(--theme);
    border: 1px solid var(--theme);
    &:hover {
      background-color: var(--theme-200);
    }
    &__spinner {
      @include spinner(24px, var(--theme));
    }
  }
  &__following {
    background-color: var(--theme);
    color: var(--white);
    &__spinner {
      @include spinner(23px, var(--white));
    }
    &:hover {
      background-color: var(--theme-600);
    }
  }
}
.button-follow-small {
  > .button-follow__follow,
  > .button-follow__following {
    line-height: 15px;
    height: 30px;
  }
}
</style>
