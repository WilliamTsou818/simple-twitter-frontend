<template>
  <div class="card">
    <div class="card__user">
      <div class="card__user__img">
        <div class="card__user__cover"></div>
        <div class="card__user__avatar"></div>
      </div>
    </div>
    <div class="card__info">
      <div class="card__info__name">
        John Doe
      </div>
      <div class="card__info__id">
        @heyjohn
      </div>
    </div>
    <div class="card__actions">
      <span>1.5K</span>
      <span>20K</span>
    </div>
    <div class="card__follow">
      <span>34 個跟隨中</span>
      <span>59 位跟隨者</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminUserCard',
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  grid-area: span 1;
  /* max-width: 245px; */
  height: 314px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #f6f7f8;
  &__user {
    &__img {
      position: relative;
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
  }
  &__actions {
    padding: 1rem 0;
  }
  &__actions {
    padding: 1rem 0;
  }
}
</style>
