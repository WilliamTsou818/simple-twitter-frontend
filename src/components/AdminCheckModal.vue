<template>
  <transition name="modal">
    <div class="modal" @click.self="handleToggleModal">
      <div class="modal__mask">
        <div class="modal__container">
          <div class="modal__header">
            <button
              @click.stop.prevent="closeModal"
              class="modal__header__close"
            >
              <svg
                class="modal__header__close-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.4141 12L19.2071 6.207C19.5971 5.817 19.5971 5.184 19.2071 4.793C18.8171 4.402 18.1841 4.403 17.7931 4.793L12.0001 10.586L6.20712 4.793C5.81712 4.403 5.18412 4.403 4.79312 4.793C4.40212 5.183 4.40312 5.816 4.79312 6.207L10.5861 12L4.79312 17.793C4.40312 18.183 4.40312 18.816 4.79312 19.207C4.98812 19.402 5.24312 19.5 5.50012 19.5C5.75712 19.5 6.01212 19.402 6.20712 19.207L12.0001 13.414L17.7931 19.207C17.9881 19.402 18.2431 19.5 18.5001 19.5C18.7571 19.5 19.0121 19.402 19.2071 19.207C19.5971 18.817 19.5971 18.184 19.2071 17.793L13.4141 12Z"
                  fill="#FF6600"
                />
              </svg>
            </button>
            <div class="modal__header__title">
              刪除確認
            </div>
          </div>
          <div class="modal__body">
            <div class="modal__body__confirm">確認刪除此推文嗎?</div>
            <div class="modal__body__content">
              <div class="modal__body__user" v-if="confirmTweet.User">
                <div
                  class="modal__body__avatar"
                  v-bind:style="{
                    backgroundImage: 'url(' + confirmTweet.User.avatar + ')',
                  }"
                ></div>
                <div class="modal__body__info">
                  <div class="modal__body__name">
                    {{ confirmTweet.User.name }}
                  </div>
                  <div class="modal__body__account">
                    @{{ confirmTweet.User.account }}
                  </div>
                </div>
              </div>
              <div class="modal__body__description">
                {{ confirmTweet.description }}
              </div>
            </div>
          </div>
          <div class="modal__action">
            <button
              class="modal__action__cancel"
              @click.stop.prevent="closeModal"
            >
              取 消
            </button>
            <button
              class="modal__action__dele"
              @click.stop.prevent="handleClickDelete(confirmTweet.id)"
            >
              刪 除
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'AdminCheckModal',
  props: {
    handleToggleModal: {
      type: Function,
      default: () => {},
    },
    confirmTweet: {
      type: Object,
    },
    handleClickDelete: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    closeModal() {
      this.handleToggleModal()
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-enter,
.modal-leave-active {
  opacity: 0;
  transition: opacity 0.2s ease;
}
.modal-enter .modal__container,
.modal-leave-active .modal__container {
  transform: scale(1.2);
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--gray-200);
  &__container {
    width: 360px;
    background-color: var(--white);
    border-radius: 14px;
    transition: all 0.2s ease;
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 54px;
    border-bottom: 1px solid var(--blue-gray-600);
    &__close {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 32px;
      width: 32px;
      border-radius: 16px;
      &:hover {
        background-color: var(--theme-200);
      }
      &-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
  &__body {
    padding: 20px 0;
    font-size: 16px;
    &__confirm {
      color: var(--gray-500);
    }
    &__user {
      display: flex;
      align-items: center;
      text-align: left;
      margin-bottom: 20px;
    }
    &__info {
      margin-left: 12px;
    }
    &__account {
      font-size: 14px;
      color: var(--gray-500);
    }
    &__avatar {
      min-width: 40px;
      height: 40px;
      border-radius: 20px;
      background-color: #c4c4c4;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: var(--text);
      word-break: break-all;
      padding: 12px;
    }
  }

  &__action {
    display: flex;
    padding: 12px 0;
    box-sizing: border-box;
    border-top: 1px solid var(--blue-gray-600);
    justify-content: space-evenly;
    &__cancel {
      border: 1px solid var(--blue-gray-600);
      padding: 8px 16px;
      color: var(--gray-500);
      border-radius: 50px;
      &:hover {
        border: 1px solid var(--theme);
        color: var(--theme);
      }
    }
    &__dele {
      background-color: var(--theme);
      padding: 8px 16px;
      color: var(--white);
      border-radius: 50px;
      &:hover {
        background-color: var(--theme-600);
      }
    }
  }
}
</style>
