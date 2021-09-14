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
        required
      />
      <label for="form__account__input" class="form__account__label">
        帳號
      </label>
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
      <label for="form__password__input" class="form__password__label">
        密碼
      </label>
    </div>
    <button class="form__submit" type="submit" :disabled="isProcessing">
      登入
    </button>
  </form>
</template>

<script>
import authorizationAPI from '@/apis/authorization'
import { Toast } from '@/utils/helpers'

export default {
  name: 'LoginForm',
  props: {
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
      account: '',
      password: '',
      isProcessing: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.account || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入帳號和密碼',
          })
          return
        }

        this.isProcessing = true

        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        //將伺服器發送的 token 保存在 localStorage
        localStorage.setItem('token', data.token)

        // 將資料傳入Vuex中
        this.$store.commit('setCurrentUser', data.user)

        //authorization 登入成功轉去指定頁面
        this.$router.push(this.path)
      } catch (err) {
        this.isProcessing = false
        this.password = ''
        Toast.fire({
          icon: 'warning',
          title: '輸入的帳號密碼有誤',
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.form {
  margin: 0 auto;
  width: 540px;
  max-width: 90vw;
  &__title {
    margin-bottom: 40px;
    font-size: 23px;
    font-weight: bold;
    color: var(--text);
  }
  &__account,
  &__password {
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
  }
}
</style>
