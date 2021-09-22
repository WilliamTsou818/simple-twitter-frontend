<template>
  <div class="setting">
    <NavBarAdmin class="sm-d-none" @new-post="handleActionNewPost" />
    <TabBarAdmin class="lg-d-none" @new-post="handleActionNewPost" />
    <main>
      <div class="container container--setting">
        <Head :title="title" />
        <section class="section-form">
          <AccountForm
            :page="page"
            :init-account="currentUser.account"
            :init-name="currentUser.name"
            :init-email="currentUser.email"
          />
        </section>
      </div>
    </main>
    <UserNewPostModal
      v-show="isNewPostModalOpen"
      @close="handleNewPostModalClose"
      @post-success="handleNewPostSuccess"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBarAdmin from '@/components/NavBarAdmin.vue'
import TabBarAdmin from '@/components/TabBarAdmin.vue'
import Head from '@/components/Head'
import AccountForm from '@/components/AccountForm'
import UserNewPostModal from '@/components/UserNewPostModal'
import { newPostAction } from '@/utils/mixins'

export default {
  name: 'UserSetting',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    Head,
    AccountForm,
    UserNewPostModal,
  },
  data() {
    return {
      title: '帳戶設定',
      page: 'setting',
    }
  },
  computed: {
    ...mapState(['currentUser', 'isNewPostModalOpen']),
  },
  mixins: [newPostAction],
  beforeRouteUpdate(to, from, next) {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }
    next()
  },
  beforeDestroy() {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }
  },
  methods: {
    // 關閉Modal
    handleNewPostModalClose() {
      this.$store.dispatch('isNewPostModalOpen', false)
    },
    // 新增推文成功
    handleNewPostSuccess() {
      // 設定需要刷新，需要刷新的頁面必須watch state.isNewPostRefresh的變化
      this.$store.dispatch('isNewPostRefresh', true)
    },
  },
  watch: {
    isNewPostRefresh(isRefresh) {
      if (isRefresh) {
        this.$store.dispatch('isNewPostRefresh', false)
        // ...下面可以自行增加頁面刷新function
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
