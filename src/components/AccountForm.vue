<template>
  <form class="form" @submit.prevent.stop="handleSubmit">
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
      <span
        :class="[
          'form__account__length',
          { error: accountLength > accountMaxLength },
        ]"
      >
        {{ accountLength }} / {{ accountMaxLength }}
      </span>
    </div>
    <div class="form__name">
      <input
        class="form__name__input"
        v-model="name"
        id="name"
        name="name"
        type="text"
        required
      />
      <div :class="['form__name__border', { error: nameTip.length > 0 }]"></div>
      <label for="form__name__input" class="form__name__label">
        名稱
      </label>
      <span class="form__name__tip">{{ nameTip }}</span>
      <span
        :class="['form__name__length', { error: nameLength > nameMaxLength }]"
      >
        {{ nameLength }} / {{ nameMaxLength }}
      </span>
    </div>
    <div class="form__email">
      <input
        class="form__email__input"
        v-model="email"
        id="email"
        name="email"
        type="email"
        required
      />
      <div
        :class="['form__email__border', { error: emailTip.length > 0 }]"
      ></div>
      <label for="form__email__input" class="form__email__label">
        Email
      </label>
      <span class="form__email__tip">{{ emailTip }}</span>
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
      <span
        :class="[
          'form__password__length',
          { error: passwordLength > passwordMaxLength },
        ]"
      >
        {{ passwordLength }} / {{ passwordMaxLength }}
      </span>
    </div>
    <div class="form__checkPassword">
      <input
        class="form__checkPassword__input"
        v-model="checkPassword"
        id="checkPassword"
        name="checkPassword"
        type="password"
        required
      />
      <div
        :class="[
          'form__checkPassword__border',
          { error: checkPasswordTip.length > 0 },
        ]"
      ></div>
      <label
        for="form__checkPassword__input"
        class="form__checkPassword__label"
      >
        密碼確認
      </label>
      <span class="form__checkPassword__tip">{{ checkPasswordTip }}</span>
    </div>
    <template v-if="$route.name === 'UserRegister'">
      <button class="form__submit" type="submit">
        <div v-show="!isProcessing">註冊</div>
        <div v-show="isProcessing" class="form__submit__spinner"></div>
      </button>
      <router-link class="form__cancel-link" to="/user/login">
        取消
      </router-link>
    </template>
    <div v-else class="form__submit__wrapper">
      <button class="form__submit form__submit--setting" type="submit">
        <div v-show="!isProcessing">儲存</div>
        <div v-show="isProcessing" class="form__submit__spinner"></div>
      </button>
    </div>
  </form>
</template>

<script>
import usersAPI from '@/apis/users'
import { Toastification } from './../utils/mixins'
export default {
  name: 'AccountForm',
  mixins: [Toastification],
  props: {
    page: {
      type: String,
      default: 'signUp',
    },
    initAccount: {
      type: String,
      default: '',
    },
    initName: {
      type: String,
      default: '',
    },
    initEmail: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      account: this.initAccount,
      name: this.initName,
      email: this.initEmail,
      password: '',
      checkPassword: '',
      // 字數上限
      accountMaxLength: 50,
      nameMaxLength: 50,
      passwordMinLength: 4,
      passwordMaxLength: 50,
      // 註冊中
      isProcessing: false,
      // 帳號格式
      regex: /^[a-zA-Z0-9_-]+$/,
      // 驗證提示訊息
      accountTip: '',
      nameTip: '',
      emailTip: '',
      passwordTip: '',
      checkPasswordTip: '',
    }
  },
  computed: {
    // 當前字數
    accountLength() {
      return this.account.length
    },
    nameLength() {
      return this.name.length
    },
    passwordLength() {
      return this.password.length
    },
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
    name() {
      if (!this.name) {
        this.nameTip = '請填寫名稱'
      } else if (this.name.length > this.nameMaxLength) {
        this.nameTip = `名稱上限 ${this.nameMaxLength} 字`
      } else {
        this.nameTip = ''
      }
    },
    email() {
      if (!this.email) {
        this.emailTip = '請填寫Email'
      } else {
        this.emailTip = ''
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
      if (this.checkPassword.length > 0) {
        this.checkPasswordTip =
          this.password !== this.checkPassword ? '密碼輸入不一致' : ''
      }
    },
    checkPassword() {
      if (!this.checkPassword) {
        this.checkPasswordTip = '請填寫密碼確認'
      } else if (this.password !== this.checkPassword) {
        this.checkPasswordTip = '密碼輸入不一致'
      } else {
        this.checkPasswordTip = ''
      }
    },
  },
  methods: {
    // 表單驗證
    formValidation() {
      if (
        this.accountTip.length > 0 ||
        this.nameTip.length > 0 ||
        this.emailTip.length > 0 ||
        this.passwordTip.length > 0 ||
        this.checkPasswordTip.length > 0
      ) {
        this.ToastError({
          title: '請正確填寫所有資料',
        })
        return false
      }
      return true
    },
    handleSubmit(e) {
      if (!this.formValidation()) {
        // 驗證失敗
        return
      }
      this.accountTip = ''
      this.nameTip = ''
      this.emailTip = ''
      this.passwordTip = ''
      this.checkPasswordTip = ''
      this.isProcessing = true
      const formData = new FormData(e.target)
      const requestData = {}
      for (let [key, value] of formData.entries()) {
        requestData[key] = value
      }
      if (this.page === 'signUp') {
        this.handleSignUpSubmit(requestData)
      } else if (this.page === 'setting') {
        this.handleSettingSubmit(requestData)
      }
    },
    // 註冊
    async handleSignUpSubmit(requestData) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.signUp(requestData)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        this.ToastSuccess({
          title: '帳號註冊成功！',
          description: data.message,
        })
        this.$router.push({ name: 'UserLogin' })
      } catch (err) {
        this.isProcessing = false
        if (err.response) {
          this.handleError(err.response.data)
        } else {
          console.log(err)
          this.ToastError({
            title: '帳號註冊失敗！',
            description: err.message,
          })
        }
      }
    },
    // 設定帳戶資料
    async handleSettingSubmit(requestData) {
      try {
        this.isProcessing = true
        const { data } = await usersAPI.setting({
          userId: this.$store.getters.getCurrentUser.id,
          requestData,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        // 更新vuex的state
        const { account, name, email } = data.user
        this.$store.commit('setCurrentUser', { account, name, email })
        this.ToastSuccess({
          title: '帳戶設定成功！',
          description: data.message,
        })
      } catch (err) {
        this.isProcessing = false
        if (err.response) {
          this.handleError(err.response.data)
        } else {
          console.log(err)
          this.ToastError({
            title: '帳戶設定失敗！',
            description: err.message,
          })
        }
      }
    },
    // 錯誤提示處理
    handleError(errorData) {
      // console.log(errorData)
      const title = this.page === 'signUp' ? '帳號註冊失敗！' : '帳戶設定失敗！'
      if (
        errorData.errType === 'UserSingnUpError' ||
        errorData.errType === 'PutUserFormatError'
      ) {
        const messageArr = errorData.message.split('|')
        // console.log('messageArr', messageArr)
        messageArr.forEach((message) => {
          if (message.includes('account cannot be blank')) {
            this.accountTip += '請填寫帳號 '
          } else if (message.includes('account should not exceed')) {
            this.accountTip += '帳號上限 50 字 '
          } else if (message.includes('account should only include')) {
            this.accountTip += '帳號只能為英文、數字與_ '
          } else if (message.includes('name cannot be blank')) {
            this.nameTip += '請填寫名稱 '
          } else if (message.includes('name should not exceed')) {
            this.nameTip += '名稱上限 50 字 '
          } else if (message.includes('email cannot be blank')) {
            this.emailTip += '請填寫Email '
          } else if (message.includes('Email must be a valid email')) {
            this.emailTip += '請填寫正確的Email '
          } else if (message.includes('password cannot be blank')) {
            this.passwordTip += '請填寫密碼 '
          } else if (message.includes('password should not exceed')) {
            this.passwordTip += '密碼上限 50 字 '
          } else if (message.includes('at least 4 characters')) {
            this.passwordTip += '密碼至少 4 個字 '
          } else if (message.includes('is not equal to checkPassword')) {
            this.checkPasswordTip += '密碼輸入不一致 '
          }
          this.ToastError({
            title: title,
            description: message,
          })
        })
      } else {
        switch (errorData.errType) {
          case 'AccountExistsError':
            this.accountTip = '帳號已被使用'
            break
          case 'NameExistsError':
            this.nameTip = '名稱已被使用'
            break
          case 'EmailExistsError':
            this.emailTip = 'Email已被使用'
            break
          default:
            break
        }
        this.ToastError({
          title: title,
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
  width: 100%;
  max-width: 90vw;
  &__account,
  &__name,
  &__email,
  &__password,
  &__checkPassword {
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
    &__length {
      position: absolute;
      top: 52px;
      right: 0;
      font-size: 15px;
      font-weight: 500;
      color: var(--gray-500);
      &.error {
        color: var(--input-error-border);
      }
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
    &--setting {
      width: 122px;
    }
    &__wrapper {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__cancel-link {
    display: inline-block;
    margin-top: 20px;
    @include font-setting(18px, bold, var(--blue-light));
    text-decoration: underline;
  }
}

@media screen and (max-width: 600px) {
  .form__submit__wrapper {
    justify-content: center;
  }
}
</style>
