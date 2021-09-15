<template>
  <div class="popular">
    <div class="popular__title">
      Popular
    </div>
    <div class="popular__user-list">
      <!-- <router-link :to="{ name: 'user-tweets', params: { id: user.id } }"> -->
      <div class="popular__user-list__list">
        <div class="popular__user-list__avatar"></div>
        <div class="popular__user-list__info">
          <div class="popular__user-list__name">user__name</div>
          <div class="popular__user-list__account">user__account</div>
        </div>
        <button class="popular__user-list__action">
          <div v-show="!userIsFollowing" class="popular__user-list__follow">
            追隨
          </div>
          <div v-show="userIsFollowing" class="popular__user-list__following">
            正在跟隨
          </div>
        </button>
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
//TODO:如果是在 追蹤頁面要更改上層follow狀態
export default {
  name: 'UserPopularTop.vue',
  data() {
    return {
      userIsFollowing: false,
    }
  },
}
</script>

<style scoped lang="scss">
.popular {
  width: 350px;
  background-color: var(--blue-gray-500);
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 82px;
  border-radius: 14px;
  min-height: 50px;
  padding-bottom: 8px;
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
    }
    &__avatar {
      width: 50px;
      height: 50px;
      background-color: #c4c4c4;
      border-radius: 50px;
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
    &__id {
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
