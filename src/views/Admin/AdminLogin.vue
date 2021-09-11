<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div>後台登入</div>
    <form @submit.prevent.stop="handSubmit">
      <div>
        <label for="email">帳號</label>
        <input
          v-model="email"
          id="email"
          name="email"
          type="email"
          required
          autofocus
        />
      </div>
      <div>
        <label for="password">密碼</label>
        <input
          v-model="password"
          id="password"
          name="password"
          type="password"
          required
          autofocus
        />
      </div>
      <button type="submit" :disabled="isProcessing">
        登入
      </button>
    </form>
  </div>
</template>

<script>
import adminAPI from './../../apis/admin'
import { Toast } from './../../utils/helpers'

export default {
  data() {
    return {
      email: '',
      password: '',
      isProcessing: false,
    }
  },
  methods: {
    async handSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password',
          })
          return
        }

        this.isProcessing = true

        const { data } = await adminAPI.signIn({
          email: this.email,
          password: this.password,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        console.log(data)
        //將伺服器發送的 token 保存在 localStorage
        localStorage.setItem('token', data.token)

        // 將資料傳入Vuex中
        this.$store.commit('setCurrentUser', data.user)

        //admin 登入成功轉去推文列表
        this.$router.push('/admin/tweets')
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
.logo {
  margin: 0 auto;
  margin-top: 65px;
  width: 50px;
  height: 50px;
}
</style>
