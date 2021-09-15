<template>
  <div class="user-profile">
    <UserEditModal v-if="isModalOpen" />
    <div class="user-profile__img">
      <div class="user-profile__img__cover"></div>
      <div class="user-profile__img__avatar"></div>
    </div>
    <div class="user-profile__action">
      <div class="user-profile__action__self">
        <button>編輯個人資料</button>
      </div>
      <div class="user-profile__action__other">
        <button>mail</button>
        <button>noti</button>
        <button>跟隨</button>
      </div>
    </div>
    <div class="user-profile__detail">
      <div>
        <div>{{ user.name }}</div>
        <div>{{ user.account | altFilter }}</div>
      </div>
      <div>
        {{ user.introduction }}
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </div>
      <div classs="user-profile__detail__follow">
        <span
          ><span class="card__follow__count">{{ followingsCount }}個</span
          >跟隨中</span
        >
        <span
          ><span class="card__follow__count">{{ followersCount }}位</span
          >跟隨者</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { altFilter, thousandFilter } from './../utils/mixins'
import UserEditModal from '@/components/UserEditModal.vue'
export default {
  components: {
    UserEditModal,
  },
  props: {
    user: {
      typeof: Object,
    },
    followingsCount: {
      typeof: Number,
      default: 0,
    },
    followersCount: {
      typeof: Number,
      default: 0,
    },
  },
  mixins: [altFilter],
  data() {
    return {
      isModalOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.user-profile {
  &__img {
    position: relative;
    width: 100%;
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
    padding: 20px 15px 20px 0;
    text-align: right;
  }
  &__detail {
    padding-left: 15px;
    text-align: left;
  }
}
</style>
