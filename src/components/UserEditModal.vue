<template>
  <transition name="fade">
    <div class="modal" @click.self="handleToggleModal">
      <div class="modal__mask">
        <div class="modal__container">
          <form @submit.stop.prevent="handleSubmit" id="form">
            <div class="modal__header">
              <button
                @click.stop.prevent="closeModal"
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
                  :style="{ backgroundImage: 'url(' + modalCover + ')' }"
                >
                  <div>
                    <label class="modal__img__label">
                      <img
                        class="modal__img__change"
                        src="@/assets/images/icon/uploadPhoto.svg"
                        alt="uploadPhoto"
                        @click="handleCoverUpload"
                      />
                      <img
                        v-if="coverRemoveBtn"
                        class="modal__img__change"
                        src="@/assets/images/icon/remove.svg"
                        alt="remove"
                        @click="handleCoverRemove"
                      />
                    </label>
                    <input
                      type="file"
                      name="cover"
                      ref="cover"
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
                  :style="{ backgroundImage: 'url(' + modalAvatar + ')' }"
                >
                  <div>
                    <label class="modal__img__label">
                      <img
                        class="modal__img__change"
                        src="@/assets/images/icon/uploadPhoto.svg"
                        alt="uploadPhoto"
                        @click="handleAvatarUpload"
                      />
                      <img
                        v-if="avatarRemoveBtn"
                        class="modal__img__change"
                        src="@/assets/images/icon/remove.svg"
                        alt="remove"
                        @click="handleAvatarRemove"
                      />
                    </label>
                    <input
                      type="file"
                      name="avatar"
                      ref="avatar"
                      id="avatar"
                      class="input-file"
                      accept="image/*"
                      @change="handleAvatarChange"
                      hidden
                    />
                  </div>
                </div>
                <div class="modal__img__tip">{{ coverTip }}</div>
                <div class="modal__img__tip">{{ avatarTip }}</div>
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
                <div
                  class="form__name__border"
                  :class="{ error: nameTip.length > 0 }"
                ></div>
                <label for="name" class="form__name__label">
                  名稱
                </label>
                <span class="form__name__tip">{{ nameTip }}</span>
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
                  :maxlength="introductionMaxLength"
                ></textarea>
                <div
                  class="form__introduction__border"
                  :class="{ error: introductionTip.length > 0 }"
                ></div>
                <label for="introduction" class="form__introduction__label">
                  自我介紹
                </label>
                <span class="form__introduction__tip">{{
                  introductionTip
                }}</span>
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
      //modal顯示的cover
      modalCover: '',
      coverRemoveBtn: false,
      coverTip: '',
      coverFileType: '',
      coverSize: 0,
      coverMaxSize: '1000000',
      modalAvatar: '',
      avatarRemoveBtn: false,
      avatarTip: '',
      avatarFileType: '',
      avatarSize: 0,
      avatarMaxSize: '1000000',
      name: '',
      nameTip: '',
      nameMaxLength: 50,
      introduction: '',
      introductionMaxLength: 160,
      introductionTip: '',
      isProcessing: false,
    }
  },
  computed: {
    cover() {
      return (
        this.$store.getters.getViewUser.data.cover ||
        this.$store.getters.getCurrentUser.cover
      )
    },
    avatar() {
      return (
        this.$store.getters.getViewUser.data.avatar ||
        this.$store.getters.getCurrentUser.avatar
      )
    },
  },
  watch: {
    modalCover() {
      this.coverRemoveBtn = this.modalCover === this.cover ? false : true
      if (this.coverFileType && this.coverFileType !== 'image') {
        this.coverTip = '封面照格式錯誤，請選擇 JPG PNG GIF 等圖檔'
      } else {
        this.coverTip = ''
      }
      if (this.coverSize > this.coverMaxSize) {
        this.coverTip = '封面大小限制為1MB以下'
      } else {
        this.coverTip = ''
      }
    },
    modalAvatar() {
      this.avatarRemoveBtn = this.modalAvatar === this.avatar ? false : true
      if (this.avatarFileType && this.avatarFileType !== 'image') {
        this.avatarTip = '頭像格式錯誤，請選擇 JPG PNG GIF 等圖檔'
      } else {
        this.avatarTip = ''
      }
      if (this.avatarSize > this.avatarMaxSize) {
        console.log(this.avatarSize, this.avatarMaxSize)
        this.avatarTip = '頭像大小限制為1MB以下'
      } else {
        this.avatarTip = ''
      }
    },
    name() {
      if (!this.name) {
        this.nameTip = '請填寫名稱'
      } else if (this.name.length > this.nameMaxLength) {
        this.nameTip = `名稱上限 ${this.nameMaxLength} 字`
      } else {
        this.nameTip = ''
      }
    },
    introduction() {
      if (this.introduction.length > this.introductionMaxLength) {
        this.introductionTip = `介紹上限 ${this.introductionMaxLength} 字`
      } else {
        this.introductionTip = ''
      }
    },
  },
  created() {
    this.modalCover = this.$store.getters.getCurrentUser.cover
    this.modalAvatar = this.$store.getters.getCurrentUser.avatar
    this.name = this.$store.getters.getCurrentUser.name
    this.introduction = this.$store.getters.getCurrentUser.introduction
    this.userId = this.$store.getters.getCurrentUser.id
  },
  methods: {
    closeModal() {
      //還原未修改前
      this.handleCoverRemove()
      this.handleAvatarRemove()
      this.name = this.$store.getters.getCurrentUser.name
      this.introduction = this.$store.getters.getCurrentUser.introduction
      this.handleToggleModal()
    },
    // 處理 cover 預覽圖片
    handleCoverUpload() {
      this.$refs.cover.click()
    },
    handleCoverRemove() {
      this.modalCover = this.$store.getters.getCurrentUser.cover
      this.$refs.cover.value = ''
      this.coverFileType = ''
      this.coverSize = 0
      console.log(this.coverSize)
    },
    handleCoverChange() {
      const { files } = this.$refs.cover
      this.coverFileType = files[0].type.split('/')[0]
      this.coverSize = files[0].size
      const imageURL = window.URL.createObjectURL(files[0])
      this.modalCover = imageURL
    },
    // 處理 avatar 預覽圖片
    handleAvatarUpload() {
      this.$refs.avatar.click()
    },
    handleAvatarRemove() {
      this.modalAvatar = this.$store.getters.getCurrentUser.avatar
      this.$refs.avatar.value = ''
      this.avatarFileType = ''
      this.avatarSize = 0
    },
    handleAvatarChange() {
      const { files } = this.$refs.avatar
      this.avatarFileType = files[0].type.split('/')[0]
      this.avatarSize = files[0].size
      const imageURL = window.URL.createObjectURL(files[0])
      this.modalAvatar = imageURL
    },
    formValidation() {
      if (
        this.nameTip.length > 0 ||
        this.introductionTip.length > 0 ||
        this.coverTip.length > 0 ||
        this.avatarTip.length > 0
      ) {
        Toast.fire({
          icon: 'warning',
          title: '請正確填寫所有資料',
        })
        return false
      }
      return true
    },
    async handleSubmit(e) {
      if (!this.formValidation()) {
        // 驗證失敗
        return
      }
      try {
        const formData = new FormData(e.target)
        this.isProcessing = true
        const { data } = await usersAPI.editUserProfile({
          userId: this.userId,
          formData,
        })
        if (data.status === 'success') {
          this.$store.dispatch('fetchCurrentUser')
          this.$store.dispatch('handleInitViewUser', data.user)
          this.modalCover = this.$store.getters.getViewUser.data.cover
          this.modalAvatar = this.$store.getters.getViewUser.data.avatar
        }
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: `資料更新成功！\n ${data.message}`,
        })
      } catch (err) {
        this.isProcessing = false
        let message = ''
        let errType = ''
        if (err.response) {
          console.log(err.response.data)
          message = err.response.data.message
          errType = err.response.data.errType
          //TODO: 無法處理多個回傳錯誤訊息
          if (errType === 'NameExistsError') {
            this.nameTip = '名稱已被使用'
          }
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
@import '../assets/styles/mixin.scss';
.form {
  width: 100%;
  &__name {
    position: relative;
    border-radius: 4px;
    &__label {
      position: absolute;
      top: 5px;
      left: 10px;
      @include font-setting(15px, 500, var(--gray-500));
    }
    &__input {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      padding-top: 20px;
      background-color: var(--input-bg);
      border: none;
      @include font-setting(19px, 500, var(--black));
    }
    &__input:hover ~ &__border:not(.error),
    &__input:focus ~ &__border:not(.error) {
      border-bottom: 2px solid var(--input-hover-border);
    }
    &__border {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 0 0 4px 4px;
      background-color: var(--gray-500);
      &.error {
        border-bottom: 2px solid var(--input-error-border);
      }
    }
    &__tip {
      position: absolute;
      top: 52px;
      left: 0;
      font-size: 15px;
      font-weight: 500;
      color: var(--input-error-border);
    }
  }
  &__introduction {
    position: relative;
    &__label {
      position: absolute;
      top: 5px;
      left: 10px;
      @include font-setting(15px, 500, var(--gray-500));
    }
    &__textarea {
      resize: none;
      width: 100%;
      word-wrap: break-word;
      height: 150px;
      padding: 0 10px;
      padding-top: 22px;
      background-color: var(--input-bg);
      border: none;
      border-radius: 4px;
      /* border-bottom: 2px solid var(--gray-500); */
      @include font-setting(19px, 500, var(--black));
    }
    &__textarea:hover ~ &__border:not(.error),
    &__textarea:focus ~ &__border:not(.error) {
      border-bottom: 2px solid var(--input-hover-border);
    }
    &__border {
      position: absolute;
      top: 150px;
      left: 0;
      width: 100%;
      height: 2px;
      border-radius: 0 0 4px 4px;
      background-color: var(--gray-500);
      &.error {
        border-bottom: 2px solid var(--input-error-border);
      }
    }
    &__tip {
      position: absolute;
      top: 152px;
      left: 0;
      font-size: 15px;
      font-weight: 500;
      color: var(--input-error-border);
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
      padding-left: 40px;
      @include font-setting(19px, 900, var(--text));
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
      background-color: var(--theme-dark);
      pointer-events: all !important;
      &:hover {
        background-color: var(--theme-dark);
      }
    }
  }
  &__img {
    position: relative;
    height: 200px;
    &__tip {
      font-size: 15px;
      font-weight: 500;
      color: var(--input-error-border);
    }
    &__label {
      display: flex;
      padding: 20px;
      border-radius: 20px;
      background-color: var(--gray-100);
      &:hover {
        background-color: var(--gray-200);
      }
    }
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
