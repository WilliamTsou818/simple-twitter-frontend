<template>
  <div class="card">
    <div class="card__user">
      <div
        class="card__user__cover"
        :style="{ backgroundImage: 'url(' + user.cover + ')' }"
      ></div>
      <div
        class="card__user__avatar"
        :style="{ backgroundImage: 'url(' + user.avatar + ')' }"
      ></div>
    </div>
    <div class="card__info">
      <div class="card__info__name">
        {{ user.name }}
      </div>
      <div class="card__info__id">@{{ user.account }}</div>
    </div>
    <div class="card__actions">
      <div class="card__actions__tweets">
        <img
          class="card__actions__icon"
          src="@/assets/images/icon/reply.svg"
          alt="like"
        />
        <span class="card__actions__count">{{
          user.tweetsCount | thousandFilter
        }}</span>
      </div>
      <div class="card__actions__like">
        <img
          class="card__actions__icon"
          src="@/assets/images/icon/like.svg"
          alt="like"
        />
        <span class="card__actions__count">{{ user.likesCount }}</span>
      </div>
    </div>
    <div class="card__follow">
      <span
        ><span class="card__follow__count">{{ user.followingsCount }} 個</span
        >跟隨中</span
      >
      <span
        ><span class="card__follow__count">{{ user.followersCount }} 位</span
        >跟隨者</span
      >
    </div>
  </div>
</template>

<script>
import { thousandFilter } from './../utils/mixins'
export default {
  name: 'AdminUserCard',
  props: {
    user: {
      type: Object,
      requird: true,
    },
  },
  mixins: [thousandFilter],
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  grid-area: span 1;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--gray-300);
  padding-bottom: 20px;
  &__user {
    position: relative;
    &__cover,
    &__avatar {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__cover {
      height: 140px;
      width: 100%;
      background-color: #c4c4c4;
    }
    &__avatar {
      position: absolute;
      top: 68px;
      margin: 0 auto;
      left: 0;
      right: 0;
      width: 100px;
      height: 100px;
      background-color: #c4c4c4;
      border-radius: 50px;
      border: 4px solid white;
    }
  }
  &__info {
    padding-top: 32px;
    &__name {
      font-weight: 900;
      color: var(--text);
    }
    &__id {
      color: var(--gray-500);
      margin-top: 2px;
    }
  }
  &__actions {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
    padding: 1rem 0;
    &__tweets,
    &__like {
      display: flex;
    }
    &__like {
      /* margin-left: 15px; */
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
    &__count {
      margin-left: 5px;
      font-size: 15px;
      font-weight: 500;
    }
  }
  &__follow {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 5px;
    font-size: 14px;
    color: var(--gray-500);
    &__count {
      font-weight: 500;
      color: var(--black);
    }
  }
}
</style>
