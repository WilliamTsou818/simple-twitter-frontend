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
            :init-account="currentUser.account"
            :init-name="currentUser.name"
            :init-email="currentUser.email"
            @after-submit="handleAfterSubmit"
          />
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import Head from '@/components/Head'
import AccountForm from '@/components/AccountForm'
import usersAPI from '@/apis/users'
import { Toast } from '@/utils/helpers'

export default {
  name: 'UserSetting',
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
  computed: {
    ...mapState(['currentUser']),
  },
  methods: {
    async handleAfterSubmit(requestData) {
      try {
        console.log(requestData)
        this.isProcessing = true
        // console.log('requestData', requestData)
        const { data } = await usersAPI.setting({
          userId: this.currentUser.id,
          requestData,
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isProcessing = false
        console.log('data', data)
        // 更新vuex的state
        const { account, name, email } = data.user
        this.$store.commit('setCurrentUser', { account, name, email })
        Toast.fire({
          icon: 'success',
          title: `帳戶設定成功！\n ${data.message}`,
        })
      } catch (err) {
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
          title: `帳戶設定失敗！\n ${message}`,
        })
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
}
main {
  flex: 1;
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
