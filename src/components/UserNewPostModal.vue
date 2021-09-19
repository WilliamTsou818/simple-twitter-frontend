<template>
  <div class="modal">
    <div class="modal__mask" @click="handleClose">
      <div class="modal__container" @click.stop="">
        <!-- header -->
        <div class="modal__header">
          <button class="modal__header__close" @click="handleClose">
            <img
              class="modal__header__close-icon"
              src="@/assets/images/icon/close_theme.svg"
              alt="close"
            />
          </button>
        </div>
        <!-- body -->
        <div class="modal__body">
          <section class="section-post">
            <div
              class="section-post__avatar"
              v-bind:style="{
                backgroundImage: 'url(' + currentUser.avatar + ')',
              }"
            ></div>
            <textarea
              class="section-post__description"
              id="section-post__description"
              v-model.trim="description"
              name="description"
              rows="6"
              minlength="1"
              :maxlength="descriptionMaxLength"
              placeholder="有什麼新鮮事？"
              required
            ></textarea>
            <button
              class="section-post__btn-tweet"
              type="button"
              @click.prevent.stop="handleNewPost"
            >
              <div v-show="!isProcessing">推文</div>
              <div
                v-show="isProcessing"
                class="section-post__btn-tweet__spinner"
              ></div>
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'

export default {
  name: 'UserNewPostModal',
  data() {
    return {
      isProcessing: false,
      description: '',
      descriptionMaxLength: 140,
    }
  },
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    handleClose() {
      this.description = ''
      this.$emit('close')
    },
    // 驗證
    validation() {
      let toastTip = ''
      if (!this.description || this.description.length === 0) {
        toastTip = '內容不可空白'
      } else if (this.description.length > this.descriptionMaxLength) {
        toastTip = `內容上限 ${this.descriptionMaxLength} 字`
      }
      if (toastTip.length !== 0) {
        Toast.fire({
          icon: 'warning',
          title: toastTip,
        })
        return false
      }
      return true
    },
    async handleNewPost() {
      try {
        if (!this.validation()) {
          // 驗證失敗
          return
        }
        this.isProcessing = true
        const { data } = await usersAPI.tweets.newPost({
          description: this.description,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.description = ''
        this.isProcessing = false

        // 關閉Modal
        this.handleClose()
        // 處理資料刷新
        this.$emit('post-success')
        Toast.fire({
          icon: 'success',
          title: `推文成功！\n ${data.message}`,
        })
      } catch (err) {
        this.description = ''
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
          title: `推文失敗！\n ${message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.modal {
  &__mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 4;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background-color: var(--gray-200);
  }
  &__container {
    width: 85vw;
    max-width: 600px;
    min-height: 300px;
    height: auto;
    margin-top: 56px;
    background-color: var(--white);
    border-radius: 14px;
  }
  &__header {
    display: flex;
    align-items: center;
    padding: 15px;
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
    padding: 15px;
    text-align: left;
    .section-post {
      position: relative;
      width: 100%;
      height: 215px;
      &__avatar {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: #c4c4c4;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &__description {
        width: calc(100% - 60px - 15px);
        height: 156px;
        position: absolute;
        top: 11px;
        left: 60px;
        right: 15px;
        @include font-setting(18px, 500, var(--text));
        border: none;
        resize: none;
        &::-webkit-scrollbar {
          display: none;
        }
        &::placeholder {
          color: var(--gray-400);
        }
      }
      &__btn-tweet {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 66px;
        height: 38px;
        background-color: var(--theme);
        border-radius: 50px;
        @include font-setting(18px, 500, var(--white));
        &__spinner {
          @include spinner(24px, var(--white));
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
