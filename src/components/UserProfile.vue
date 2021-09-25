<template>
  <div class="user-profile">
    <UserEditModal
      v-show="isModalOpen"
      :handleToggleModal="handleToggleModal"
    />
    <div class="user-profile__img">
      <div
        v-show="isLoading"
        class="user-profile__img__cover"
        :class="{
          'bg-skeleton': isLoading,
        }"
      ></div>
      <div
        v-show="!isLoading"
        class="user-profile__img__cover"
        :style="{ backgroundImage: 'url(' + user.cover + ')' }"
      ></div>
      <div
        v-show="isLoading"
        class="user-profile__img__avatar"
        :class="{
          'bg-skeleton': isLoading,
        }"
      ></div>
      <div
        v-show="!isLoading"
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
        <button
          @click.stop.prevent="handleClickMessege"
          :disabled="isProcessing"
        >
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
        <ButtonFollow :user="user" :userId="user.id" />
      </div>
    </div>
    <div class="user-profile__detail">
      <div>
        <div class="user-profile__detail__name">
          <div v-show="!isLoading">{{ user.name }}</div>
          <div v-show="isLoading">--</div>
        </div>
        <div class="user-profile__detail__account">
          <div v-show="!isLoading">{{ user.account | altFilter }}</div>
          <div v-show="isLoading">--</div>
        </div>
      </div>
      <div class="user-profile__detail__intro">
        <div v-show="!isLoading">{{ user.introduction }}</div>
        <div v-show="isLoading">--</div>
      </div>
      <div v-show="isLoading" class="user-profile__detail__follow">--</div>
      <div v-show="!isLoading" class="user-profile__detail__follow">
        <router-link
          :to="{ name: 'UserFollowings', params: { user_id: user.id } }"
          class="user-profile__detail__link"
        >
          <span
            ><span class="user-profile__detail__count"
              >{{ user.FollowingsCount | thousandFilter }}個</span
            >跟隨中</span
          >
        </router-link>
        <router-link
          :to="{ name: 'UserFollowers', params: { user_id: user.id } }"
          class="user-profile__detail__link"
        >
          <span
            ><span class="user-profile__detail__count"
              >{{ user.FollowersCount | thousandFilter }}位</span
            >跟隨者</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { altFilter, thousandFilter } from './../utils/mixins'
import UserEditModal from '@/components/UserEditModal.vue'
import ButtonFollow from '@/components/ButtonFollow.vue'
export default {
  components: {
    UserEditModal,
    ButtonFollow,
  },
  props: {
    isCurrentUser: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  mixins: [altFilter, thousandFilter],
  data() {
    return {
      isModalOpen: false,
      isNotify: false,
      isProcessing: false,
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    //小鈴鐺按鈕
    handleClickNotify() {
      this.isNotify = !this.isNotify
    },
    //打開編輯個人資料 Modal
    handleToggleModal() {
      this.isModalOpen = !this.isModalOpen
    },
    // 開啟私訊按鈕
    handleClickMessege() {
      // TODO:待測試
      console.log('handleClickMessege')
      console.log('targetUserId', this.user.id)
      console.log('currentUserId', this.currentUser.id)
      // 這邊先joinPrivateRoom
      this.isProcessing = true
      this.$socket.emit(
        'joinPrivateRoom',
        { targetUserId: this.user.id, currentUserId: this.currentUser.id },
        (response) => {
          // 回傳room_id
          console.log('response', response)
          // 然後跳轉私訊頁面
          const room_id = ''
          this.$router.push({ name: 'PrivateRoom', params: { room_id } })
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
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
      background-color: var(--blue-gray-600);
    }
    &__avatar {
      position: absolute;
      left: 15px;
      top: 124px;
      width: 140px;
      height: 140px;
      background-color: var(--blue-gray-900);
      border: 4px solid var(--white);
      border-radius: 70px;
    }
  }
  &__action {
    padding: 10px 15px 20px 0;
    text-align: right;
    &__edit {
      @include font-setting(15px, bold, var(--theme));
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
  }
  &__detail {
    padding-left: 15px;
    padding-right: 15px;
    text-align: left;
    max-width: 100%;
    &__name {
      @include font-setting(19px, 900, var(--text));
    }
    &__account {
      color: var(--gray-500);
      font-size: 15px;
    }
    &__intro {
      color: var(--black);
      font-size: 14px;
      margin: 14px 0;
      word-break: break-all;
    }
    &__follow {
      display: inline-flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5px;
      font-size: 14px;
      color: var(--gray-500);
    }
    &__link {
      color: var(--gray-500);
      &:hover {
        text-decoration: underline;
      }
    }
    &__count {
      font-weight: 500;
      color: var(--black);
    }
  }
}
.bg-skeleton {
  background-image: linear-gradient(
    90deg,
    rgba(#fff, 0),
    rgba(#fff, 0.5),
    rgba(#fff, 0)
  );
  background-size: 40px 100%; // width of the shine
  background-repeat: no-repeat; // No need to repeat the shine effect
  background-position: left -40px top 0; // Place shine on the left side, with offset on the left based on the width of the shine - see background-size
  animation: shine 1s ease infinite; // increase animation time to see effect in 'slow-mo'
}
@keyframes shine {
  to {
    // Move shine from left to right, with offset on the right based on the width of the shine - see background-size
    background-position: right -40px top 0;
  }
}
</style>
