<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="title">建立你的帳號</div>
    <AccountForm
      :init-is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AccountForm from '@/components/AccountForm'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UserRegister',
  components: {
    AccountForm,
  },
  data() {
    return {
      isProcessing: false,
    }
  },
  methods: {
    async handleAfterSubmit(resquestData) {
      try {
        this.isProcessing = true
        console.log('resquestData', resquestData)

        const { data } = await usersAPI.signUp(resquestData)
        if (data.status !== 'success') {
          throw new Error(data.message)
        }

        Toast.fire({
          icon: 'success',
          title: `帳號註冊成功！\n ${data.message}`,
        })
        this.$router.push({ name: 'UserLogin' })
      } catch (err) {
        this.isProcessing = false
        console.log(err)
        Toast.fire({
          icon: 'error',
          title: `帳號註冊失敗！\n ${err.message}`,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  margin: 60px auto 20px auto;
  width: 50px;
  height: 50px;
  padding: 5px;
}
.title {
  margin-bottom: 40px;
  font-size: 23px;
  font-weight: bold;
  color: var(--text);
}
</style>
