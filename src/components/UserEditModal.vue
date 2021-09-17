<template>
  <transition name="fade">
    <div class="modal" @click.self="handleToggleModal">
      <div class="modal__mask">
        <div class="modal__container">
          <form @submit.stop.prevent="handleSubmit" id="form">
            <div class="modal__header">
              <button
                @click.stop.prevent="handleToggleModal"
                class="modal__header__close"
              >
                <img
                  class="modal__header__close-icon"
                  src="@/assets/images/icon/close_theme.svg"
                  alt="close"
                />
              </button>
              <div class="modal__header__title">
                編輯個人檔案
              </div>
              <button
                v-show="!isProcessing"
                class="modal__header__save"
                form="form"
                type="submit"
              >
                儲存
              </button>
              <button
                v-show="isProcessing"
                class="modal__header__save--wait"
                disabled
              >
                更新中
              </button>
            </div>
            <div class="modal__body">
              <div class="modal__img">
                <div
                  class="modal__img__cover"
                  :style="{ backgroundImage: 'url(' + cover + ')' }"
                >
                  <div>
                    <label for="cover">
                      <svg
                        class="modal__img__change"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083H6.438C7.633 3.17 9.722 2 12 2C14.277 2 16.367 3.17 17.562 5.083H19.708C20.972 5.083 22 6.11 22 7.375V19.708C22 20.972 20.972 22 19.708 22ZM4.292 6.583C3.855 6.583 3.5 6.938 3.5 7.375V19.708C3.5 20.145 3.855 20.5 4.292 20.5H19.708C20.145 20.5 20.5 20.145 20.5 19.708V7.375C20.5 6.938 20.145 6.583 19.708 6.583H17.258C16.941 6.633 16.626 6.488 16.476 6.201C15.596 4.536 13.882 3.501 12 3.501C10.117 3.501 8.402 4.536 7.524 6.203C7.364 6.505 7.022 6.663 6.691 6.583H4.293H4.292Z"
                          fill="white"
                        />
                        <path
                          d="M12 8.16699C9.32001 8.16699 7.14001 10.347 7.14001 13.027C7.14001 15.707 9.32001 17.887 12 17.887C14.68 17.887 16.86 15.707 16.86 13.027C16.86 10.347 14.68 8.16699 12 8.16699ZM14 13.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75C11.586 15.75 11.25 15.414 11.25 15V13.75H10C9.58601 13.75 9.25001 13.414 9.25001 13C9.25001 12.586 9.58601 12.25 10 12.25H11.25V11C11.25 10.586 11.586 10.25 12 10.25C12.414 10.25 12.75 10.586 12.75 11V12.25H14C14.414 12.25 14.75 12.586 14.75 13C14.75 13.414 14.414 13.75 14 13.75Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                    <input
                      type="file"
                      name="cover"
                      id="cover"
                      class="input-file"
                      accept="image/*"
                      @change="handleCoverChange"
                      hidden
                    />
                  </div>
                </div>
                <div
                  class="modal__img__avatar"
                  :style="{ backgroundImage: 'url(' + avatar + ')' }"
                >
                  <div>
                    <label for="avatar">
                      <svg
                        class="modal__img__change"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.708 22H4.292C3.028 22 2 20.972 2 19.708V7.375C2 6.11 3.028 5.083 4.292 5.083H6.438C7.633 3.17 9.722 2 12 2C14.277 2 16.367 3.17 17.562 5.083H19.708C20.972 5.083 22 6.11 22 7.375V19.708C22 20.972 20.972 22 19.708 22ZM4.292 6.583C3.855 6.583 3.5 6.938 3.5 7.375V19.708C3.5 20.145 3.855 20.5 4.292 20.5H19.708C20.145 20.5 20.5 20.145 20.5 19.708V7.375C20.5 6.938 20.145 6.583 19.708 6.583H17.258C16.941 6.633 16.626 6.488 16.476 6.201C15.596 4.536 13.882 3.501 12 3.501C10.117 3.501 8.402 4.536 7.524 6.203C7.364 6.505 7.022 6.663 6.691 6.583H4.293H4.292Z"
                          fill="white"
                        />
                        <path
                          d="M12 8.16699C9.32001 8.16699 7.14001 10.347 7.14001 13.027C7.14001 15.707 9.32001 17.887 12 17.887C14.68 17.887 16.86 15.707 16.86 13.027C16.86 10.347 14.68 8.16699 12 8.16699ZM14 13.75H12.75V15C12.75 15.414 12.414 15.75 12 15.75C11.586 15.75 11.25 15.414 11.25 15V13.75H10C9.58601 13.75 9.25001 13.414 9.25001 13C9.25001 12.586 9.58601 12.25 10 12.25H11.25V11C11.25 10.586 11.586 10.25 12 10.25C12.414 10.25 12.75 10.586 12.75 11V12.25H14C14.414 12.25 14.75 12.586 14.75 13C14.75 13.414 14.414 13.75 14 13.75Z"
                          fill="white"
                        />
                      </svg>
                    </label>
                    <input
                      type="file"
                      name="avatar"
                      id="avatar"
                      class="input-file"
                      accept="image/*"
                      @change="handleAvatarChange"
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="modal__name">
              <div class="form__name">
                <input
                  class="form__name__input"
                  id="name"
                  v-model="name"
                  name="name"
                  type="text"
                  required
                  maxlength="50"
                />
                <label for="name" class="form__name__label">
                  名稱
                </label>
              </div>
              <div class="modal__name__length">
                {{ name ? name.length : '0' }}/50
              </div>
            </div>
            <div class="modal__introduction">
              <div class="form__introduction">
                <textarea
                  v-model.trim="introduction"
                  class="form__introduction__textarea"
                  name="introduction"
                  id="introduction"
                  cols="40"
                  rows="8"
                  maxlength="160"
                ></textarea>
                <label for="introduction" class="form__introduction__label">
                  自我介紹
                </label>
              </div>
              <div class="modal__introduction__length">
                {{ introduction ? introduction.length : '0' }}/160
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
export default {
  name: 'UserEditModal',
  props: {
    handleToggleModal: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      userId: '',
      cover: '',
      avatar: '',
      name: '',
      introduction: '',
      isProcessing: false,
    }
  },
  created() {
    this.cover = this.$store.getters.getCurrentUser.cover
    this.avatar = this.$store.getters.getCurrentUser.avatar
    this.name = this.$store.getters.getCurrentUser.name
    this.introduction = this.$store.getters.getCurrentUser.introduction
    this.userId = this.$store.getters.getCurrentUser.id
  },
  methods: {
    closeModal() {},
    // 處理 avatar 預覽圖片
    handleAvatarChange(e) {
      const files = e.target.files
      const imageURL = window.URL.createObjectURL(files[0])
      this.avatar = imageURL
    },
    // 處理 cover 預覽圖片
    handleCoverChange(e) {
      const files = e.target.files
      const imageURL = window.URL.createObjectURL(files[0])
      this.cover = imageURL
    },

    async handleSubmit(e) {
      try {
        const formData = new FormData(e.target)
        this.isProcessing = true
        const { data } = await usersAPI.editUserProfile({
          userId: this.userId,
          formData,
        })
        console.log(data)
        if (data.status === 'success') {
          this.$store.dispatch('handleInitViewUser', data.user)
        }
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        console.log(data)
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: `資料更新成功！\n ${data.message}`,
        })
      } catch (err) {
        this.isProcessing = false
        let message = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
        } else {
          console.log(err)
          message = err.message
        }

        Toast.fire({
          icon: 'error',
          title: `資料更新失敗！\n ${message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  &__name {
    position: relative;
    border-radius: 4px;
    border-bottom: 2px solid var(--gray-500);
    &__label {
      position: absolute;
      top: 5px;
      left: 10px;
      font-size: 15px;
      font-weight: 500;
      color: var(--gray-500);
    }
    &__input {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      padding-top: 20px;
      background-color: var(--input-bg);
      border: none;
      font-size: 19px;
      font-weight: 500;
      color: var(--black);
    }
  }
  &__introduction {
    position: relative;
    &__label {
      position: absolute;
      top: 5px;
      left: 10px;
      font-size: 15px;
      font-weight: 500;
      color: var(--gray-500);
    }
    &__textarea {
      resize: none;
      width: 100%;
      height: 150px;
      padding: 0 10px;
      padding-top: 22px;
      background-color: var(--input-bg);
      border: none;
      border-radius: 4px;
      border-bottom: 2px solid var(--gray-500);
      font-size: 19px;
      font-weight: 500;
      color: var(--black);
    }
  }
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
    width: 600px;
    background-color: var(--white);
    border-radius: 14px;
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
    &__title {
      flex: 1;
      text-align: left;
      font-size: 19px;
      font-weight: 900;
      padding-left: 40px;
    }
    &__save,
    &__save--wait {
      font-family: Noto Sans TC;
      font-size: 15px;
      color: var(--white);
      padding: 8px 16px;
      background-color: var(--theme);
      border-radius: 50px;
      &:hover {
        background-color: var(--theme-600);
      }
    }
    &__save--wait {
      cursor: wait;
      pointer-events: all !important;
    }
  }
  &__img {
    position: relative;
    height: 200px;
    &__change {
      cursor: pointer;
      > .label {
        cursor: pointer;
      }
    }
    &__cover,
    &__avatar {
      display: flex;
      align-items: center;
      justify-content: center;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &__cover {
      width: 100%;
      height: 200px;
      background-color: var(--gray-400);
    }
    &__avatar {
      position: absolute;
      top: 140px;
      left: 15px;
      width: 120px;
      height: 120px;
      background-color: var(--gray-400);
      border: 4px solid var(--white);
      border-radius: 60px;
    }
  }
  &__name {
    padding-top: 80px;
    margin: 0 15px;
    &__length {
      text-align: right;
      font-size: 15px;
      color: var(--gray-500);
    }
  }
  &__introduction {
    margin: 0 15px;
    padding-top: 20px;
    padding-bottom: 50px;
    &__length {
      text-align: right;
      font-size: 15px;
      color: var(--gray-500);
    }
  }
}
</style>
