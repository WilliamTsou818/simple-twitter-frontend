<template>
  <div class="head">
    <div class="head__back" v-show="backArrow">
      <img
        class="head__back__icon"
        src="@/assets/images/icon/back.svg"
        alt="back"
      />
    </div>
    <div class="head__info">
      <div class="head__info__title">{{ title }}</div>
      <div v-show="count" class="head__info__count">{{ count }} 推文</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    backArrow: {
      type: String,
      default: true,
    },
    title: {
      type: String,
      required: true,
    },
    count: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.head {
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  height: 56px;
  text-align: left;
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  font-weight: bold;
  padding: 0 12px;
  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 32px;
    border-radius: 16px;
    cursor: pointer;
    transition-duration: 0.2s;
    transition-property: background-color;
    &:hover {
      background-color: var(--gray-100);
    }
    &__icon {
      width: 24px;
      height: 24px;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    &__title {
      font-size: 18px;
      font-weight: 900;
    }
    &__count {
      font-size: 13px;
      line-height: 13px;
      color: var(--gray-500);
      font-weight: 500;
    }
  }
}
</style>
