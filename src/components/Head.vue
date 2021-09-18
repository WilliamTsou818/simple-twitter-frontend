<template>
  <div class="head">
    <div v-show="backArrow" class="head__back" @click="handleBack">
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
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: 'loading',
      required: true,
    },
    count: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    handleBack() {
      this.$router.back()
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
  border-bottom: 1px solid var(--blue-gray-600);
  font-weight: bold;
  padding: 0 12px;
  cursor: pointer;
  &__back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 16px;
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
    margin-left: 16px;
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
