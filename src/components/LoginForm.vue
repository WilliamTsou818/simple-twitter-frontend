<template>
  <form class="form" @submit.prevent.stop="handleSubmit">
    <div class="form__title">{{ title }}</div>
    <div class="form__account">
      <input
        class="form__account__input"
        v-model="account"
        id="account"
        name="account"
        type="text"
        pattern="[a-zA-Z0-9_]+"
        required
      />
      <div
        :class="['form__account__border', { error: accountTip.length > 0 }]"
      ></div>
      <label for="form__account__input" class="form__account__label">
        帳號
      </label>
      <span class="form__account__tip">{{ accountTip }}</span>
    </div>
    <div class="form__password">
      <input
        class="form__password__input"
        v-model="password"
        id="password"
        name="password"
        type="password"
        required
      />
      <div
        :class="['form__password__border', { error: passwordTip.length > 0 }]"
      ></div>
      <label for="form__password__input" class="form__password__label">
        密碼
      </label>
      <span class="form__password__tip">{{ passwordTip }}</span>
    </div>
    <button class="form__submit" type="submit">
      <div v-show="!isProcessing">登入</div>
      <div v-show="isProcessing" class="form__submit__spinner"></div>
    </button>
  </form>
</template>

<script>
import authorizationAPI from '@/apis/authorization'
import { Toastification } from './../utils/mixins'

export default {
  name: 'LoginForm',
  mixins: [Toastification],
  props: {
    role: {
      type: String,
      default: 'users',
    },
    title: {
      type: String,
      default: '',
    },
    path: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isProcessing: false,
      account: '',
      password: '',
      // 字數上限
      accountMaxLength: 50,
      passwordMinLength: 4,
      passwordMaxLength: 50,
      // 帳號格式
      regex: /^[a-zA-Z0-9_-]+$/,
      // 驗證提示訊息
      accountTip: '',
      passwordTip: '',
    }
  },
  watch: {
    account() {
      if (!this.account) {
        this.accountTip = '請填寫帳號'
      } else if (this.account.length > this.accountMaxLength) {
        this.accountTip = `帳號上限 ${this.accountMaxLength} 字`
      } else if (!this.regex.test(this.account)) {
        this.accountTip = '帳號只能為英文、數字與_ '
      } else {
        this.accountTip = ''
      }
    },
    password() {
      if (!this.password) {
        this.passwordTip = '請填寫密碼'
      } else if (this.password.length > this.passwordMaxLength) {
        this.passwordTip = `密碼上限 ${this.passwordMaxLength} 字`
      } else if (this.password.length < this.passwordMinLength) {
        this.passwordTip = `密碼至少 ${this.passwordMinLength} 個字`
      } else {
        this.passwordTip = ''
      }
    },
  },
  methods: {
    // 表單驗證
    formValidation() {
      if (this.accountTip.length > 0 || this.passwordTip.length > 0) {
        this.ToastError({
          title: '請正確填寫帳號和密碼',
        })
        return false
      }
      return true
    },
    async handleSubmit() {
      try {
        if (!this.formValidation()) {
          // 驗證失敗
          return
        }
        this.accountTip = ''
        this.passwordTip = ''
        this.isProcessing = true

        // 是哪種登入
        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
          role: this.role,
        })

        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        //將伺服器發送的 token 保存在 localStorage
        localStorage.setItem('token', data.token)

        //authorization 登入成功轉去指定頁面
        this.$router.push(this.path)
        this.ToastSuccess({
          title: '登入成功！',
          description: data.message,
        })
      } catch (err) {
        this.isProcessing = false
        if (err.response) {
          this.handleError(err.response.data)
        } else {
          console.log(err)
          this.ToastError({
            title: '登入失敗！',
            description: err.message,
          })
        }
      }
    },
    // 錯誤提示處理
    handleError(errorData) {
      // console.log(errorData)
      if (errorData.errType === 'UserSingInFormatError') {
        const messageArr = errorData.message.split('|')
        // console.log('messageArr', messageArr)
        messageArr.forEach((message) => {
          if (message.includes('account cannot be blank')) {
            this.accountTip += '請填寫帳號 '
          } else if (message.includes('account should not exceed')) {
            this.accountTip += '帳號上限 50 字 '
          } else if (message.includes('account should only include')) {
            this.accountTip += '帳號只能為英文、數字與_ '
          } else if (message.includes('password cannot be blank')) {
            this.passwordTip += '請填寫密碼 '
          } else if (message.includes('password should not exceed')) {
            this.passwordTip += '密碼上限 50 字 '
          } else if (message.includes('at least 4 characters')) {
            this.passwordTip += '密碼至少 4 個字 '
          }
          this.ToastError({
            title: '登入失敗！',
            description: message,
          })
        })
      } else {
        switch (errorData.errType) {
          case 'UserSingInError':
          case 'UserSingInRoleError':
            this.accountTip = '帳號不存在'
            break
          case 'UserSingInPasswordError':
            this.passwordTip = '密碼輸入錯誤'
            break
          default:
            break
        }
        this.ToastError({
          title: '登入失敗！',
          description: errorData.message,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/mixin.scss';
.form {
  margin: 0 auto;
  width: 540px;
  max-width: 90vw;
  &__title {
    margin-bottom: 40px;
    @include font-setting(23px, bold, var(--text));
  }
  &__account,
  &__password {
    position: relative;
    margin-top: 30px;
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
    &__input:hover ~ &__border:not(.error),
    &__input:focus ~ &__border:not(.error) {
      border-bottom: 2px solid var(--input-hover-border);
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
  &__submit {
    margin-top: 40px;
    width: 100%;
    height: 50px;
    background-color: var(--theme);
    border-radius: 50px;
    @include font-setting(18px, bold, var(--white));
    &:hover {
      background-color: var(--theme-600);
    }
    &__spinner {
      @include spinner(35px, var(--white));
      margin: 0 auto;
    }
  }
}
</style>
