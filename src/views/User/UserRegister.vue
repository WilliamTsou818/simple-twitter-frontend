<template>
  <div>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="logo" />
    </div>
    <div class="title">建立你的帳號</div>
    <section class="section-form">
      <AccountForm
        :init-is-processing="isProcessing"
        @after-submit="handleAfterSubmit"
      />
    </section>
  </div>
</template>

<script>
import AccountForm from '@/components/AccountForm'

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
        // 透過 API 將表單資料送到伺服器
        await setTimeout(() => {
          console.log('handleAfterSubmit start')
          console.log('resquestData', resquestData)
          this.$router.push({ name: 'UserLogin' })
        }, 3000)
      } catch (err) {
        this.isProcessing = false
        console.log(err)
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
.section-form {
  margin: 0 auto;
  max-width: 540px;
}
</style>
