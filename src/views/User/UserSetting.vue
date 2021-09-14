<template>
  <div class="setting">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <div class="container container--setting">
        <Head :title="title" />
        <section class="section-form">
          <AccountForm
            :init-is-processing="isProcessing"
            @after-submit="handleAfterSubmit"
          />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import Head from '@/components/Head'
import AccountForm from '@/components/AccountForm'

export default {
  name: 'UserRegister',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    Head,
    AccountForm,
  },
  data() {
    return {
      title: '帳戶設定',
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
          // this.$router.push({ name: 'UserLogin' })
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
.setting {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  // TODO:測試用
  border: 1px solid red;
}
main {
  flex: 1;
  // TODO:測試用
  border: 1px solid blue;
}
.section-form {
  max-width: 642px;
  padding: 0 16px;
}
@media screen and (max-width: 600px) {
  .sm-d-none {
    display: none;
  }
}
@media screen and (min-width: 599px) {
  .lg-d-none {
    display: none;
  }
}
</style>
