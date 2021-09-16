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
          <div v-if="reply.User" class="reply__detail">
            <div class="reply__detail__left">
              <div
                class="reply__detail__avatar"
                v-bind:style="{
                  backgroundImage: 'url(' + reply.User.avatar + ')',
                }"
              ></div>
              <div class="reply__detail__line"></div>
            </div>
            <div class="reply__detail__right">
              <div class="reply__detail__user">
                <span class="reply__detail__name">{{ reply.User.name }}</span>
                <span class="reply__detail__account">{{
                  reply.User.account | altFilter
                }}</span>
                <span class="reply__detail__date"
                  >・{{ reply.createdAt | fromNowFilter }}</span
                >
              </div>
              <div class="reply__detail__content">
                {{ reply.description }}
              </div>
              <div class="reply__detail__reply">
                <span class="reply__detail__reply--text">回覆</span>
                {{ replyTo | altFilter }}
              </div>
            </div>
          </div>
          <section class="section-action">
            <div
              class="section-action__avatar"
              v-bind:style="{
                backgroundImage: 'url(' + currentUser.avatar + ')',
              }"
            ></div>
            <textarea
              class="section-action__comment"
              id="section-action__comment"
              v-model.trim="comment"
              name="comment"
              rows="7"
              minlength="1"
              :maxlength="commentMaxLength"
              placeholder="推你的回覆"
              required
            ></textarea>
            <button
              class="section-action__btn-reply"
              type="button"
              @click.prevent.stop="handleNewReply"
              :disabled="isProcessing"
            >
              回覆
            </button>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from '@/utils/helpers'
import { mapState } from 'vuex'
import { fromNowFilter, altFilter } from './../utils/mixins'

export default {
  name: 'UserReplyModal',
  props: {
    initReply: {
      type: Object,
      required: true,
    },
    replyTo: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      reply: this.initReply,
      isProcessing: false,
      comment: '',
      commentMaxLength: 140,
    }
  },
  watch: {
    initReply(newValue) {
      this.reply = {
        ...this.reply,
        ...newValue,
      }
    },
  },
  computed: {
    ...mapState(['currentUser']),
  },
  mixins: [fromNowFilter, altFilter],
  methods: {
    handleClose() {
      this.$emit('close')
    },
    // 驗證
    validation() {
      let toastTip = ''
      if (!this.comment || this.comment.length === 0) {
        toastTip = '內容不可空白'
      } else if (this.comment.length > this.commentMaxLength) {
        toastTip = `內容上限 ${this.commentMaxLength} 字`
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
    async handleNewReply() {
      try {
        // if (!this.validation()) {
        //   // 驗證失敗
        //   return
        // }
        this.isProcessing = true
        // const { data } = await usersAPI.tweets.newPost({
        //   description: this.description,
        // })
        // if (data.status !== 'success') {
        //   throw new Error(data.message)
        // }

        this.comment = ''
        this.isProcessing = false
        // 關閉Modal
        this.handleClose()
        // Toast.fire({
        //   icon: 'success',
        //   title: `回覆成功！\n ${data.message}`,
        // })
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
          title: `回覆失敗！\n ${message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
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
    min-height: 450px;
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
    .reply__detail {
      display: flex;
      &__avatar {
        width: 50px;
        height: 50px;
        margin-top: 3px;
        margin-right: 10px;
        border-radius: 50px;
        background-color: #c4c4c4;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &__line {
        width: 2px;
        height: calc(100% - 53px - 10px);
        margin-top: 5px;
        margin-left: 24px;
        background-color: var(--blue-gray-900);
      }
      &__right {
        flex: 1;
      }
      &__name {
        font-weight: bold;
        padding-right: 5px;
        color: var(--text);
      }
      &__account,
      &__date {
        color: var(--gray-500);
      }
      &__reply {
        font-weight: 500;
        margin-top: 4px;
        padding-bottom: 24px;
        color: var(--theme);
        &--text {
          color: var(--gray-500);
        }
      }
      &__content {
        word-break: break-all;
        margin-top: 5px;
        font-weight: normal;
        font-size: 15px;
        color: var(--text);
      }
    }
    .section-action {
      position: relative;
      width: 100%;
      height: 260px;
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
      &__comment {
        width: calc(100% - 60px - 15px);
        height: 182px;
        position: absolute;
        top: 11px;
        left: 60px;
        right: 15px;
        color: var(--text);
        font-weight: 500;
        font-size: 18px;
        border: none;
        resize: none;
        &::-webkit-scrollbar {
          display: none;
        }
        &::placeholder {
          color: var(--gray-400);
        }
      }
      &__btn-reply {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 66px;
        height: 38px;
        background-color: var(--theme);
        border-radius: 50px;
        font-size: 18px;
        font-weight: 500;
        color: var(--white);
        &:disabled {
          background-color: var(--theme-dark);
        }
      }
    }
  }
}
</style>
