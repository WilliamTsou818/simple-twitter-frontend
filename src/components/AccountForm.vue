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
        :maxlength="accountMaxLength"
        required
      />
      <label for="form__account__input" class="form__account__label">
        帳號
      </label>
    </div>
    <div class="form__name">
      <input
        class="form__name__input"
        v-model="name"
        id="name"
        name="name"
        type="text"
        :maxlength="nameMaxLength"
        required
      />
      <label for="form__name__input" class="form__name__label">
        名稱
      </label>
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
      <label for="form__email__input" class="form__email__label">
        Email
      </label>
    </div>
    <div class="form__password">
      <input
        class="form__password__input"
        v-model="password"
        id="password"
        name="password"
        type="password"
        :maxlength="passwordMaxLength"
        required
      />
      <label for="form__password__input" class="form__password__label">
        密碼
      </label>
    </div>
    <div class="form__checkPassword">
      <input
        class="form__checkPassword__input"
        v-model="checkPassword"
        id="checkPassword"
        name="checkPassword"
        type="password"
        :maxlength="passwordMaxLength"
        required
      />
      <label
        for="form__checkPassword__input"
        class="form__checkPassword__label"
      >
        密碼確認
      </label>
    </div>
    <template v-if="$route.name === 'UserRegister'">
      <button class="form__submit" type="submit" :disabled="isProcessing">
        註冊
      </button>
      <router-link class="form__cancel-link" to="/user/login">
        取消
      </router-link>
    </template>
    <button
      v-else
      class="form__submit form__submit--small"
      type="submit"
      :disabled="isProcessing"
    >
      儲存
    </button>
  </form>
</template>

<script>
import { Toast } from '@/utils/helpers'
export default {
  name: 'AccountForm',
  props: {
    initIsProcessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      account: '',
      name: '',
      email: '',
      password: '',
      checkPassword: '',
      // 字數上限
      accountMaxLength: 50,
      nameMaxLength: 50,
      passwordMaxLength: 50,
      // 註冊中
      isProcessing: false,
    }
  },
  watch: {
    initIsProcessing() {
      this.isProcessing = this.initIsProcessing
    },
  },
  methods: {
    // 表單驗證
    formValidation() {
      let toastTip = ''
      if (
        !this.account ||
        !this.name ||
        !this.email ||
        !this.password ||
        !this.checkPassword
      ) {
        toastTip = '請填寫所有資料'
      } else if (this.account.length > this.accountMaxLength) {
        this.account = ''
        toastTip = `帳號上限 ${this.accountMaxLength} 字`
      } else if (this.name.length > this.nameMaxLength) {
        this.name = ''
        toastTip = `名稱上限 ${this.accountMaxLength} 字`
      } else if (this.password.length > this.passwordMaxLength) {
        this.password = ''
        toastTip = `密碼上限 ${this.accountMaxLength} 字`
      } else if (this.password !== this.checkPassword) {
        this.checkPassword = ''
        toastTip = `密碼輸入不一致`
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
    handleSubmit(e) {
      if (!this.formValidation()) {
        // 驗證失敗
        return
      }
      this.isProcessing = true
      const formData = new FormData(e.target)
      const resquestData = {}
      for (let [key, value] of formData.entries()) {
        resquestData[key] = value
      }
      this.$emit('after-submit', resquestData)
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  width: 540px;
  max-width: 90vw;
  &__account,
  &__name,
  &__email,
  &__password,
  &__checkPassword {
    position: relative;
    margin-top: 30px;
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
  &__submit {
    margin-top: 40px;
    width: 100%;
    height: 50px;
    background-color: var(--theme);
    border-radius: 50px;
    font-size: 18px;
    font-weight: bold;
    color: var(--white);
    &:disabled {
      background-color: var(--theme-dark);
    }
    &--small {
      width: 122px;
    }
  }
  &__cancel-link {
    display: inline-block;
    margin-top: 20px;
    color: var(--blue-light);
    font-size: 18px;
    font-weight: bold;
    text-decoration: underline;
  }
}
</style>
