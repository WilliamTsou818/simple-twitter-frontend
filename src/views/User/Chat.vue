<template>
  <div class="chat">
    <NavBar class="sm-d-none" @new-post="handleActionNewPost" />
    <TabBar class="lg-d-none" @new-post="handleActionNewPost" />
    <main>
      <router-view />
    </main>
    <UserNewPostModal
      v-show="isNewPostModalOpen"
      @close="handleNewPostModalClose"
      @post-success="handleNewPostSuccess"
    />
    <UserReplyModal
      v-show="isReplyModalOpen"
      :init-reply="replyDetail"
      :reply-to="replyTo"
      @close="handleReplyModalClose"
      @reply-success="handleReplySuccess"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import TabBar from '@/components/TabBar.vue'
import UserReplyModal from '@/components/UserReplyModal'
import UserNewPostModal from '@/components/UserNewPostModal'
import { newPostAction } from '@/utils/mixins'

export default {
  name: 'user',
  components: {
    NavBar,
    TabBar,
    UserReplyModal,
    UserNewPostModal,
  },
  computed: {
    ...mapState(['isNewPostModalOpen', 'isReplyModalOpen', 'replyDetail']),
    replyTo() {
      return this.replyDetail.User ? this.replyDetail.User.account : ''
    },
  },
  mixins: [newPostAction],
  beforeRouteUpdate(to, from, next) {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }
    if (this.isReplyModalOpen) {
      this.$store.dispatch('isReplyModalOpen', false)
    }
    next()
  },
  beforeDestroy() {
    if (this.isNewPostModalOpen) {
      this.handleNewPostModalClose()
    }
    if (this.isReplyModalOpen) {
      this.$store.dispatch('isReplyModalOpen', false)
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
.chat {
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
@media screen and (max-width: 768px) {
  .md-d-none {
    display: none;
  }
}
@media screen and (min-width: 599px) {
  .lg-d-none {
    display: none;
  }
}
</style>
