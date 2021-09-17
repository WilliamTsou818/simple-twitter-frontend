<template>
  <div class="user">
    <NavBarAdmin class="sm-d-none" />
    <TabBarAdmin class="lg-d-none" />
    <main>
      <router-view />
    </main>
    <UserReplyModal
      v-show="isReplyModalOpen"
      :init-reply="tweetDetail"
      :reply-to="replyTo"
      @close="handleReplyModalClose"
      @reply-success="handleReplySuccess"
    />
    <UserPopularTop class="sm-d-none" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBarAdmin from './../components/NavBarAdmin.vue'
import TabBarAdmin from './../components/TabBarAdmin.vue'
import UserReplyModal from '@/components/UserReplyModal'
import UserPopularTop from '@/components/UserPopularTop.vue'

export default {
  name: 'user',
  components: {
    NavBarAdmin,
    TabBarAdmin,
    UserReplyModal,
    UserPopularTop,
  },
  computed: {
    ...mapState(['isReplyModalOpen', 'tweetDetail']),
    replyTo() {
      return this.tweetDetail.User ? this.tweetDetail.User.account : ''
    },
  },
  methods: {
    handleReplyModalClose() {
      this.$store.dispatch('isReplyModalOpen', false)
    },
    handleReplySuccess() {
      // 設定需要刷新，需要刷新的頁面必須watch state.isReplyRefresh的變化
      this.$store.dispatch('isReplyRefresh', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.user {
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
}
main {
  flex: 1;
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
