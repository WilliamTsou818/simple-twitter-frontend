<template>
  <div class="user-profile">
    <UserEditModal
      v-show="isModalOpen"
      :handleToggleModal="handleToggleModal"
    />
    <div class="user-profile__img">
      <div
        class="user-profile__img__cover"
        :style="{ backgroundImage: 'url(' + user.cover + ')' }"
      ></div>
      <div
        class="user-profile__img__avatar"
        :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
      ></div>
    </div>
    <div class="user-profile__action">
      <div v-if="isCurrentUser" class="user-profile__action__self">
        <button @click="handleToggleModal" class="user-profile__action__edit">
          編輯個人資料
        </button>
      </div>
      <div v-if="!isCurrentUser" class="user-profile__action__other">
        <button>
          <img
            class="user-profile__action__icon"
            src="@/assets/images/btn_messege.svg"
            alt="btn_messege"
          />
        </button>
        <button @click="handleClickNotify" class="user-profile__action__button">
          <img
            class="user-profile__action__icon"
            v-show="!isNotify"
            src="@/assets/images/btn_noti_normal.svg"
            alt="noti_normal"
          />
          <img
            class="user-profile__action__icon"
            v-show="isNotify"
            src="@/assets/images/btn_noti_active.svg"
            alt="noti_active"
          />
        </button>
        <button class="user-profile__action__button">
          <div
            @click.stop.prevent="addFollowing(user.id)"
            class="user-profile__action__follow"
            v-show="!initialFollowing"
          >
            跟隨
          </div>
          <div
            @click.stop.prevent="removeFollowing(user.id)"
            class="user-profile__action__following"
            v-show="initialFollowing"
          >
            正在跟隨
          </div>
        </button>
      </div>
    </div>
    <div class="user-profile__detail">
      <div>
        <div class="user-profile__detail__name">{{ user.name }}</div>
        <div class="user-profile__detail__account">
          {{ user.account | altFilter }}
        </div>
      </div>
      <div class="user-profile__detail__intro">
        {{ user.introduction }}
      </div>
      <div class="user-profile__detail__follow">
        <span
          ><span class="user-profile__detail__count"
            >{{ followingsCount }}個</span
          >跟隨中</span
        >
        <span
          ><span class="user-profile__detail__count"
            >{{ followersCount }}位</span
          >跟隨者</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { altFilter, thousandFilter } from './../utils/mixins'
import UserEditModal from '@/components/UserEditModal.vue'
export default {
  components: {
    UserEditModal,
  },
  props: {
    isCurrentUser: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
    },
    followingsCount: {
      type: Number,
      default: 0,
    },
    followersCount: {
      type: Number,
      default: 0,
    },
    initialFollowing: {
      type: Boolean,
    },
  },
  mixins: [altFilter],
  data() {
    return {
      isModalOpen: false,
      isNotify: false,
    }
  },
  watch: {
    initialFollowing(newValue) {
      this.isFollowing = newValue
    },
  },
  methods: {
    handleClickNotify() {
      this.isNotify = !this.isNotify
    },
    handleToggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    // 增加追蹤
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowShip({ id: userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$store.dispatch('handleSetFollowed', userId)
      } catch (e) {
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
        const { data } = await usersAPI.removeFollowShip({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$store.dispatch('handleSetFollowed', userId)
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

<style lang="scss" scoped>
.user-profile {
  &__img {
    position: relative;
    width: 100%;
    &__cover,
    &__avatar {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__cover {
      width: 100%;
      height: 200px;
      background-color: #999;
    }
    &__avatar {
      position: absolute;
      left: 15px;
      top: 124px;
      width: 140px;
      height: 140px;
      background-color: #999;
      border: 4px solid var(--white);
      border-radius: 70px;
    }
  }
  &__action {
    padding: 10px 15px 20px 0;
    text-align: right;
    &__edit {
      color: var(--theme);
      font-size: 15px;
      font-weight: bold;
      border: 1px solid var(--theme);
      border-radius: 24px;
      padding: 12px 16px;
    }
    &__other {
      display: flex;
      justify-content: flex-end;
    }
    &__icon {
      border-radius: 50px;
      &:hover {
        background-color: var(--theme-200);
      }
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
  &__detail {
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    &__name {
      font-weight: 900;
      color: var(--text);
      font-size: 19px;
    }
    &__account {
      color: var(--gray-500);
      font-size: 15px;
    }
    &__intro {
      font-size: 14px;
      margin: 14px 0;
    }
    &__follow {
      display: inline-flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5px;
      font-size: 14px;
      color: var(--gray-500);
    }
    &__count {
      font-weight: 500;
      color: var(--black);
    }
  }
}
</style>
