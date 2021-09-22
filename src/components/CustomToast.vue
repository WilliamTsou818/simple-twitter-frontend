<template>
  <div class="toast__wrapper">
    <div class="toast__wrapper__content">
      <div class="toast__wrapper__title">{{ title }}</div>
      <div
        v-if="icon === 'success'"
        class="toast__wrapper__description--success"
      >
        {{ description }}
      </div>
      <div v-if="icon === 'error'" class="toast__wrapper__description--error">
        {{ description }}
      </div>
    </div>
    <div class="toast__wrapper__icon">
      <img
        v-if="icon === 'success'"
        src="@/assets/images/icon/toast_success.svg"
        alt="success_icon"
      />
      <img
        v-if="icon === 'error'"
        src="@/assets/images/icon/toast_error.svg"
        alt="error_icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomToast',
  props: {
    icon: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.toast__wrapper {
  display: flex;
  align-items: center;
  &__content {
    margin-right: 16px;
    flex: 1;
    font-size: 20px;
    font-weight: bold;
    color: var(--black);
    word-break: break-all;
  }
  &__description--success {
    font-size: 16px;
    color: var(--success-color);
  }
  &__description--error {
    font-size: 16px;
    color: var(--input-error-border);
  }
  &__icon {
    width: 56px;
    height: 56px;
  }
}
</style>
